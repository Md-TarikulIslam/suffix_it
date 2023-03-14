import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

import "./About.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about-box">
      <h1 className="about-us">About Us</h1>
      <a href="#aboutSection">
      <FontAwesomeIcon
                  className="icon-arrow"
                  icon={faArrowDown}
                /></a>
      <div class="ocean">
  <div class="wave"></div>
  <div class="wave"></div>
  <div class="wave"></div>
</div>

<div className="about-flex" id="aboutSection">
<div data-aos="fade-right" data-aos-offset="300"
     data-aos-easing="ease-in-sine">
    <p className="history">OUR HISTORY</p>
    <p className="moto">Who we are?</p>
    <p className="moto-details">At Suffix IT, we develop innovative and creative products and services that provide total communication and information solutions. Among a plethora of services, web design and development, tailor made applications, ERPs, CRMs, e-commerce solutions, business-to-business applications, business-to-client applications, managed hosting and internet portal management are few that we offer. Satisfied clients around the globe bear testimony to the quality of our work. As a leader in technology exploring, Suffix IT is committed to exporting quality software worldwide.</p>
    <p className="moto2">Vision</p>
    <p className="moto-details">Our goal is to become a well-known global ICT solution provider that meets societal needs and contributes favorably to humanity's interests.</p>
    <p className="moto2">Mission</p>
    <p className="moto-details">To use our enthusiasm for technology to bring success and happiness to our clients and staff thus also providing high-growth possibilities for rewarding employment and thereby serve humanity.</p>
</div>
<div data-aos="fade-left" data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500">
    <img className="about-img" src="https://i.ibb.co/KN8Rb5c/IMG-4808.png" alt="" />
</div>
</div>
    </div>
  );
};

export default About;
