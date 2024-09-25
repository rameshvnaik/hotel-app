import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faHome, faUtensils, faTags, faSignInAlt, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#">Bangalore-Cafe</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          
          <Nav className="ms-auto"> 
            <Nav.Link href="/home">
              <FontAwesomeIcon icon={faHome} /> Home
            </Nav.Link>
            <Nav.Link href="#menu">
              <FontAwesomeIcon icon={faUtensils} /> Menu
            </Nav.Link>
            <Nav.Link href="#offers">
              <FontAwesomeIcon icon={faTags} /> Offers
            </Nav.Link>
            <Nav.Link href="/signIN">
              <FontAwesomeIcon icon={faSignInAlt} /> Sign In
            </Nav.Link>
            <Nav.Link href="#cart">
              <FontAwesomeIcon icon={faShoppingCart} /> Cart
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
