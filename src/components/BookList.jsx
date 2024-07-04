import { useState } from "react";
import { Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";
import CommentArea from "./CommentArea";

const BookList =({category})=> {
  // state = {
  //   ricerca: "",
   
  //   selectedBook:""

  // };
  const [ricerca, setRicerca]= useState("")
  const [selectedBook, setSelectedBook]= useState("")

  const selezionato = (selectedbook) => {
    setSelectedBook(selectedbook);
  };

 
 

    return (
      <Container>
        <Row>
          <Col md={6}>
            <Row>
              <InputGroup size="default" className="my-5">
                <InputGroup.Text id="inputGroup-sizing-default">Cerca Libro</InputGroup.Text>
                <Form.Control  data-testid="filterInput" aria-label="default" aria-describedby="inputGroup-sizing-default" value={ricerca} onChange={e => setRicerca(e.target.value)  } />
              </InputGroup>

              {/* faccio un filtro che controlla se nel titolo dei vari libri è incusa la striga che ho in state.ricerca */}
              {/* se passa la condizione mi faccio un map del nuovo array e ci creo le carte */}
              {category
                .filter(libro => libro.title.toLowerCase().includes(ricerca.toLowerCase()))
                .map(book => {
                  // la condizione passa anche con stringa vuota.. quindi non serve mettere un ? con le 2 condizioni
                  // farà sempre un map su array pieno o array filtrato
                  return <SingleBook book={book} key={book.asin} selected={selezionato} selectedStile={selectedBook===book}/>;
                })}
            </Row>
          </Col>
          <Col md={6}>
          {selectedBook && <CommentArea idBook={selectedBook.asin} selectedBook={selectedBook}/>}
          </Col>
        </Row>
      </Container>
    );
  }

export default BookList;
