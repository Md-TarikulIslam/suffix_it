import React from "react";
import "./Career.css";
import careers from "./Career.json";

const Career = () => {
  return (
    <div>
      <div className="career-bg">
        <img
          className="ban-1"
          src="https://suffixit.com/static/media/banner-nine.621b7af2.png"
          alt=""
        />
        <h1 className="c-text">Career</h1>
      </div>
      <div className="job-div">
        <img
          className="job-bg"
          src="https://suffixit.com/static/media/job-list-bg.ba351652.jpg"
          alt=""
        />
        <div className="c-position">
          <h1 className="f-job">Find a job</h1>
          <p className="c-job">
            CHOOSE FROM THE LIST OF MOST POPULAR CATEGORIES.
          </p>
        

        <div>
          {careers.map((career) => (
            <div className="c-pad">
              <div className="career-flex">
                <img className="c-logo" src={career.img} alt="" />
                <div className="jp-div">
                  <p className="job-title">{career["job-title"]}</p>
                  <p className="position">{career["available-position"]}</p>
                </div>
              
                <p className="job-type">{career["job-type"]}</p>
                <p className="location">{career["location"]}</p>
              
                
              </div>
            </div>
            
          ))}
        </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
