import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav, Button, Offcanvas, Tab } from "react-bootstrap";
import logo from "../assets/images/logo.png";
import side from "../assets/images/side.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
import HoverDropdown from "./Hoverdrop";
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";


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
        className={`py-3 navbar-transition ${scrolled ? "navbar-small" : "navbar-large"}` }>
          <Container>
        

          <Button
            className="side-img-btn"
            variant="transparent"
            onClick={() => setShow(true)}>
            <img src={side} alt="Menu" className="side-img" />
          </Button>
          {/* Side image as clickable menu trigger */}

          <Navbar.Brand className="center-nav-logo">
            <img
              src={logo}
              alt="Logo"
              style={{
              height: scrolled ? "60px" : "80px",
              transition: "height 0.3s ease"
            }} />
          </Navbar.Brand>

          <Nav className="d-none d-lg-flex align-items-center">
            <Button className="nav-btn">
              Get in Touch <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: "8px" }} />
            </Button>
          </Nav>
        </Container>
      </Navbar>

      {/* Offcanvas Menu */}
      <Offcanvas show={show} onHide={() => setShow(false)} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title><img className="menu-logo" src={logo} />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          
            <Nav.Link href="/">Home</Nav.Link>
            <HoverDropdown title="Why Schon" id="why-schon-dropdown" >
                  <NavDropdown.Item href="#action3"><FontAwesomeIcon icon={faCircleChevronRight}  /> About us</NavDropdown.Item>
                  <NavDropdown.Item href="#action4"><FontAwesomeIcon icon={faCircleChevronRight}  /> On-stop Housing Solutions</NavDropdown.Item>
                  <NavDropdown.Item href="#action5"><FontAwesomeIcon icon={faCircleChevronRight}  /> Quality Assurance</NavDropdown.Item>
                  <NavDropdown.Item href="#action6"><FontAwesomeIcon icon={faCircleChevronRight}  /> Sustainability</NavDropdown.Item>
            </HoverDropdown>
            <Nav.Link href="/product">Product</Nav.Link>
            <Nav.Link as={Link} to="/teammates/rozy/Projects">Projects</Nav.Link>
            <Nav.Link href="/blogs">Blogs</Nav.Link>
            <Nav.Link as={Link} to ="/teammates/saraswati/Contact">Contact</Nav.Link>
        </Offcanvas.Body>
            <div className="contact-btns">
                  <button className="header-btn">
              Get in Touch <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                  <button className="oposite-hover header-btn">
              Become a Dealer  <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                </div>
      </Offcanvas>
    </>
  );
};

export default CustomNavbar;
