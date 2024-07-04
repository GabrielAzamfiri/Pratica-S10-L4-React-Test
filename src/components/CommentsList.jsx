
import SingleComment from "./SingleComment";
import { Alert } from "react-bootstrap";


const  CommentsList =(props)=> {
    
    // author:     "ciaocaro@caro.caro"
    // comment: "130 Martin Garrix si vola"
    // createdAt : "2024-01-26T10:53:21.282Z"
    // elementId  :   "65b38f0931a73f0019d5c801"
    // rate  :  5
    // updatedAt :   "2024-01-26T10:53:21.282Z"
    // __v :   0
    // _id  :   "65b38f2131a73f0019d5c802"

   
        return (
           
                props.comments.length > 0 ? props.comments.map((comment) => (
                    <SingleComment comment={comment} key={comment._id} reloadComments={props.reloadComments}/>
                )) : <Alert key="info" variant="info">
                Non ci sono recensioni per questo libro!
              </Alert>
                
       
            
        );
    }

export default CommentsList