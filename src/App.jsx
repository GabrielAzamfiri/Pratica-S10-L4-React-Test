import {  useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TopBar from "./components/TopBar";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import BookList from "./components/BookList";

// **************file di libri****************
import fantasy from "../src/data/books/fantasy.json";
import horror from "../src/data/books/horror.json";
import history from "../src/data/books/history.json";
import scifi from "../src/data/books/scifi.json";
import romance from "../src/data/books/romance.json";

const App = () => {
  // state = {
  //   categoria: "fantasy",
  //   horror:[...horror],
  //   history:[...history] ,
  //   scifi: [...scifi],
  //   fantasy:[...fantasy],
  //   romance:[...romance]
  // };
  const [categoria, setCategoria] = useState([...fantasy]);

  // funzione che modifica lo state categoria grazie al eventKey
  const selectCategory = eventKey => {
    switch (eventKey) {
      case "fantasy":
        setCategoria([...fantasy]);
        break;
      case "horror":
        setCategoria([...horror]);
        break;
      case "history":
        setCategoria([...history]);
        break;
      case "scifi":
        setCategoria([...scifi]);
        break;
      case "romance":
        setCategoria([...romance]);
        break;

      default:
        break;
    }
  };

  return (
    <div className="App">
      {/* do la funzione selectCategory come props cosi da chiamarla dentro TopBar e farle avere eventKey come dato */}
      <TopBar setCategory={selectCategory} />
      <Welcome category={categoria} />
      {/* passo come props lo state.catogoria cosi da avere l'array di film in base alla selezione del dropdown */}
      <BookList category={categoria} />
      <MyFooter />
    </div>
  );
};

export default App;
