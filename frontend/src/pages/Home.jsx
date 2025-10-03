import React, { useState, useEffect, useRef } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";

import logo1 from '../assets/images/logo.png'

// Banners and Banner Icons
import banner1 from "../assets/banner/homeban1.jpg";
import banner2 from "../assets/banner/homeban2.jpg";
import banner4 from "../assets/banner/homeban4.jpg";
import banner5 from "../assets/banner/homeban5.jpg";
import bannerIcon1 from "../assets/images/baanericon1.png";
import bannerIcon2 from "../assets/images/baanericon2.png";
import bannerIcon3 from "../assets/images/baanericon3.png";

// Project Images (5-6 images for projects and logos carousel as sample)
import projectImg1 from "../assets/6-row-img/1758177549.jpg";
import projectImg2 from "../assets/6-row-img/1758177566.jpg";
import projectImg3 from "../assets/6-row-img/1758177583.jpg";
import projectImg4 from "../assets/6-row-img/1758177598.jpg";
import projectImg5 from "../assets/6-row-img/1758177616.jpg";

// Why Choose Schon icons
import chooseIcon1 from "../assets/WhyChoseScon-img/chooseicon1.png"; 
import chooseIcon2 from "../assets/WhyChoseScon-img/chooseicon2.png"; 
import chooseIcon3 from "../assets/WhyChoseScon-img/chooseicon3.png"; 
import chooseIcon4 from "../assets/WhyChoseScon-img/chooseicon4.png"; 
import chooseIcon5 from "../assets/WhyChoseScon-img/chooseicon5.png"; 
import chooseIcon6 from "../assets/WhyChoseScon-img/chooseicon6.png"; 

// Our Solution images
import solutionImg1 from "../assets/OurSolution-img/solutionimg1.png";
import solutionImg2 from "../assets/OurSolution-img/solutionimg2.png";
import solutionImg3 from "../assets/OurSolution-img/solutionimg3.png";

// Testimonial images
import testimonialUserImg from '../assets/images/testo.png';
import testimonyImg2 from '../assets/images/1751275942.png';
import testimonyImg3 from '../assets/images/1751275921.png';
import testimonyImg4 from '../assets/images/1751275903.png';

// Experience Centre images
import expCenterImg1 from "../assets/images/Bangalore.svg";
import expCenterImg2 from "../assets/images/Hyderabad.svg";
import expCenterImg3 from "../assets/images/Chennai.svg";

// Client Img
import Client1 from "../assets/clientLogo/1751273820.png";
import Client2 from "../assets/clientLogo/1751273870.png";
import Client3 from "../assets/clientLogo/1751273937.png";
import Client4 from "../assets/clientLogo/1751273970.png";
import Client5 from "../assets/clientLogo/1751273994.png";
import Client6 from "../assets/clientLogo/1751274009.png";
import Client7 from "../assets/clientLogo/1751274022.png";
import Client8 from "../assets/clientLogo/1751274047.png";
import Client9 from "../assets/clientLogo/1751274064.png";

const banners = [
  { image: banner1, title: "Smart living Starts with Schon", text: "This is our awesome home page.", button: "Start Your Next Project with Schon" },
  { image: banner2, title: "India’s Trusted Choice for Premium Spaces", text: "20000+ Installations, 200+Cities", button: "Speak to Our Technical Team" },
  { image: banner4, title: "Unlimited Design Freedom for Architects", text: "Who Think Beyond Frames", button: "Explore Our Project" },
  { image: banner5, title: "Framing India’s Finest Spaces", text: "with Precision-Crafted Aluminium Doors", button: "Explore Our Collection" },
];

const cards = [
  { title: "Consultation", desc: "Seamless & On Schedule: Our skilled installation team ensures everything is fitted flawlessly, with minimal disruption and maximum attention to detail." },
  { title: "Design Approval", desc: "We use cutting-edge technology to guarantee precision and quality in every project." },
  { title: "Quality Materials", desc: "Only the best materials are used to ensure durability and aesthetics." },
  { title: "Timely Delivery", desc: "We respect your time and always complete projects within schedule." },
];


const solutionItems = [
  {
    img: solutionImg1,
    heading: "Architects & Designers",
    text: "Schon Doorways delivers scalable, high-quality aluminium door and window solutions that meet project timelines and performance benchmarks. Our expert team ensures smooth coordination from specification to installation—making us a trusted partner for efficient and reliable execution.",
  },
  {
    img: solutionImg2,
    heading: "Homeowners",
    text: "For homeowners seeking elegance, durability, and peace of mind, our doors and windows bring in light, style, and security. Whether you're building new or upgrading your home, we offer customised solutions that blend seamlessly with your lifestyle and aesthetics.",
  },
  {
    img: solutionImg3,
    heading: "Builders",
    text: "We offer tailored solutions, design flexibility, and expert support to ensure every client finds the perfect aluminium system to match their purpose, project, and style.",
  },
];

const testimonialData = [
  {
    text: "We partnered with Schon Doorways for a 120-apartment premium housing project. Their scale of production, delivery timelines, and on-site coordination made them a reliable execution partner. It’s rare to find a vendor that delivers both product quality and project efficiency.",
    userImg: testimonyImg2,
    name: "Karan Mehta",
    designation: "Director",
  },
  {
    text: "What sets Schon apart is their understanding of architectural vision. I needed custom aluminium systems for a minimalist villa project, and they executed every detail with precision. Their ability to handle complex briefs while maintaining design integrity is unmatched.",
    userImg: testimonyImg3,
    name: "Nikhil Shetty",
    designation: "Principal Architect",
  },
  {
    text: "From consultation to installation, the experience with Schon Doorways was seamless. Their team helped us choose the right doors and windows for our villa, and the quality speaks for itself—solid, sleek, and truly premium. I finally feel like I’ve built a home that will last generations.",
    userImg: testimonyImg4,
    name: "Anitha Rao",
    designation: "Homeowner",
  },
];

const expCenters = [
  { img: expCenterImg1, name: "Bangalore" },
  { img: expCenterImg2, name: "Hyderabad" },
  { img: expCenterImg3, name: "Chennai" },
];


const logos = [
  Client1,
  Client2,
  Client3,
  Client4,
  Client5,
  Client6,
  Client7,
  Client8,
  Client9,
];

// Main Component
const Home = () => {
  const [current, setCurrent] = useState(0);
  const iframeRef = useRef(null);
  const [play, setPlay] = useState(false);
  const trackRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setPlay(entry.isIntersecting));
      },
      { threshold: 0.5 }
    );
    if (iframeRef.current) observer.observe(iframeRef.current);
    return () => {
      if (iframeRef.current) observer.unobserve(iframeRef.current);
    };
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (track && track.firstChild) {
      const cardWidth = track.firstChild.offsetWidth + 20;
      track.style.setProperty('--scroll-distance', `${cardWidth * cards.length}px`);
    }
  }, []);

  return (
    <div className="home">
      {/* Banner Section */}
      <div
        className="banner"
        style={{
          backgroundImage: `url(${banners[current].image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="banner-overlay"></div>
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <div className="banner-content">
                <h1>{banners[current].title}</h1>
                <p>{banners[current].text}</p>
                <Button variant="light" className="banner-btn">
                  {banners[current].button}
                </Button>
              </div>
            </Col>
            <Col md={6} className="banner-img-col">
              <img src={bannerIcon1} alt="icon1" />
              <img src={bannerIcon2} alt="icon2" />
              <img src={bannerIcon3} alt="icon3" />
            </Col>
          </Row>
        </Container>
      </div>

      {/* Welcome Section */}
      <div className="sec-3">
        <Container>
          <div className="sec-3-top-head">
            <div className="sec-3-first-h">
              <h2>Welcome to Schon Doorways</h2>
            </div>
            <div className="sec-3-bottom-cont">
              <div className="bottom-cont-h3">
                Where Precision Meets Sophistication
              </div>
              <Row>
                <Col>
                  <div className="bottom-cont-p">
                    <p>
                      India’s trusted name in premium aluminium doors and
                      windows, blending world-class German engineering with
                      refined Indian craftsmanship.
                    </p>
                  </div>
                </Col>
                <Col>
                  <div className="sec-3-right-btn text-end">
                    <Button className="sec-3-btn">All Products</Button>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
          <div className="sec-3-video" ref={iframeRef}>
            <iframe
              width="100%"
              height="650"
              src={`https://www.youtube.com/embed/xVcAiBF5Cwo?autoplay=${play ? 1 : 0}&mute=1`}
              title="Transform your space with Schon premium aluminium doors, partitions, windows, and decorative glass ✨"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </Container>
      </div>

      {/* How It Works Carousel */}
      <Container className="sec-4-crousel-container">
        <div className="sec-4-crousel">
          <div className="sec-4-left-cont">
            <h2>How it Works</h2>
            <p>Want to make your dream home a reality? Here’s how to start with Schon:</p>
            <Button className="sec-4-left-cont-btn">
              Free Consultation <FaArrowRight className="arrow-icon" />
            </Button>
          </div>
          <div className="sec-4-right-crousel-wrapper">
            <div className="sec-4-right-crousel-track" ref={trackRef}>
              {[...cards, ...cards].map((card, i) => (
                <div key={i} className="sec-4-right-crousel-card">
                  <div className="sec-4-right-crousel-left">
                    <div className="card-number">{i + 1}</div>
                    <h3>{card.title}</h3>
                    <p>{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>

      {/* Our Project Section */}
      <div className="sec-5">
        <Container>
          <div className="sec-5-top-head">
            <h2>Our Project</h2>
            <div className="sec-5-next-head">
              <h3>Where Vision Becomes Reality</h3>
              <p>From luxury residences to landmark commercial spaces, our projects reflect the precision, performance, and design excellence that define Schon Doorways. Each installation is a testament to our commitment to craftsmanship, collaboration, and delivering solutions that elevate architecture and lifestyle alike.</p>
            </div>
          </div>
          <div className="sec-5-images">
            <div className="sec-5-img-spc">
              <Row>
                <Col md={4}><img src={projectImg1} alt="" /></Col>
                <Col md={4}><img src={projectImg2} alt="" /></Col>
                <Col md={4}><img src={projectImg3} alt="" /></Col>
              </Row>
            </div>
            <div className="sec-5-img-spc">
              <Row>
                <Col md={4}><img src={projectImg4} alt="" /></Col>
                <Col md={4}><img src={projectImg5} alt="" /></Col>
                <Col md={4}><img src={projectImg1} alt="" /></Col>
              </Row>
            </div>
          </div>
        </Container>
      </div>

      {/* Why Choose Schon Section */}
      <div className="sec-6">
        <Container>
          <div className="sec-6-top-head">
            <h2>Why Choose Schon</h2>
            <p>At Schon Doorways, we don’t just build doors and windows—we craft architectural experiences. With a foundation in German-engineered systems and a passion for precision, our solutions are designed to meet the highest standards of performance, aesthetics, and durability. From ultra-slim profiles to thermally efficient systems, every product reflects our commitment to quality and innovation. Whether you're an architect, builder, or homeowner, choosing Schon means choosing personalised service, expert guidance, and flawless execution—every step of the way.</p>
          </div>
        </Container>
        <div className="sec-6-bottom-cont">
          <Container>
            <div className="sec-6-row">
              <Row>
                <Col>
                  <div className="sec-6-cont-img-txt">
                    <div className="sec-6-cont-img"><img src={chooseIcon1} alt="Why Choose Scon" /></div>
                    <div className="sec-6-cont-txt">
                      <h3>Service with a Smile</h3>
                      <p>Approachable and always available, our team treats your concerns with utmost respect. We’re here for you, during and after your journey with us.</p>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="sec-6-cont-img-txt">
                    <div className="sec-6-cont-img"><img src={chooseIcon2} alt="Why Choose Scon" /></div>
                    <div className="sec-6-cont-txt">
                      <h3>Safety & Style Combined</h3>
                      <p>Strong materials, flawless locks — our products keep you safe without compromising on style.</p>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="sec-6-cont-img-txt">
                    <div className="sec-6-cont-img"><img src={chooseIcon3} alt="Why Choose Scon" /></div>
                    <div className="sec-6-cont-txt">
                      <h3>Effortless Upgrades</h3>
                      <p>Embrace the future with our stylish, cutting-edge designs. We handle it all, from concept to installation, ensuring a hassle-free experience for you.</p>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
            <div className="sec-6-row">
              <Row>
                <Col>
                  <div className="sec-6-cont-img-txt">
                    <div className="sec-6-cont-img"><img src={chooseIcon4} alt="Why Choose Scon" /></div>
                    <div className="sec-6-cont-txt">
                      <h3>Dream Designs Made Real</h3>
                      <p>Your vision is our blueprint. Our designs are tailored to bring your dream home to life with a touch of elegance and comfort.</p>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="sec-6-cont-img-txt">
                    <div className="sec-6-cont-img"><img src={chooseIcon5} alt="Why Choose Scon" /></div>
                    <div className="sec-6-cont-txt">
                      <h3>Unwavering Quality</h3>
                      <p>Our commitment to quality means products designed for innovation, outfitted with the latest features for modern living.</p>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="sec-6-cont-img-txt">
                    <div className="sec-6-cont-img"><img src={chooseIcon6} alt="Why Choose Scon" /></div>
                    <div className="sec-6-cont-txt">
                      <h3>Weather the World</h3>
                      <p>Be it rain, shine, or anything in between, our products stand resilient, promising long-lasting quality.</p>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </div>

      {/* Solutions Section */}
      <div className="sec-7">
        <Container>
          <div className="sec-7-top-head">
            <h2>Our Solutions</h2>
            <p>At Schon Doorways, we cater to the unique needs of every customer segment—be it architects crafting bold visions, interior designers curating refined spaces, builders delivering on scale, or homeowners creating their dream abode. With tailored solutions, design flexibility, and expert support, we ensure every client finds the perfect aluminium system to match their purpose, project, and style.</p>
          </div>
          <div className="sec-7-row-img">
            <Row>
              {solutionItems.map((item, i) => (
                <Col key={i}>
                  <div className="sec-7-cont">
                    <div className="sec-7-row-img"><img src={item.img} alt={item.heading} /></div>
                    <div className="sec-7-row-text">
                      <h3>{item.heading}</h3>
                      <p>{item.text}</p>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </div>

      {/* Trusted Partners Carousel */}
      <div className="sec-8-bg">
      <div className="sec-8">
        <Container>
          <div className="sec-8-top-head">
            <h2>Our Trusted Partners</h2>
            <p>Quality is always a Priority</p>
          </div>
        </Container>
      </div>
      <div className="crousel-row">
        <div className="client-logo">
          <div className="sec-8-bg-slide">
            <div className="sec-8-next">
              <div className="marquee">
                <div className="marquee-track">
                  {logos.concat(logos).map((img, i) => (
                    <div key={i} className="slide">
                      <img src={img} alt={`Client Logo ${i + 1}`} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

      {/* Testimonials Section */}
      <div className="sec-9">
        <Container>
          <div className="sec-9-head text-center">
            <h2>Built on Trust. Chosen by Experts</h2>
          </div>
          <div className="sec-9-row">
            <Row>
              {testimonialData.map((t, i) => (
                <Col key={i}>
                  <div className={i === 2 ? "card-cont-bg" : ""}>
                    <div className="card-cont">
                      <div className="quot-image">
                        <img src={testimonialUserImg} alt="" />
                      </div>
                      <div className="card-para">
                        <p>{t.text}</p>
                      </div>
                      <div className="card-user-cont ">
                        <div className="card-user-image">
                          <img src={t.userImg} alt="" />
                        </div>
                        <div className="card-user-name">
                          <h4>{t.name}</h4>
                          <p>{t.designation}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </div>

      {/* Contact Form */}
      <div className="sec-10">
        <Container>
          <Row>
            <Col md={6}>
              <div className="sec-10-left">
                <div className="sec-10-img"><img src={logo1} alt="" /></div>
                <div className="sec-10-head">
                  <h2>Ready to Start Your <span>Next Project With Schon?</span></h2>
                </div>
              </div>
            </Col>
            <Col md={6} className="d-flex flex-column align-items-center">
              <h3 className="form-title">We’re just a step away!</h3>
              <form className="contact-form">
                <div className="form-input">
                  <input type="text" placeholder="Full Name*" />
                </div>
                <div className="form-input">
                  <input type="email" placeholder="Email Address*" />
                </div>
                <div className="form-input">
                  <input type="text" placeholder="Contact No.*" />
                </div>
                <div className="form-input">
                  <textarea placeholder="Message*"></textarea>
                </div>
                <Button variant="" className="nav-btn">Get in Touch <FaArrowRight style={{ marginLeft: "8px" }} /></Button>
              </form>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Experience Centres */}
      <div className="sec-11 text-center">
        <Container>
          <div className="sec-11-head">
            <h2>Our Experience Centres</h2>
          </div>
          <div className="sec-11-row">
            <Row>
              {expCenters.map((center, i) => (
                <Col lg={4} key={i}>
                  <div className="sec-11-cont">
                    <img src={center.img} alt={center.name} />
                    <h3>{center.name}</h3>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Home;
