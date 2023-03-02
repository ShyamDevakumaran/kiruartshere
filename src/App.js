import {BrowserRouter as Router ,  Routes , Route  } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Home from './components/navbar/Home'
import About from './components/pages/About'
import Footer from './components/footer/Footer'
import Contact from './components/Contact/Contact'
import Gallery from './components/pages/Gallery'







const App = () =>
{
  return (
    <>
        <Navbar />


        <Router>
       <Routes>

       <Route exact path='/' element={<Home />} />
      <Route exact path='/Home' element={<Home />} />
      <Route exact path='/About' element={<About />} />
      <Route exact path='/Contact' element={<Contact />} />
      <Route exact path='/Gallery' element={<Gallery />} />
      

      </Routes>
    </Router>

    {/* <Footer /> */}






    
      
    </>
  )
}

export default App