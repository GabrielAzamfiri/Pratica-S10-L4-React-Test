import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

function TopBar(props) {
  // alla selezione del dropdown parte la funzione handleSelect
  //  che chiama la funzione setCategory data come props alla quale diamo come parametro eventKey cosi da portarci il dato su App.jsx
  const handleSelect = eventKey => props.setCategory(eventKey);
  

  return (
    <Nav variant="pills" activeKey="1" onSelect={handleSelect}>
      <Nav.Item>
        <Nav.Link eventKey="1" href="#/home" disabled>
          Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="2" title="Item" disabled>
          About
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="3" disabled>
          Browse
        </Nav.Link>
      </Nav.Item>
      <NavDropdown title="Category" id="nav-dropdown">
        <NavDropdown.Item eventKey="fantasy">Fantasy</NavDropdown.Item>
        <NavDropdown.Item eventKey="history">History</NavDropdown.Item>
        <NavDropdown.Item eventKey="horror">Horror</NavDropdown.Item>
        <NavDropdown.Item eventKey="romance">Romance</NavDropdown.Item>
        <NavDropdown.Item eventKey="scifi">Scifi</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  );
}

export default TopBar;
