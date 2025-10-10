import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import { Row, Col } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';

import "bootstrap-icons/font/bootstrap-icons.css";
// fontawasome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
// ✅ Import all images properly
import Client1 from "../../assets/clientLogo/1751273820.png"
import Client2 from "../../assets/clientLogo/1751273870.png";
import Client3 from "../../assets/clientLogo/1751273937.png";
import Client4 from "../../assets/clientLogo/1751273970.png";
import Client5 from "../../assets/clientLogo/1751273994.png";
import Client6 from "../../assets/clientLogo/1751274009.png";
import Client7 from "../../assets/clientLogo/1751274022.png";
import Client8 from "../../assets/clientLogo/1751274047.png";
import Client9 from "../../assets/clientLogo/1751274064.png";

import SustainImg1 from "../../assets/sustainbiltiy-image/Sustainabilityimg1.jpg";
import SustainIcon1 from "../../assets/sustainbiltiy-image/Sustainabilityicon1.png";
import SustainIcon2 from "../../assets/sustainbiltiy-image/Sustainabilityicon2.png";
import SustainIcon3 from "../../assets/sustainbiltiy-image/Sustainabilityicon3.png";
import SustainIcon4 from "../../assets/sustainbiltiy-image/Sustainabilityicon4.png";
import SustainIcon5 from "../../assets/sustainbiltiy-image/Sustainabilityicon5.png";
import SustainIcon6 from "../../assets/sustainbiltiy-image/Sustainabilityicon6.png";
import SustainIcon7 from "../../assets/sustainbiltiy-image/Sustainabilityicon7.png";
import SustainIcon8 from "../../assets/sustainbiltiy-image/Sustainabilityicon8.png";
import SustainIcon9 from "../../assets/sustainbiltiy-image/Sustainabilityicon9.png";
import SustainIcon10 from "../../assets/sustainbiltiy-image/Sustainabilityicon10.png";
import SustainIcon11 from "../../assets/sustainbiltiy-image/Sustainabilityicon11.png";
import SustainIcon12 from "../../assets/sustainbiltiy-image/Sustainabilityicon12.png";

import EnergyEfficient from "../../assets/images/EnergyEfficient.png";
import EcoFriendly from "../../assets/images/EcoFriendly.png";
import Eco from "../../assets/images/eco.jpg";
import Logo from "../../assets/images/logo.png";
import Testo from "../../assets/images/testo.png";
import Test1 from "../../assets/images/1751275942.png";
import Test2 from "../../assets/images/1751275921.png";
import Test3 from "../../assets/images/1751275903.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import '../manish/manish.css'





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


function Sustainability() {
  return (
    <>
      {/* section 1 */}
      <section id='movenav' className='Banner-main'>
        <Container>
          <div className='banner-containt'>
            <h1>Sustainability</h1>
            <p>Building a Greener Tomorrow with Smarter, Responsible Choices.</p>
            <Button>
              Get Free Consultation{" "}
              <i className="bi bi-arrow-right" ></i>
            </Button>
          </div>
        </Container>
      </section>

      {/* section 2 */}
      <section className='sustain'>
        <Container>
          <div className='sec-2-containt'>
            <p>
              At Schon, sustainability is more than a commitment—it’s the foundation
              of our innovation. As leaders in premium aluminum systems, we design
              products that not only transform spaces but also contribute to a
              sustainable future. From material selection to manufacturing practices,
              our focus is on reducing environmental impact while maintaining
              exceptional quality and performance.
            </p>
          </div>
        </Container>
      </section>

      {/* section 3 */}
      <section className='Sustainable'>
    
        <Row className='sec-3-main'>
          <Col lg={7} md={12}>
            <div className='sec-3-image'>
              <img src={SustainImg1} alt="" />
            </div>
          </Col>
          <Col lg={5}md={12}>
            <div className='sec-3-containt'>
              <h2>Sustainable Materials for a Sustainable Future</h2>
              <p>
                Aluminum is a metal that truly builds the future. It is lightweight,
                durable, and infinitely recyclable. At Schon, we exclusively use
                high-grade aluminum alloys that are sourced and processed responsibly.
                This ensures:
              </p>
            </div>
            <div className='list'>
              <div className='list-main'>
                <div className='icon'>
                  <img src={SustainIcon1} alt="" />
                </div>
                <div className='icon-containt'>
                  <h3>Minimal Waste</h3>
                  <p>Our manufacturing processes optimize material usage to reduce waste.</p>
                </div>
              </div>
              <div className='list-main'>
                <div className='icon'>
                  <img src={SustainIcon2} alt="" />
                </div>
                <div className='icon-containt'>
                  <h3>Recyclable Material</h3>
                  <p>
                    Aluminum is 100% recyclable, allowing us to repurpose offcuts and
                    contribute to the circular economy.
                  </p>
                </div>
              </div>
              <div className='list-main'>
                <div className='icon'>
                  <img src={SustainIcon3} alt="" />
                </div>
                <div className='icon-containt'>
                  <h3>Durability</h3>
                  <p>
                    Durable materials mean our products stand the test of time,
                    reducing replacements.
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
       
      </section>

      {/* section 4 */}
      <section className='sec-4'>
        <Row className='sec-4-main'>
          <Col lg={5} md={12}>
            <div className='sec-4-containt'>
              <h2>Energy-Efficient Solutions</h2>
              <p>
                Our aluminum systems are engineered to enhance energy efficiency in
                buildings, reducing their carbon footprint. Key features include:
              </p>
            </div>
            <div className='sec-4-list'>
              <div className='list-main'>
                <div className='icon'>
                  <img src={SustainIcon4} alt="" />
                </div>
                <div className='icon-containt'>
                  <h3>Thermal Break Technology</h3>
                  <p>Advanced thermal breaks minimize heat transfer, improving insulation and reducing energy consumption</p>
                </div>
              </div>
              <div className='list-main'>
                <div className='icon'>
                  <img src={SustainIcon5} alt="" />
                </div>
                <div className='icon-containt'>
                  <h3>Double and Triple Glazing Options</h3>
                  <p>High-performance glass improves thermal efficiency, cutting down heating and cooling needs</p>
                </div>
              </div>
              <div className='list-main'>
                <div className='icon'>
                  <img src={SustainIcon6} alt="" />
                </div>
                <div className='icon-containt'>
                  <h3>Precision Seals</h3>
                  <p>Airtight designs prevent energy loss, enhancing the overall efficiency of spaces.</p>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={7} md={12}>
            <div className='sec-4-image'>
              <img src={EnergyEfficient} alt="" />
            </div>
          </Col>
        </Row>
      
      </section>

      {/* section 5 */}
      <section className='Eco-Friendly'>
        <Row className='sec-5-main'>
          <Col lg={7} md={12}>
            <div className='sec-3-image'>
              <img src={EcoFriendly} alt="" />
            </div>
          </Col>
          <Col lg={5} md={12}>
            <div className='sec-5-containt'>
              <h2>Eco-Friendly Manufacturing</h2>
              <p>
                Schon’s manufacturing processes are designed 
                to prioritize sustainability at every step. Our facilities 
                adhere to strict environmental standards, focusing on
              </p>
            </div>
            <div className='list'>
              <div className='list-main'>
                <div className='icon'>
                  <img src={SustainIcon7} alt="" />
                </div>
                <div className='icon-containt'>
                  <h3>Reduced Emissions</h3>
                  <p>Utilizing energy-efficient machinery and clean energy sources to minimize emissions.</p>
                </div>
              </div>
              <div className='list-main'>
                <div className='icon'>
                  <img src={SustainIcon8} alt="" />
                </div>
                <div className='icon-containt'>
                  <h3>Water Conservation</h3>
                  <p>Recycling water used in production processes.</p>
                </div>
              </div>
              <div className='list-main'>
                <div className='icon'>
                  <img src={SustainIcon9} alt="" />
                </div>
                <div className='icon-containt'>
                  <h3>Waste Management</h3>
                  <p>Implementing robust recycling programs to repurpose aluminum and other materials.</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </section>

      {/* section 6 */}
      <section className='Sustainable-Design'>
        <div className='sec-6-containt'>
          <h2>Sustainable Design, Endless Possibilities</h2>
          <p>
           We believe sustainability goes hand-in-hand with innovation.
            Our minimalist designs maximize natural light, reducing the need
             for artificial lighting and creating healthier, more sustainable living spaces.
              By bringing nature closer to people, we redefine modern architecture with a green perspective.
          </p>
        </div>
      </section>

      {/* section 7 */}
      <section className='Empowering'>
        <Row className='sec-7-main'>
          <Col lg={7} md={12}>
            <div className='sec-7-image'>
              <img src={Eco} alt="" />
            </div>
          </Col>
         <Col lg={5} md={12}>
            <div className='sec-7-containt'>
              <h2>Empowering Green Partnerships</h2>
              <p>
               At Schon Doorways, sustainability isn’t just a promise—it’s built
                into every profile we craft. From eco-friendly raw materials to
                 energy-efficient processes and waste reduction, we’re committed to 
                 creating aluminium systems that respect your space and our planet. Join us in shaping a greener tomorrow
              </p>
              <Button className='sec-7-btn'>
                Ready to build responsibly?{" "}
                <i className="bi bi-arrow-right" style={{ verticalAlign: "-3px" }}></i>
              </Button>
            </div>
          </Col>
        </Row>
      </section>

      {/* section 8 */}
     <section className="Commitment">
      <Container>
        <div className="sec-8-heading">
          <h2>Commitment to the Environment</h2>
          <p>
            Every Schon product is a testament to our dedication to environmental
            stewardship.
          </p>
        </div>

        <div className="sec-8-containt">
          <Swiper
            spaceBetween={30}
            pagination={{ clickable: true }}
            breakpoints={{
              0: { slidesPerView: 1 },       // mobile view
              576: { slidesPerView: 2 },     // tablet
              1200: {slidesPerView: 3},
            }}
          >
            <SwiperSlide>
              <div className="sec-8-icon">
                <img src={SustainIcon10} alt="Sustainable Living" />
                <h3>Sustainable Living</h3>
                <p>Products that reduce your environmental footprint.</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="sec-8-icon">
                <img src={SustainIcon11} alt="Future-Proof Innovation" />
                <h3>Future-Proof Innovation</h3>
                <p>Designs that meet global sustainability standards.</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="sec-8-icon">
                <img src={SustainIcon12} alt="A Greener Tomorrow" />
                <h3>A Greener Tomorrow</h3>
                <p>Supporting a brand committed to eco-conscious change.</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </Container>
    </section>
      {/* section 9 */}
      <div className="sec-9-bg">
        <div className="sec-9">
          <Container>
            <div className="sec-9-top-head">
              <h2>Our Trusted Partners</h2>
              <p>Quality is always a Priority</p>
            </div>
          </Container>
        </div>
        <div className="crousel-row">
          <div className="client-logo">
            <div className="sec-9-bg-slide">
              <div className="sec-9-next">
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

      {/* section 10 */}
      <section className='sec-10-form'>
        <div className='form'>
          <Container fluid>
            <Row className='align-items-center'>
              <Col lg={6} md={12}>
                <div className='form-left'>
                  <img src={Logo} alt="" />
                  <h2>Ready to Start Your</h2>
                  <span>Next Project With Schon?</span>
                </div>
              </Col>
             <Col lg={6} md={12}>
                <div className="form-right">
            <h4>We’re just a step away!</h4>
            <form className="contact-form">
            <input type="text" placeholder="Full Name*" required />
            <input type="email" placeholder="Email Address*" required />
            <input type="tel" placeholder="Contact No.*" required />
            <textarea placeholder="Message"></textarea>
            <button className="formbtn header-btn">
              Get in Touch <FontAwesomeIcon icon={faArrowRight} />
            </button>
            </form>
            </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      {/* section 11 */}
      <section className="Testmonial-part">
      <Container>
        <div className="testmonial-heading">
          <h2>Built on Trust. Chosen by Experts</h2>
        </div>

        {/* ✅ Swiper starts here */}
        <Swiper
          spaceBetween={30}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },       // mobile
            768: { slidesPerView: 2 },     // tablet
            1100: { slidesPerView: 2 },    // desktop (shows 3 cards)
             1200: { slidesPerView: 3 },
          }}
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="main-sec-testM">
              <div className="test-monial-icon">
                <img src={Testo} alt="icon" />
              </div>
              <div className="test-monial-para">
                <p>
                  We partnered with Schon Doorways for a 120-apartment 
                  premium housing project. Their scale of production, delivery 
                  timelines, and on-site coordination made them a reliable 
                  execution partner.
                </p>
              </div>
              <div className="test-monial-block">
                <img className="test-img" src={Test1} alt="client" />
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
                <img src={Testo} alt="icon" />
              </div>
              <div className="test-monial-para">
                <p>
                  What sets Schon apart is their understanding of architectural vision. 
                  They executed every detail with precision, maintaining design integrity.
                </p>
              </div>
              <div className="test-monial-block">
                <img className="test-img" src={Test2} alt="client" />
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
                <img src={Testo} alt="icon" />
              </div>
              <div className="test-monial-para">
                <p>
                  From consultation to installation, Schon Doorways provided 
                  excellent service. The quality speaks for itself—solid, sleek, and premium.
                </p>
              </div>
              <div className="test-monial-block">
                <img className="test-img" src={Test3} alt="client" />
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

export default Sustainability;
