import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import banner1 from "../assets/banner/homeban1.jpg";
import banner2 from "../assets/banner/homeban2.jpg";
import banner4 from "../assets/banner/homeban4.jpg";
import banner5 from "../assets/banner/homeban5.jpg";

const banners = [
  {
    image: banner1,
    title: "Welcome to the Team Project",
    text: "This is our awesome home page.",
    button: "Get Started",
  },
  {
    image: banner2,
    title: "India’s Trusted Choice for Premium Spaces",
    text: "20000+ Installations, 200+Cities",
    button: "Speak to Our Technical Team",
  },
  {
    image: banner4,
    title: "Join the Team",
    text: "Collaborate and contribute to the project.",
    button: "Join Now",
  },
  {
    image: banner5,
    title: "Stay Updated",
    text: "Get the latest updates about our project.",
    button: "Subscribe",
  },
];

const Home = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home">
      <div
        className="banner"
        style={{
          backgroundImage: `url(${banners[current].image})`,
          minHeight: "100vh", // full screen height
        }}
      >
        <div className="banner-content">
          <h1>{banners[current].title}</h1>
          <p>{banners[current].text}</p>
          <Button variant="primary">{banners[current].button}</Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
