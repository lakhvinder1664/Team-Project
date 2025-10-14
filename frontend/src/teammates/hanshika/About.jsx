import React from 'react';
import Container from 'react-bootstrap/esm/Container';
// counter page
import { Row, Col } from 'react-bootstrap'
import CountUp from 'react-countup'
// import { useInView } from 'react-intersection-observer'
  // mission image//
import MissionIcon from "../../assets/images/aboutpagebannericon2.png";
import VisionIcon from "../../assets/images/aboutpagebannericon1.png";
//jouney images//
import Arrow1 from "../../assets/images/ar1.png";
import Arrow2 from "../../assets/images/ar2.png";
// form 
import {Form, Button } from "react-bootstrap";
import Logo from "../../assets/images/logo.png";
// experience images
import Bangalore from "../../assets/images/Bangalore.svg";
import Hyderabad from "../../assets/images/Hyderabad.svg";
import Chennai from "../../assets/images/Chennai.svg";

// css
import "../hanshika/hanshika.css";
function About() { 
    // const { ref, inView } = useInView({
    //   triggerOnce: true, 
    //   threshold: 0.2   
    // })
  return (
    <>
    <div className="Banner-main-1" id='movenav'>
      <div className="Banner-bg"></div> 
      <Container className="Banner-content">
        <div className="Banner-about">
          <h2 className="fade-in">About Us</h2>
          <p className="fade-in delay-1">
            Crafting Excellence with Every Frame, Backed by a Legacy of Trust.
          </p>
          <Button className="Banner-btn fade-in delay-2">
            Get Free Consultation ➔
          </Button>
        </div>
      </Container>
    </div>
    {/*  video page start  */}

        <Container>
      <div className='video-main'>
        <div className='video-para'>
          <p>Welcome to Schon Doorways - Where Precision Meets Sophistication</p>
        </div>

        {/* for video */}
        <div className='video-iframe' style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', maxWidth: '100%' }}>
          <iframe
            src="https://www.youtube.com/embed/6xWIRLubPGc?playlist=6xWIRLubPGc&loop=1&autoplay=0&mute=1&loop=1"
            title="Schon Doorways Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          ></iframe>
        </div>  
      </div>
    </Container>
    
  {/* counter page start  */}
     <div className='Counter-main'>
      <Container>
        <Row>
          <Col lg={6} md={12} sm={12}>
            <div className='left-content'>
              <h5>
                India’s trusted name in premium aluminium doors and windows,
                blending world-class German engineering with refined Indian craftsmanship.
              </h5>
              <p>
                At Schon Doorways, we’re redefining how India experiences doors,
                windows, and architectural aluminium systems. Founded in 2013,
                our journey began with a simple yet ambitious goal — to blend
                German engineering excellence with Indian innovation. Today,
                we are trusted by 5,000+ architects and 250,000+ homeowners
                across 200+ cities. From ultra-slim aluminium doors and windows
                to custom railings, partitions, and shower cubicles, we offer
                end-to-end solutions that combine style, strength, and sustainability.
                With a strong belief in precision, customization, and partnership,
                Schon is not just a product brand — it’s a space-making partner
                for every visionary design.
              </p>
            </div>
          </Col>

          <Col lg={6} md={12} sm={12}>
            <div className="right-count">

              <div className="counter col_fourth col_fourth-1">
                <h2>250+</h2>
                <div className="inner-content"><p>Cities</p></div>
              </div>

              <div className="counter col_fourth col_fourth-1">
                <h2>4+</h2>
                <div className="inner-content"><p>Mn Sq.Ft of Doors & Windows</p></div>
              </div>

              <div className="counter col_fourth col_fourth-1">
                <h2>1500+</h2>
                <div className="inner-content"><p>Projects</p></div>
              </div>

              <div className="counter col_fourth col_fourth-1">
                <h2>200+</h2>
                <div className="inner-content"><p>Experts</p></div>
              </div>

            </div>
          </Col>
        </Row>
      </Container>
    </div>

    {/* mission page start from here */}
        <div className='Misson-main'>
      <Container>
        <Row>
          <Col lg={6} md={12} sm={12}> 
            <div className='mission-box'>
              <div className='icon-mission'>
                <img src={MissionIcon} alt="Our Mission" />
              </div>
              <div className='our-mission'>
                <h2>Our Mission</h2>
                <p>
                  To empower architects, designers, and homeowners with
                  world-class aluminium doors, windows, and interior systems — crafted
                  with German precision, engineered for India, and delivered through
                  seamless end-to-end service.
                </p>
              </div>
            </div>
          </Col>

          <Col lg={6} md={12} sm={12}> 
            <div className='mission-box'>
              <div className='icon-mission'>
                <img src={VisionIcon} alt="Our Vision" />
              </div>
              <div className='our-mission'>
                <h2>Our Vision</h2>
                <p>
                  To become India’s'most trusted name in architectural aluminium
                  systems by shaping future-ready spaces with innovation, integrity,
                  and design excellence—one doorway at a time.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>

    {/* journey page start from here */}
          <div className='journey-main'>
        <Container>
      <div className='journey-content'>
        <h2>Our Journey</h2>
        <p>From Vision to reality, our journey is built on design excellence, engineering precision, and enduring trust. Each milestone reflects our commitment to shaping better spaces—one project, one partnership, one breakthrough at a time.</p>
      </div>
    <Row>
        <Col  lg={3} md={12} sm={12}> 
        <div className='boxes-main card-1 one'>
            <div className='try-gori'>
                <div className='boxes-year'>
                <h2>2013</h2>
            </div>
            <div className='year-image'>
                <img src={Arrow2} alt="" />
            </div>
            </div>
            <div className='year-content'>
                <h5>Foundation Year</h5>
                <p>Schon Doorways was established with a vision to redefine aluminium systems in India through engineering excellence, quality, and innovation.</p>
            </div>
        </div>
           
             <div className='boxes-main card-1 two'>
            <div className='try-gori'>    
            <div className='boxes-year'>
                <h2>2021</h2>
            </div>
            <div className='year-image'>
                <img src={Arrow2} alt="" />
            </div>
            </div> 
            <div className='year-content'>
                <h5>Completed 1,00,000 Sq. Ft. of Installations</h5>
               <p>Delivered landmark projects in luxury homes, commercial buildings, and gated communities.</p>
            </div>
        </div>
        </Col>

  <Col  lg={3} md={12} sm={12}> 
         <div className='boxes-main-2 card-1 three'>
            <div className='year-content'>
                <h5>First 100 Projects Completed</h5>
                <p>Rapid growth in residential and commercial spaces, marking early success in premium door and window installations..</p>
            </div>
            <div className='try-gori'>
             <div className='year-image'>
                <img src={Arrow1} alt="" />
            </div>
            <div className='boxes-year'>
                <h2>2015</h2>
            </div>   
            </div>
        </div>

         <div className='boxes-main card-1 bottom-box four'>
            <div className='year-content'>
                <h5>Honored with The Economic Times Achievers Award</h5>
                <p>Honored for contribution to innovation, customization, and material sustainability.</p>
            </div>
              <div className='try-gori'>
             <div className='year-image'>
                <img src={Arrow1} alt="" />
            </div>
            <div className='boxes-year'>
                <h2>2022</h2>
            </div>   
            </div>
        </div>
        </Col>

        <Col  lg={3} md={12} sm={12}> 
           <div className='boxes-main card-1 five'>
              <div className='try-gori'>
            <div className='boxes-year'>
                <h2>2016</h2>
            </div>
            <div className='year-image'>
                <img src={Arrow2} alt="" />
            </div>
            </div>
            <div className='year-content'>
                <h5>Launched Dedicated Manufacturing Facility</h5>
                <p>Established a modern, in-house production unit to maintain quality control and accelerate custom fabrication..</p>
            </div>
        </div>

             <div className='boxes-main card-1 six'>
                  <div className='try-gori'>
            <div className='boxes-year'>
                <h2>2024</h2>
            </div>
            <div className='year-image'>
                <img src={Arrow2} alt="" />
            </div>
            </div>
            <div className='year-content'>
                <h5>Upgraded to 80,000 Sq. Ft. Production Facility in Bangalore</h5>
               <p>Implemented automation, CNC precision, and smart QC systems to scale delivery.</p>
            </div>
        </div>
        </Col>

             <Col  lg={3} md={12} sm={12}> 
         <div className='boxes-main-2 card-1 seven bottom-box'>
            <div className='year-content'>
                <h5>Introduced Ultra-Slim & Smart Door Systems</h5>
                <p>Pioneered minimalist designs with advanced thermal break and automation technology in India.</p>
            </div>
            <div className='try-gori'>
                <div className='year-image'>
                <img src={Arrow1} alt="" />
            </div>
            <div className='boxes-year'>
                <h2>2019</h2>
            </div>   
            </div>
        </div>

         <div className='boxes-main card-1 bottom-box eight'>
            <div className='year-content'>
                <h5>Trusted by 5,000+ Architects | 2,50,000+ Homeowners</h5>
                <p>Today, Schon Doorways is a leading name in aluminium doors, windows, railings, partitions, and more....</p>
            </div>
            <div className='try-gori'>
             <div className='year-image'>
                <img src={Arrow1} alt="" />
            </div>
            <div className='boxes-year'>
                <h2>2025</h2>
            </div>   
            </div>
        </div>
        </Col>
    </Row>

   </Container>
    </div>
    {/* form start from  */}
       <div className='contact-main'>
    <Container fluid>
        <Row>
            <Col lg={6} md={12} sm={12}>
            <div className='contact-logo-left'>
                <div className='contact-logo'>
                      <img src={Logo} alt="Schon Logo" />
                </div>
                <div className='contact-heading'>
                    <h2>Ready to Start Your Next Project With Schon?</h2>
                </div>
            </div>
            </Col>

            <Col lg={6} md={12} sm={12}>
             <div className='form-right'>
              <div className='right-content'>
                <h4>We're just a step away!</h4>
             </div>
        <Form>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Control
            type="text"
            placeholder="Full Name*"
            className="transparent-input"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Control
            type="email"
            placeholder="Email Address*"
            className="transparent-input"
          />
        </Form.Group>

         <Form.Group className="mb-3" controlId="formcontact">
          <Form.Control
            type="email"
            placeholder="Contact*"
            className="transparent-input"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formMessage">
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Message..."
            className="transparent-input"
          />
        </Form.Group>

        <div className="text-center">
          <Button variant="light" type="submit" className="form-btn">
            Get in Touch ➔
          </Button>
        </div>
      </Form>
      </div>
            </Col>
        </Row>
    </Container>

   </div>
   {/* experience start from here */}
      <div className='Experience-main'>
     <div className='our-experience'>
        <h2>Our Experience Centres</h2>
     </div>
     <Container>
        <Row>
           <Col lg={4} md={6} sm={6}>
            <div className='exp-main'>
               <div className='experience-img'>
               <img src={Bangalore} alt="Bangalore" />
               </div>
               <div className='exp-content'>
               <h5>Bangalore</h5>
               </div>
               </div>
            </Col>

             <Col lg={4} md={6} sm={12}>
            <div className='exp-main'>
               <div className='experience-img second-change'>
                    <img src={Hyderabad} alt="Hyderabad" />
               </div>
               <div className='exp-content'>
               <h5>Hyderabad</h5>
               </div>
               </div>
            </Col>

              <Col lg={4} md={12} sm={12}>
            <div className='exp-main'>
               <div className='experience-img third-change'>
                  <img src={Chennai} alt="Chennai" />
               </div>
               <div className='exp-content'>
               <h5>Chennai</h5>
               </div>
               </div>
            </Col>
        </Row>
     </Container>

   </div>
    </>
  );
}

export default About;
