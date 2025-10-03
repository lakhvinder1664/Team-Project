import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav, Button, Offcanvas } from "react-bootstrap";
import logo from "../assets/images/logo.png";
import side from "../assets/images/side.png";
import { FaArrowRight } from "react-icons/fa";

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
      {/* Navbar */}
      <Navbar
        expand="lg"
        fixed="top"
        className={`py-3 navbar-transition ${scrolled ? "navbar-small" : "navbar-large"}`}
      >
        <Container>
          {/* Side image as clickable menu trigger */}
          <Button
            className="side-img-btn d-lg-none"
            variant="transparent"
            onClick={() => setShow(true)}
          >
            <img src={side} alt="Menu" className="side-img" />
          </Button>

          <Navbar.Brand className="mx-auto">
            <img
              src={logo}
              alt="Logo"
              height={scrolled ? 40 : 50}
              style={{ transition: "height 0.3s ease" }}
            />
          </Navbar.Brand>

          <Nav className="d-none d-lg-flex align-items-center">
            <Button className="nav-btn">
              Get in Touch <FaArrowRight style={{ marginLeft: "8px" }} />
            </Button>
          </Nav>
        </Container>
      </Navbar>

      {/* Offcanvas Menu */}
      <Offcanvas show={show} onHide={() => setShow(false)} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column gap-3">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/why-schon">Why Schon</Nav.Link>
            <Nav.Link href="/product">Product</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="/blogs">Blogs</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default CustomNavbar;
