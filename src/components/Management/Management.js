import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./Management.css";
import CallCenter from "../CallCenter/CallCenter";

const Management = () => {
  return (
    <div>
      <div className="flex2">
        <div className="f-manage">
          <p className="work-text-field">
            We are working with <br className="break" /> Field Force Management
          </p>
          <div className="flex-5">
            <div>
              <div className="flex-6">
                <FontAwesomeIcon
                  className="icon-color-blue"
                  icon={faCheckCircle}
                />
                <span className="span-space text-lg">Invoice and Payment</span>
              </div>
              <div className="flex-6">
                <FontAwesomeIcon
                  className="icon-color-blue"
                  icon={faCheckCircle}
                />
                <span className="span-space text-lg">Live Tracking</span>
              </div>
              <div className="flex-6">
                <FontAwesomeIcon
                  className="icon-color-blue"
                  icon={faCheckCircle}
                />
                <span className="span-space text-lg">Task Management</span>
              </div>
              <div className="flex-6">
                <FontAwesomeIcon
                  className="icon-color-blue"
                  icon={faCheckCircle}
                />
                <span className="span-space text-lg">
                  Attendance Management
                </span>
              </div>
            </div>
            <div>
              <div className="flex-6">
                <FontAwesomeIcon
                  className="icon-color-blue"
                  icon={faCheckCircle}
                />
                <span className="text-lg">Expense Management</span>
              </div>
              <div className="flex-6">
                <FontAwesomeIcon
                  className="icon-color-blue"
                  icon={faCheckCircle}
                />
                <span className="text-lg">Chat and Collaboration</span>
              </div>
              <div className="flex-6">
                <FontAwesomeIcon
                  className="icon-color-blue"
                  icon={faCheckCircle}
                />
                <span className="text-lg">Offline data synchronization</span>
              </div>
            </div>
          </div>
          <div>
            <button className="view-btn">VIEW MORE DETAILS</button>
          </div>
        </div>
        <div>
          <img
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="force-img"
            src="https://suffixit.com/static/media/field-force.497227c8.png"
            alt=""
          />
        </div>
      </div>
      <CallCenter></CallCenter>
    </div>
  );
};

export default Management;
