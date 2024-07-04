import { useEffect, useState } from "react";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";
import StickyBox from "react-sticky-box";
import { Spinner } from "react-bootstrap";

const CommentArea = props => {
  
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchGetComments = async () => {
    setIsLoading(true);

    fetch("https://striveschool-api.herokuapp.com/api/comments/" + props.idBook, {
      headers: {
        // chiave di autenticazione
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjdkNmFhYjNhMzhjYjAwMTVmNjNkMTEiLCJpYXQiOjE3MTk0OTUzMzksImV4cCI6MTcyMDcwNDkzOX0.5vVe16YRa1Bcku51ZRl4mQCyD5otMCjV230YZ_RzwgU",
      },
    })
      .then(resp => {
        if (resp.ok) {
          // restituiamo il dato convertito in array da JSON
          return resp.json();
        } else {
          throw new Error("Errore nel reperimento del commento");
        }
      })
      .then(comLibro => {
        console.log(comLibro);
        setComments(comLibro);
        setIsLoading(false);
      })
      .catch(err => alert(err));
  };

  useEffect(() => {
    fetchGetComments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.idBook]);

  return (
    <StickyBox offsetTop={20} offsetBottom={20}>
      <div className="">
        <h2>
          Recensioni del libro <span className="text-info">{props.selectedBook.title}</span>{" "}
        </h2>
        {isLoading && <Spinner animation="border" role="status" variant="info"></Spinner>}
        <CommentsList comments={comments} reloadComments={fetchGetComments} />
        <AddComment idBook={props.idBook} reloadComments={fetchGetComments} />
      </div>
    </StickyBox>
  );
};

export default CommentArea;
