import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Team Project</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link> 
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
