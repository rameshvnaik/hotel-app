import React , {useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUtensils, faTags, faSignInAlt, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import './NavBar.scss'
import { useNavigate,Link } from 'react-router-dom';


function NavBar() {
  const cartItemCount = useSelector((state) => state.cartItem.length);
  const navigate=useNavigate();

  const [expanded, setExpanded] = useState(false); 

  const handleNavClick = () => {
    setExpanded(false); 
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary" fixed="top" expanded={expanded}>
      <Container>
        <Navbar.Brand href="#">Bangalore-Cafe</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />

        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="ms-auto">
            
            <Link className="nav-link" to="/" onClick={handleNavClick}>
              <FontAwesomeIcon icon={faHome} /> Home
            </Link>
            <Link className="nav-link"  to="/menu" onClick={handleNavClick} >
              <FontAwesomeIcon icon={faUtensils} /> Menu
            </Link>
            <Link className="nav-link"  to="#offers" onClick={handleNavClick}>
              <FontAwesomeIcon icon={faTags} /> Offers
            </Link>
            <Link className="nav-link"  to="/signIN" onClick={handleNavClick}>
              <FontAwesomeIcon icon={faSignInAlt} /> Sign In
            </Link>
            <Link  to="/cart" className="nav-link cart-icon" onClick={handleNavClick}>
              <FontAwesomeIcon icon={faShoppingCart} /> Cart
              {cartItemCount > 0 && (
                <span className="cart-badge">{cartItemCount}</span>
              )}
            </Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
