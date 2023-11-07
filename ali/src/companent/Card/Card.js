import "./Card.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';



function Cardi({tittle,image,price,description}) {
    let [count, setCount] = useState(0);
    function qush() {
      if (count<10){
        setCount (count+1)
      }
    }
    function ayr(){
      if (count>0){
        setCount (count-1)
      }
    }
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>allwiht</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    );
}

export default Cardi;
