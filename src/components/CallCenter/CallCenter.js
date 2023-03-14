import React from "react";
import Services from "../Services/Services";
import "./CallCenter.css";

const CallCenter = () => {
  return (
    <div>
      <div className="call-div">
        <h1 className="text-slate-600 text-3xl our font-bold mb-5">
          Our{" "}
          <span className="text-blue-500 l-gap font-bold center text-3xl">
            {" "}
            Call Center Service
          </span>{" "}
        </h1>
        <p className="text-gray-600 text-xl c-paragraph mb-10">
          We never say no to anything! We are here for all your needs. All you
          have to do is tell.
        </p>
      </div>

     <div className="center-grid">
     <div className="center-card">
        <img  className="center-gif" src="https://suffixit.com/static/media/service1.e061ab16.gif" alt="" />
        <p className="call-text">Inbound Call</p>
        <p className="call-p">Dedicated and hardworking agents who are working tirelessly to answer all queries about your company.</p>
      </div>
     <div  className="center-card">
        <img className="center-gif gif-small" src="https://suffixit.com/static/media/service2.49b0cd79.gif" alt="" />
        <p className="call-text outbound">Outbound Call</p>
        <p className="call-p">Let customers know about your products/services via our charming agents.</p>
      </div>
     <div  className="center-card">
        <img className="center-gif" src="https://suffixit.com/static/media/service3.41efe6d3.gif" alt="" />
        <p className="call-text">Live Chat Support</p>
        <p className="call-p">Group of smart and charismatic agents are always online to provide live chat services.</p>
      </div>
     </div>
     <Services></Services>
    </div>
  );
};

export default CallCenter;
