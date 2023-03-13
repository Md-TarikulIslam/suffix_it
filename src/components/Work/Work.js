import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./Work.css";
import Company from "../Company/Company";

const Work = () => {
  return (
    <div>
      <div className="flex2">
        <div>
          <img
            data-aos="zoom-in-right"
            className="work-img"
            src="https://suffixit.com/static/media/fieldForce.svg.815b7443.png"
            alt=""
          />
        </div>
        <div>
          <p className="why-text">Why Choose Us</p>
          <p className="work-text">
            We are working with <br className="break" /> 8 years experience
          </p>
          <p className="consist">
            We consist of a great team of professional and highly skilled
            engineers with excellent <br className="break" />
            technical knowledge and experience for developing quality software.{" "}
          </p>

          <div className="flex-3">
            <div className="flex-4">
              <img
                className="icons"
                src="https://suffixit.com/static/media/pie-chart.3c8a2401.png"
                alt=""
              />
              <span className="focus-text ">Client Focused</span>
            </div>
            <div className="flex-4">
              <img
                className="icons"
                src="https://suffixit.com/static/media/team.461ec09b.png"
                alt=""
              />
              <span className="focus-text tech">Next Gen Technology Provider</span>
            </div>
            <div></div>
          </div>
          <div className="flex-5">
            <div>
              <div className="flex-6">
                <FontAwesomeIcon className="icon-color" icon={faCheckCircle} />
                <span className="span-space text-size">24/7 support service</span>
              </div>
              <div className="flex-6">
                <FontAwesomeIcon className="icon-color" icon={faCheckCircle} />
                <span className="span-space text-size">On-time Delivery</span>
              </div>
              <div className="flex-6">
                <FontAwesomeIcon className="icon-color" icon={faCheckCircle} />
                <span className="span-space text-size">Within Budget</span>
              </div>
            </div>
            <div>
              <div className="flex-6">
                <FontAwesomeIcon className="icon-color" icon={faCheckCircle} />
                <span className="text-size">Creating ideas with passion</span>
              </div>
              <div className="flex-6">
                <FontAwesomeIcon className="icon-color" icon={faCheckCircle} />
                <span className="text-size">Assure best quality</span>
              </div>
              <div className="flex-6">
                <FontAwesomeIcon className="icon-color" icon={faCheckCircle} />
                <span  className="text-size">Solution for revolution</span>
              </div>
            </div>
          </div>
          <div>
            <button className="learn-btn">Learn More</button>
            <FontAwesomeIcon className="arrow-icon" icon={faArrowRight} />
          </div>
        </div>
      </div>
      <Company></Company>
    </div>
  );
};

export default Work;
