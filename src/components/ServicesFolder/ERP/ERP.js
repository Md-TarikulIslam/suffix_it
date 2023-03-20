import {
  faComputer,
  faGear,
  faGears,
  faGraduationCap,
  faTag,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./ERP.css";

const ERP = () => {
  return (
    <div className="overflow-x-hidden">
      <img
        className="domain-img"
        src="https://suffixit.com/static/media/erpConsalting.569c41cf.jpg"
        alt=""
      />
      <h1 className="domain-text">ERP System & Consulting</h1>

      <div class="bg-white p-4  breadcrumb flex items-center flex-wrap">
        <ul class="flex items-center">
          <li class="inline-flex items-center">
            <Link to="/" className="text-white hover:text-blue-500">
              Home
            </Link>

            <svg
              class="w-5 h-auto fill-current mx-2 text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
            </svg>
          </li>

          <li class="inline-flex items-center">
       
              <span className="text-white hover:text-blue-500">
                ERP System & Consulting
              </span>
           
          </li>
        </ul>
      </div>
      <div className="payroll-mod-flex mt-20">
        <div data-aos="fade-right">
          <img
            className="payroll-img"
            src="https://suffixit.com/static/media/Visual%20data-cuate.e5c31c08.svg"
            alt=""
          />
        </div>
        <div data-aos="fade-left" id="erp">
          <h1 className="payroll-text">ERP Implementation</h1>
          <p className="payroll-p">
            We provide IT consulting services which includes project management,
            application development, web design and development, telecom
            services, Infrastructure and maintenance services.
          </p>
        </div>
      </div>

      <div>
        <h1 className="key-text">
          Key <span className="blue-feature">Features</span>
        </h1>

        <div className="erp-grid">
          <div data-aos="fade-up">
            <h1 className="label-text">
              <FontAwesomeIcon className="mr-5" icon={faTag}></FontAwesomeIcon>
              ERP Promotion
            </h1>
            <p className="erp-p">
              We provide IT consulting services which includes project
              management, application development, web design and development,
              telecom services, Infrastructure and maintenance services.
            </p>
          </div>
          <div>
            <h1 className="label-text">
              <FontAwesomeIcon
                className="mr-5"
                icon={faComputer}
              ></FontAwesomeIcon>
              IT planning
            </h1>
            <p className="erp-p">
              We examine your firm and develop a strategy to work on your
              purpose, vision, and values, as well as your long-term business
              goals, using our Strategic IT planning.
            </p>
          </div>
          <div data-aos="fade-up">
            <h1 className="label-text">
              <FontAwesomeIcon
                className="mr-5"
                icon={faGears}
              ></FontAwesomeIcon>
              System Upgrade and Technical Service
            </h1>
            <p className="erp-p">
              From time to time, Suffix IT Limited also provides post-delivery
              services such as upgrading and technical maintenance and support.
            </p>
          </div>
          <div data-aos="fade-up">
            <h1 className="label-text">
              <FontAwesomeIcon
                className="mr-5"
                icon={faWrench}
              ></FontAwesomeIcon>
              Operation and Maintenance
            </h1>
            <p className="erp-p">
              We create, build, and deliver corporate software systems, as well
              as oversee their management and maintenance to ensure optimal
              performance.
            </p>
          </div>
          <div data-aos="fade-up">
            <h1 className="label-text">
              <FontAwesomeIcon className="mr-5" icon={faGear}></FontAwesomeIcon>
              ERP System Customization and Development
            </h1>
            <p className="erp-p">
              We construct a procedure for software implementation to facilitate
              your operations with a customized ERP system and development.
            </p>
          </div>
          <div data-aos="fade-up">
            <h1 className="label-text">
              <FontAwesomeIcon
                className="mr-5"
                icon={faGraduationCap}
              ></FontAwesomeIcon>
              Training
            </h1>
            <p className="erp-p">
              We provide proper training to our employees, invest in the
              greatest personnel, and encourage them to learn and experiment
              with new and emerging technology.
            </p>
          </div>
        </div>
      </div>

      <div>
        <img
          className="live-demo-img"
          src="https://suffixit.com/static/media/Telecommuting-rafiki.6436ded2.svg"
          alt=""
        />
        <h1 className="schedule-text">Schedule a live demo</h1>
        <p className="schedule-p">
          Go for a free practical demonstration in order to experience the user
          friendly platform of Suffix Field Force Management.
        </p>
        <button className="schedule-btn">Request for a demo</button>
      </div>
    </div>
  );
};

export default ERP;
