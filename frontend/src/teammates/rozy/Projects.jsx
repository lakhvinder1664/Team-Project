import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
// section-1******************
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import projectImg1 from "../../assets/6-row-img/1758177549.jpg";
import projectImg2 from "../../assets/6-row-img/1758177566.jpg";
import projectImg3 from "../../assets/6-row-img/1758177583.jpg";
import projectImg4 from "../../assets/6-row-img/1758177598.jpg";
import projectImg5 from "../../assets/6-row-img/1758177616.jpg";
import img6 from "../../assets/6-row-img/1758177475.jpg";
import img7 from '../../assets/6-row-img/img-7.jpg';
import img8 from '../../assets/6-row-img/img-8.jpg';
import img9 from '../../assets/6-row-img/img-9.jpg';


// section-2**********************

// section-3******************************
import image1 from '../../assets/images/testo.png';
import image2 from '../../assets/images/1751275942.png';
import image3 from '../../assets/images/1751275921.png';
import image4 from '../../assets/images/1751275903.png';

import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "swiper/css/autoplay";

// Css import
import "../rozy/rozy.css";

function Projects() {
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [open5, setOpen5] = useState(false);
    return (
        <>
            <section className="Banner-section" id='movenav'>
                <Container>
                    <div className="main-banner">
                        <div className="main-haeding-banner">
                            <h2>Our Projects</h2>
                        </div>
                        <div className="main-para-banner">
                            <p>Doors, Windows, Railings & Luxury Glass — Engineered for Inspired Living</p>

                            <Button className='Logo-btn-4'>Get free Consulatation<span><i class="fa-solid fa-arrow-right"></i></span></Button>
                        </div>
                    </div>
                </Container>
            </section>

            {/* section-1 */}
            <section className='section-ourproject'>
                <Container>
                    <div className="main-Our-project">
                        <div className="main-head-project">
                            <h2>Our Projects</h2>
                        </div>
                    </div>
                    <div className="main-row-secproject">
                        <Row className='row-main-secproject'>
                            <Col md={6} lg={4} sm={12}>
                                <div className="main-img-project">
                                    <img src={projectImg1} alt="ok" />
                                </div>
                            </Col>

                            <Col md={6} lg={4} sm={12}>
                                <div className="main-img-project">
                                    <img src={projectImg2} alt="ok" />
                                </div>
                            </Col>

                            <Col md={6} lg={4} sm={12}>
                                <div className="main-img-project">
                                    <img src={projectImg3} alt="ok" />
                                </div>
                            </Col>

                            <Col md={6} lg={4} sm={12}>
                                <div className="main-img-project">
                                    <img src={projectImg4} alt="ok" />
                                </div>
                            </Col>

                            <Col md={6} lg={4} sm={12}>
                                <div className="main-img-project">
                                    <img src={projectImg5} alt="ok" />
                                </div>
                            </Col>

                            <Col md={6} lg={4} sm={12}>
                                <div className="main-img-project">
                                    <img src={img6} alt="ok" />
                                </div>
                            </Col>

                            <Col md={6} lg={4} sm={12}>
                                <div className="main-img-project">
                                    <img src={img7} alt="ok" />
                                </div>
                            </Col>

                            <Col md={6} lg={4} sm={12}>
                                <div className="main-img-project">
                                    <img src={img8} alt="ok" />
                                </div>
                            </Col>

                            <Col md={6} lg={4} sm={12}>
                                <div className="main-img-project">
                                    <img src={img9} alt="ok" />
                                </div>
                            </Col>
                        </Row>
                    </div>

                </Container>
            </section>

            {/* section-2 */}
            <section className="section-frompart">
                <Container fluid>
                    <div className="row-main-frompart">
                        <Row>
                            <Col md={12} lg={6} sm={12} col={12}>
                                <div className="form-question-part">
                                    <div className="main-heading-fq">
                                        <h2>Frequently Asked Questions</h2>
                                    </div>
                                    <div className="card-fq-main">
                                        <div className="card-main">
                                            {/* Toggle Button */}
                                            <Button
                                                className={`form-btn-secmain ${open ? "active" : ""}`}
                                                onClick={() => setOpen(!open)}
                                                aria-controls="example-collapse-text"
                                                aria-expanded={open}
                                            >
                                                <span>What types of projects does Schon Doorways work on?</span>
                                                <span className="icon">{open ? " ×" : "+"}</span>
                                            </Button>

                                            {/* Collapse */}
                                            <Collapse in={open}>
                                                <div className="tabs-main-sec" id="example-collapse-text">
                                                    <p>
                                                        From premium villas and luxury apartments to large gated communities,
                                                        commercial buildings, hotels, and boutique retail — we deliver tailored
                                                        aluminium doors, windows, railings, and luxury glass solutions for
                                                        every scale and design brief.
                                                    </p>

                                                    {/* Cross Close Button inside collapse */}
                                                    {/* <button className="close-btn" onClick={() => setOpen(false)}>
                                                        ×
                                                    </button> */}
                                                </div>
                                            </Collapse>
                                        </div>

                                        <div className="card-main">
                                            {/* Toggle Button */}
                                            <Button
                                                className={`form-btn-secmain ${open1 ? "active" : ""}`}
                                                onClick={() => setOpen1(!open1)}
                                                aria-controls="example-collapse-text"
                                                aria-expanded={open1}
                                            >
                                                <span>Do you handle custom or complex architectural requirements?</span>
                                                <span className="icon">{open1 ? " ×" : "+"}</span>
                                            </Button>

                                            {/* Collapse */}
                                            <Collapse in={open1}>
                                                <div className="tabs-main-sec" id="example-collapse-text">
                                                    <p>
                                                        Absolutely. We specialise in executing challenging and unique designs, collaborating closely with architects and designers to bring even the most demanding concepts to life — with precision German engineering and custom Indian craftsmanship.
                                                    </p>

                                                    {/* Cross Close Button inside collapse */}
                                                    {/* <button className="close-btn" onClick={() => setOpen1(false)}>
                                                        ×
                                                    </button> */}
                                                </div>
                                            </Collapse>
                                        </div>

                                        <div className="card-main">
                                            {/* Toggle Button */}
                                            <Button
                                                className={`form-btn-secmain ${open2 ? "active" : ""}`}
                                                onClick={() => setOpen2(!open2)}
                                                aria-controls="example-collapse-text"
                                                aria-expanded={open2}
                                            >
                                                <span>Can I see examples of your completed work?</span>
                                                <span className="icon">{open2 ? " ×" : "+"}</span>
                                            </Button>

                                            {/* Collapse */}
                                            <Collapse in={open2}>
                                                <div className="tabs-main-sec" id="example-collapse-text">
                                                    <p>
                                                        Yes — our Projects Gallery showcases a wide range of installations across South India and beyond. From elegant corner sliders to expansive façade glazing, see how Schon systems transform real spaces.
                                                    </p>

                                                    {/* Cross Close Button inside collapse */}
                                                    {/* <button className="close-btn" onClick={() => setOpen2(false)}>
                                                        ×
                                                    </button> */}
                                                </div>
                                            </Collapse>
                                        </div>

                                        <div className="card-main">
                                            {/* Toggle Button */}
                                            <Button
                                                className={`form-btn-secmain ${open3 ? "active" : ""}`}
                                                onClick={() => setOpen3(!open3)}
                                                aria-controls="example-collapse-text"
                                                aria-expanded={open3}
                                            >
                                                <span>How do you ensure quality during large-scale projects</span>
                                                <span className="icon">{open3 ? " ×" : "+"}</span>
                                            </Button>

                                            {/* Collapse */}
                                            <Collapse in={open3}>
                                                <div className="tabs-main-sec" id="example-collapse-text">
                                                    <p>
                                                        We manage every stage in-house — from detailed design consultations and German-engineered fabrication to expert on-site installation — backed by strict quality control, a dedicated project manager, and robust after-sales service.
                                                    </p>

                                                    {/* Cross Close Button inside collapse */}
                                                    {/* <button className="close-btn" onClick={() => setOpen3(false)}>
                                                        ×
                                                    </button> */}
                                                </div>
                                            </Collapse>
                                        </div>

                                        <div className="card-main">
                                            {/* Toggle Button */}
                                            <Button
                                                className={`form-btn-secmain ${open4 ? "active" : ""}`}
                                                onClick={() => setOpen4(!open4)}
                                                aria-controls="example-collapse-text"
                                                aria-expanded={open4}
                                            >
                                                <span>Do you work with individual homeowners too?</span>
                                                <span className="icon">{open4 ? " ×" : "+"}</span>
                                            </Button>

                                            {/* Collapse */}
                                            <Collapse in={open4}>
                                                <div className="tabs-main-sec" id="example-collapse-text">
                                                    <p>
                                                        Definitely! Whether you’re building your dream villa or renovating an apartment, our solutions scale to your vision — ensuring the same level of design detailing and premium finish that builders and architects trust.
                                                    </p>

                                                    {/* Cross Close Button inside collapse */}
                                                    {/* <button className="close-btn" onClick={() => setOpen4(false)}>
                                                        ×
                                                    </button> */}
                                                </div>
                                            </Collapse>
                                        </div>

                                        <div className="card-main">
                                            {/* Toggle Button */}
                                            <Button
                                                className={`form-btn-secmain ${open5 ? "active" : ""}`}
                                                onClick={() => setOpen5(!open5)}
                                                aria-controls="example-collapse-text"
                                                aria-expanded={open5}
                                            >
                                                <span>How can I get my project started with Schon Doorways?</span>
                                                <span className="icon">{open5 ? " ×" : "+"}</span>
                                            </Button>

                                            {/* Collapse */}
                                            <Collapse in={open5}>
                                                <div className="tabs-main-sec" id="example-collapse-text">
                                                    <p>
                                                        Connect with us for a free design consultation at one of our Experience Centres or book a site visit with our team. We’ll help you choose the right products, finalise specifications, and execute your project smoothly.
                                                    </p>

                                                    {/* Cross Close Button inside collapse */}
                                                    {/* <button className="close-btn" onClick={() => setOpen5(false)}>
                                                        ×
                                                    </button> */}
                                                </div>
                                            </Collapse>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md={12} lg={6} sm={12} col={12}>
                                <div className="main-formsumit-part">
                                    <div class="contact-form form-right">
                                        <h2 class="form-title">We’re just a step away!</h2>

                                        <form>
                                            <input type="text" placeholder="Full Name*" required />
                                            <input type="text" placeholder="Email Address*" required />
                                            <input type="text" placeholder="Contact No.*" required />
                                            <textarea placeholder="Message"></textarea>
                                            <div className="btn-from"><Button className='Logo-btn-3'>Get in Touch<span><i class="fa-solid fa-arrow-right"></i></span></Button></div>
                                        </form>
                                    </div>
                                </div>


                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>

            {/* Section-3 */}
            <section className="testmonial-part">
                <Container>
                    <div className="testmonial-heading">
                        <h2>Built on Trust. Chosen by Experts</h2>
                    </div>

                    {/* ✅ Swiper Section */}
                    <Swiper
                        spaceBetween={30}
                        pagination={{ clickable: true }}
                        //   autoplay={{

                        //     delay: 2500,
                        //     disableOnInteraction: false,
                        //   }}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1100: {
                                slidesPerView: 2,
                            },
                            1200: {
                                slidesPerView: 3,
                            },
                        }}
                        //   modules={[Pagination, Autoplay]}
                        className="mySwiper"
                    >
                        {/* Slide 1 */}
                        <SwiperSlide>
                            <div className="main-sec-testM">
                                <div className="test-monial-icon">
                                    <img src={image1} alt="ok" />
                                </div>
                                <div className="test-monial-para">
                                    <p>
                                        What sets Schon apart is their understanding of architectural
                                        vision. I needed custom aluminium systems for a minimalist.

                                    </p>
                                </div>
                                <hr />
                                <div className="test-monial-block">
                                    <img className="test-img" src={image2} alt="ok" />
                                    <div className="test-cont">
                                        <h3>Nikhil Shetty</h3>
                                        <span>Principal Architect</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Slide 2 */}
                        <SwiperSlide>
                            <div className="main-sec-testM">
                                <div className="test-monial-icon">
                                    <img src={image1} alt="ok" />
                                </div>
                                <div className="test-monial-para">
                                    <p>
                                        Schon’s team brings creativity and precision together. Their
                                        quality craftsmanship is unmatched in the industry.
                                    </p>
                                </div>
                                <hr />
                                <div className="test-monial-block">
                                    <img className="test-img" src={image3} alt="ok" />
                                    <div className="test-cont">
                                        <h3>Anitha Rao</h3>
                                        <span>Homeowner</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Slide 3 */}
                        <SwiperSlide>
                            <div className="main-sec-testM">
                                <div className="test-monial-icon">
                                    <img src={image1} alt="ok" />
                                </div>
                                <div className="test-monial-para">
                                    <p>
                                        Schon turned our vision into reality with top-tier designs and
                                        flawless finishing. Highly recommended!
                                    </p>
                                </div>
                                <hr />
                                <div className="test-monial-block">
                                    <img className="test-img" src={image4} alt="ok" />
                                    <div className="test-cont">
                                        <h3>Karan Mehta</h3>
                                        <span>Director</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </Container>
            </section>

        </>

    )
}
export default Projects;