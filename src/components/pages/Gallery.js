import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardImg from 'react-bootstrap/esm/CardImg';
 import panda from "../img/panda1.gif";
function Gallery() {
        const style = { height: "300px" };
  return (
    <Card style={{ width: '18rem' , margin:'00px' }}>
      <Card.Img variant="top" src={panda} alt="my-gif" style={style} />
      <Card.Body>
      <Card.Img variant="top"src={panda} alt="my-gif" style={style} />    
      </Card.Body>
    </Card>
  );
}

export default Gallery;