import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import instagramIconWhite from '../assets/img/instalogowhite.png'; // Ajustez le chemin vers votre icône blanche
import instagramIconBlack from '../assets/img/instalogo.png'; // Ajustez le chemin vers votre icône noire

function Header({ onNavigate, invertColors }) {
  const [expanded, setExpanded] = useState(false);
  // Sélection de l'icône Instagram en fonction de invertColors
  const instagramIcon = invertColors ? instagramIconWhite : instagramIconBlack;

  return (
    <Navbar className={`navbar-opacity custom-navbar ${invertColors ? 'invert-colors' : ''}`} bg={invertColors ? "dark" : "white"} variant={invertColors ? "dark" : "light"} expand="lg" expanded={expanded} onToggle={() => setExpanded(!expanded)}>
      <Container className="d-flex justify-content-center justify-content-lg-between">
        <Nav className="me-auto order-1">
          <Nav.Link href="https://www.instagram.com/adven_tis" target="_blank" className="instagram-link">
            <img src={instagramIcon} alt="Instagram" style={{ height: '2em', opacity: invertColors ? 0.75 : 1, transition: 'opacity 0.25s ease' }}/>
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
