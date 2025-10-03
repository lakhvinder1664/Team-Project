import React from "react-bootstrap";
import { Container, Row, Col, Nav, Tab, Button } from 'react-bootstrap';
import { FaFacebookF, FaInstagram, FaPinterestP, FaLinkedinIn } from "react-icons/fa";

function Footer(){
    return(
        <>
        <div className="footer">
            <Container>
                <Col lg={3} ><div className="container-column">
                        <div className="footer-logo">
                            <img src="" alt="" />
                        </div>
                        <div className="footer-p">
                            <p>India’s trusted name in premium aluminium doors and windows, blending world-class German engineering with refined Indian craftsmanship.</p>
                        </div>
                        <div className="footer-socials">
                            <FaFacebookF size={28} color="#1877F2" />
                        </div>
                    </div></Col>
            </Container>
        </div>
        </>
    );
}

export default Footer;