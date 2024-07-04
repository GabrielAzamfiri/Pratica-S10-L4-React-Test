import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";

const AddComment = props => {
  
  const [comment, setComment] = useState({
    comment: "",
    rate: 1,
    elementId: props.idBook,
    createdAt: "",
  });
  const addComment = e => {
    e.preventDefault();

    setComment({ ...comment, createdAt: new Date() }); // scrittura dello stato

    fetch("https://striveschool-api.herokuapp.com/api/comments", {
      method: "POST",
      body: JSON.stringify(comment),
      headers: {
        "Content-Type": "application/json",
        // chiave di autenticazione
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjdkNmFhYjNhMzhjYjAwMTVmNjNkMTEiLCJpYXQiOjE3MTk0OTUzMzksImV4cCI6MTcyMDcwNDkzOX0.5vVe16YRa1Bcku51ZRl4mQCyD5otMCjV230YZ_RzwgU",
      },
    })
      .then(resp => {
        if (resp.ok) {
          props.reloadComments();
          setComment({
           
              comment: "",
              rate: 1,
              elementId: props.idBook,
              createdAt: "",
         
          });

          alert("Commento aggiunto con successo!");
        } else {
          throw new Error("Error fetching data");
        }
      })
      .catch(err => alert(err));
  };
  useEffect(() => {
    setComment({
      
        comment: "",
        rate: 1,
        elementId: props.idBook,
        createdAt: "",

    });
  }, [props.idBook]);

  return (
    <Form className="text-start" onSubmit={addComment}>
      <h2> Add commento </h2>

      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Comment</Form.Label>
        <Form.Control
          type="text"
          placeholder="Inserisci un commento"
          value={comment.comment}
          onChange={e => setComment({ ...comment, comment: e.target.value })} // scrittura dello stato
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formSeats">
        <Form.Label>Rate Book</Form.Label>
        <Form.Select aria-label="Number of seats" onChange={e => setComment({ ...comment, rate: e.target.value })}>
          <option value="1">⭐</option>
          <option value="2">⭐⭐</option>
          <option value="3">⭐⭐⭐</option>
          <option value="4">⭐⭐⭐⭐</option>
          <option value="5">⭐⭐⭐⭐⭐</option>
        </Form.Select>
      </Form.Group>
      <Button variant="info" type="submit">
        Invia commento
      </Button>
    </Form>
   
  );
};

export default AddComment;
