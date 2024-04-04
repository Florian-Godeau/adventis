import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

function Header({ onNavigate }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar className="navbar-opacity custom-navbar" bg="white" variant="light" expand="lg" expanded={expanded} onToggle={() => setExpanded(!expanded)}>
      <Container className="d-flex justify-content-center justify-content-lg-between">
        <Nav className="me-auto order-1">
          <Nav.Link href="https://www.instagram.com/adven_tis" target="_blank" className="instagram-link">
            <FontAwesomeIcon icon={faInstagram} /> {/* Utilisation de l'icône Instagram */}
          </Nav.Link>
        </Nav>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-auto order-2" />
        <Navbar.Brand href="#" onClick={() => onNavigate(1)} className="mx-auto order-lg-1 artistName">ADVENTIS</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav" className="order-3">
          <Nav className="ms-auto">
            <Nav.Link onClick={() => onNavigate(1)}>Accueil</Nav.Link>
            <Nav.Link onClick={() => onNavigate(2)}>À propos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
