import React, { useState } from 'react'
import Button from '../navbar/Button';
import logo from '../img/logo.png'
const Navbar = () => {
  const style = { height:"60px",width:"60px" };
    let Links =[
     
      {name:"HOME",link:"/Home"},
      {name:"GALLERY",link:"/Gallery"},
      {name:"SERVICE",link:"/Service"},
      {name:"ABOUT",link:"/About"},
      {name:"BLOG'S",link:"/Bog"},
      {name:"CONTACT",link:"/Contact"},
    ];
    let [open,setOpen]=useState(false);
  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
      <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
      <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800' >
        <span className='text-3xl text-indigo-500 mr-4 pt-4  '>
        {/* <ion-icon name="logo-ionic"></ion-icon> */}
        <img src={logo} alt="my-gif" style={style} />
        </span>
        KiruArts
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
      <ion-icon name={open ? 'close':'menu'}></ion-icon>
      </div>

      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1]
       left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
              <a href={link.link} className='text-black-800 hover:text-blue-600 duration-500'>{link.name}</a>
            </li>
          ))
        }
        <Button>
          Get Quote
        </Button>
      </ul>
      </div>
    </div>
  )
}

export default Navbar