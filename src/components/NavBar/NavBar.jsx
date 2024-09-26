import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUtensils, faTags, faSignInAlt, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import './NavBar.scss'
import { useNavigate,Link } from 'react-router-dom';


function NavBar() {
  const cartItemCount = useSelector((state) => state.cartItem.length);
  const navigate=useNavigate();

  return (
    <Navbar expand="lg" className="bg-body-tertiary" fixed="top">
      <Container>
        <Navbar.Brand href="#">Bangalore-Cafe</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="ms-auto">
            <Nav.Link href="/">
              <FontAwesomeIcon icon={faHome} /> Home
            </Nav.Link>
            <Nav.Link href="/menu">
              <FontAwesomeIcon icon={faUtensils} /> Menu
            </Nav.Link>
            <Nav.Link href="#offers">
              <FontAwesomeIcon icon={faTags} /> Offers
            </Nav.Link>
            <Nav.Link as={Link} to="/signIN">
              <FontAwesomeIcon icon={faSignInAlt} /> Sign In
            </Nav.Link>
            <Nav.Link  onClick={()=>navigate("/cart")} className="cart-icon">
              <FontAwesomeIcon icon={faShoppingCart} /> Cart
              {cartItemCount > 0 && (
                <span className="cart-badge">{cartItemCount}</span>
              )}
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
