
import { Card, Col } from "react-bootstrap";


const SingleBook = (props)=> {
  
 

    return (
      <Col sm={6}   key={`book-${props.book.asin}`}>
        <Card role="card" onClick={() => props.selected(props.book)} className={props.selectedStile ? "border border-info bg-black" : "border-none"}>
          <Card.Img variant="top" src={props.book.img}  />
          <Card.Body>
            <Card.Title className="text-truncate">{props.book.title}</Card.Title>
            <Card.Text>Price: {props.book.price}$ </Card.Text>
          
          </Card.Body>
        </Card>
        
      
      </Col>
    );
  }

export default SingleBook;
