
import { Button } from "react-bootstrap";
import { Trash3 } from "react-bootstrap-icons";

const SingleComment =(props)=> {
  const deleteComment = async () => {
    
    try {
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + props.comment._id, {
        method: "DELETE",
        headers: {
          // chiave di autenticazione
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjdkNmFhYjNhMzhjYjAwMTVmNjNkMTEiLCJpYXQiOjE3MTk0OTUzMzksImV4cCI6MTcyMDcwNDkzOX0.5vVe16YRa1Bcku51ZRl4mQCyD5otMCjV230YZ_RzwgU",
        },
      });
      if (resp.ok) {
        // qui dentro, sicuri di aver già eliminato l'elemento, chiameremo di nuovo la funzione fetchReservations che chiederà al server l'array aggiornato,
        // salvandolo di conseguenza come nuovo this.state.reservations
        props.reloadComments()
        const deletedObj = await resp.json();
        alert("abbiamo eliminato la prenotazione di: " + deletedObj.author);
      } else {
        throw new Error("Errore nel reperimento delle prenotazioni");
      }
    } catch (err) {
      console.log(err);
    }
  };

    return (
      <div className="border border-info ">
        <p>
          <strong>Comment:</strong> {props.comment.comment}
        </p>
        <div className="d-flex justify-content-between align-items-center">
          <p>
            <strong>Rate:</strong> {props.comment.rate}
          </p>
          <Button variant="danger" size="sm" onClick={deleteComment}>
            {/* icona di react-bootstrap-icons */}
            <Trash3 />
          </Button>
        </div>
      </div>
    );
  }

export default SingleComment;
