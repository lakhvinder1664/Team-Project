import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav, Button, Offcanvas } from "react-bootstrap";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../assets/images/logo.png";

const CustomNavbar = () => {
  const [show, setShow] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar
        expand="lg"
        fixed="top"
        className={`py-3 navbar-transition ${scrolled ? "navbar-small" : "navbar-large"}`}
      >
        <Container>
          <GiHamburgerMenu size={24} onClick={() => setShow(true)} style={{ cursor: "pointer" }} />
          <Navbar.Brand className="mx-auto">
            <img src={logo} alt="Logo" height={scrolled ? 30 : 50} />
          </Navbar.Brand>
          <Nav className="d-flex align-items-center">
            <Button variant="primary">Get in Touch</Button>
          </Nav>
        </Container>
      </Navbar>

      <Offcanvas show={show} onHide={() => setShow(false)} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default CustomNavbar;
