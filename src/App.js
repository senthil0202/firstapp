import './App.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import UncontrolledExample from './components/Carousel';
import AlwaysOpenExample from './components/Accordion';
import BasicExample from './components/Card';

function App() {
return (
  <>
        <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
          
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="http://localhost:5000/">Login</NavDropdown.Item>
              <NavDropdown.Item href="http://localhost:5000/forgotpwd.html">
                Forgot Password
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="http://localhost:5000/signup.html">
              Signup
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar><br/>
    <UncontrolledExample/><br/><br/>
    <AlwaysOpenExample/>
    <BasicExample/>
    </>
  );
}

export default App;
