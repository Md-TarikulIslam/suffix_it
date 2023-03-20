import React from "react";
import { Link } from "react-router-dom";

const CustomApp = () => {
  return (
    <div className="overflow-x-hidden">
      <img
        className="domain-img brightness-50"
        src="https://suffixit.com/static/media/mobile-apps-in-business-copy-5.0c4331fa.jpg"
        alt=""
      />
      <h1 className="domain-text">Mobile Application</h1>

      <div className="bread">
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
       
                {" "}
                <span className="text-white hover:text-blue-500">
                  Mobile Application
                </span>
       
            </li>
          </ul>
        </div>
      </div>

      <div id="application" className="payroll-mod-flex learn mt-20 mar-flex">
        <div data-aos="fade-right">
          <img
            className="payroll-img learn-img"
            src="https://suffixit.com/static/media/App%20installation-cuate.cc5d9412.svg"
            alt=""
          />
        </div>

        <div>
          <div data-aos="fade-left" id="learn">
            <h1 className="payroll-text learn-text text-sky-300">Mobile Application</h1>
            <p className="payroll-p learn-text-p m-0">
              We know how to transfer our solutions into the result of your
              business success, thanks to our extensive portfolio of
              industry-leading mobile application development services. We
              develop mobile apps that are cross-platform and responsive. Where
              others fail, we succeed in creating the most appealing user
              interface and secure backend. Suffix IT offers cutting-edge mobile
              app development to a wide range of industries and client. Our
              developers create enterprise-grade mobile apps that are tailored
              to your company's needs. We build a consistent digital presence
              and improve consumer engagement for you by integrating stylish and
              smart notification features and safe payment gateways. Our team
              has already created specialized mobile apps for the consumer
              product industries.
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className="payroll-mod-flex">
          <div data-aos="fade-right">
            <h1 className="payroll-text text-sky-300">The Service We Offer</h1>
            <ul class="list-disc list-text">
              <li>
                Applications of superb quality for a wide range of specialty
                markets
              </li>
              <li>
                Increasing business effect and attracting a wider user base
              </li>
              <li>Functionality and features of the highest caliber</li>
              <li>
                Enhancing the visual appeal and providing a rich user interface
              </li>
              <li>Mobile app development supporting cross-platform</li>
              <li>
                Apps are available in a variety of formats, including native,
                web, and hybrid.
              </li>
              <li>Support for all operating systems</li>
            </ul>
          </div>
          <div data-aos="fade-left">
            <img
              className="payroll-img"
              src="https://suffixit.com/static/media/Mobile%20testing-cuate.798d89cc.svg"
              alt=""
            />
          </div>
        </div>
      </div>

      <div>
        <div className="payroll-mod-flex">
          <div data-aos="fade-right">
            <img
              className="payroll-img"
              src="https://suffixit.com/static/media/Mobile%20testing-pana.95610bd4.svg"
              alt=""
            />
          </div>
          <div data-aos="fade-left">
            <h1 className="payroll-text text-sky-300">Industries We Have</h1>
            <ul class="list-disc list-text">
              <li>CONSUMER GOODS</li>
              <li>E-COMMERCE</li>
              <li>FIN-TECH</li>
              <li>TELECOMMUNICATION</li>
              <li>HEALTH SECTOR</li>
              <li>LOCAL ENTERPRISES</li>
              <li>MNC'S</li>
              <li>START UPS</li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <div className="payroll-mod-flex">
          <div data-aos="fade-right">
            <h1 className="payroll-text text-sky-300">The Technologies We Use</h1>
            <ul class="list-disc list-text">
              <li>Native Android</li>
              <li>Native iOS</li>
              <li>Cross Platform Application (Flutter, React Native)</li>
            </ul>
          </div>
          <div data-aos="fade-left">
            <img
              className="payroll-img"
              src="https://suffixit.com/static/media/Binary%20code-pana.835ec30d.svg"
              alt=""
            />
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
            Go for a free practical demonstration in order to experience the
            user friendly platform of Suffix Field Force Management.
          </p>
          <button className="schedule-btn">Request for a demo</button>
        </div>


    </div>
  );
};

export default CustomApp;
