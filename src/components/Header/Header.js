import './Header.css'

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { BsSearch } from "react-icons/bs";
import { BsJustify } from "react-icons/bs";




function Header() {
  return (
    <div variant={false}>
      <Navbar variant="dark" expand="lg" style={{ backgroundColor: '#333545', color: '#fff' }}>
        <Container  >
          <Navbar.Brand href="/">La-Fish-La-Grill</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Button className="ml-25 ms  w-50" variant="light" style={{ maxHeight: '100px', marginLeft: '5%' }}><BsSearch /> Search For Your Favourite Grills </Button>
            <Nav
              className="ml-auto my-2 my-lg-0"
              style={{ maxHeight: '100px', marginLeft: '25%' }}
              navbarScroll
            >


              <NavDropdown title="Nigeria" id="navbarScrollingDropdown" style={{ maxHeight: '100px', marginLeft: '-10%' }}>
                <NavDropdown.Item href="/card">Card</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/register">
                  User  Registration
                </NavDropdown.Item>
              </NavDropdown>


            </Nav>



            <Button className="ml-auto ms" style={{ maxHeight: '80px', marginRight: '5%', fontsize: '15' }} variant="danger">Sign-up</Button>
            <BsJustify Icon size={30} style={{ maxHeight: '80px', marginLeft: '-4%', cursor: 'pointer' }} />
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container fluid style={{ cursor: "pointer", backgroundColor: '#1F2533' }}>
        <Navbar collapseOnSelect expand="lg" variant="dark">
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/chicken">Chicken<sup style={{ color: 'red' }}>new</sup></Nav.Link>
                <Nav.Link href="/chick">Fries</Nav.Link>
                <Nav.Link href="/burger">Burger</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="#deets">Restaurent<sup style={{ color: 'red' }}>new</sup></Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                  place Your Order
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>

    </div>
  );
}

export default Header;


