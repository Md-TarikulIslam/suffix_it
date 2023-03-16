import React from "react";
import Management from "../Management/Management";
import "./Company.css";

const Company = () => {
  return (
    <div id="company">
      <div className="company-div">
        <h1 className="text-slate-600 text-3xl our font-bold mb-5">
          Our{" "}
          <span className="text-blue-500 font-bold company text-3xl">
            {" "}
            Company
          </span>{" "}
        </h1>
        <p className="text-gray-600 text-xl paragraph mb-10">
          At Suffix IT, we develop innovative and creative products and services
          that provide total <br />
          communication and information solutions. Satisfied clients around the
          globe bear <br />
          testimony to the quality of our work.
        </p>
      </div>

      <div className="grid-style">
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
          data-aos-duration="2000"
          className="card"
        >
          <img
            className="company-img"
            src="https://suffixit.com/static/media/team.2ef9cf98.svg"
            alt=""
          />
          <p className="text-white text-xl team-p mt-10">
            Team Of Highly Experienced Professionals
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
          data-aos-duration="2000"
          className="card"
        >
          <img
            className="company-img"
            src="https://suffixit.com/static/media/software.0c032998.svg"
            alt=""
          />
          <p className="text-white text-xl team-p  mt-10">
            Working In Software Industry Since 2017
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
          data-aos-duration="2000"
          className="card"
        >
          <img
            className="company-img"
            src="https://suffixit.com/static/media/web.88ae012d.svg"
            alt=""
          />
          <p className="text-white text-xl team-p  mt-10">
            We Dream Big and Win Together
          </p>
        </div>
      </div>
      <Management></Management>
    </div>
  );
};

export default Company;
