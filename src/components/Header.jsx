import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

function Header() {
  return (
    <Navbar className="navbar-opacity" bg="white" variant="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">MonSite</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Accueil</Nav.Link>
            <Nav.Link href="#link">Lien</Nav.Link>
            {/* Ajoutez d'autres liens de navigation ici */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

