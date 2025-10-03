import React from "react";
import { Container, Row, Col, Nav, Tab, Button } from 'react-bootstrap';
import { FaFacebookF, FaInstagram, FaPinterestP, FaLinkedinIn } from "react-icons/fa";
import logo from '../assets/images/logo.png'
function Footer() {
  return (
    <footer>
      <div className="footer">
            <Container>
                <Row>
                  <Col lg={3} ><div className="container-column">
                        <div className="footer-logo">
                            <img src={logo} alt="" />
                        </div>
                        <div className="footer-p">
                            <p>India’s trusted name in premium aluminium doors and windows, blending world-class German engineering with refined Indian craftsmanship.</p>
                        </div>
                        <div className="footer-socials">
                            <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF  color="black" /></a>
                            <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram  color="black" /></a>
                            <a href="https://pinterest.com" target="_blank" rel="noreferrer"><FaPinterestP  color="black" /></a>
                            <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedinIn  color="black" /></a>
                        </div>
                    </div>
                </Col>
                <Col lg={3}>
                  <div className="footer-head">
                    <h3>Our Existence</h3>
                    <ul>
                      <li><a href="">contact@theschon.com</a></li>
                      <li><a href="">+91 9535359481</a></li>
                      <li><a href="">+91 7019209490</a></li>
                    </ul>
                  </div>
                </Col>
                <Col lg={3}>
                  <div className="footer-head">
                    <h3>Quick Links</h3>
                    <ul>
                      <li><a href="">Our Blogs</a></li>
                      <li><a href="">About Us</a></li>
                      <li><a href="">News</a></li>
                      <li><a href="">Contact Us</a></li>
                    </ul>
                  </div>
                </Col>
                <Col lg={3}>
                  <div className="footer-head">
                    <h3>Products</h3>
                    <ul>
                      <li><a href="">Doors</a></li>
                      <li><a href="">Windows</a></li>
                      <li><a href="">Railings</a></li>
                      <li><a href="">Glasses</a></li>
                      <li><a href="">Cubicles</a></li>
                    </ul>
                  </div>
                </Col>
                  <div className="all-right-deserve text-center">
                      <p>All Rights Reserved</p>
                  </div>
                </Row>

            </Container>
        </div>
    </footer>
  );
}

export default Footer;
