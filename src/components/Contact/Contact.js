import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <div>
        <div className="contact-flex">
          <div>
            <h1 className="c-head">Get in touch with Us</h1>
            <p className="c-p">
              We don't want to push our ideas on to customers, we simply want to
              make what they want.
            </p>
          </div>
          <div>
            <img
              className="flower"
              src="https://i.ibb.co/t2FZHVv/001.png"
              alt=""
            />
            <img
              className="stand"
              src="https://i.ibb.co/jvT40F0/002.png"
              alt=""
            />
            <img
              className="man"
              src="https://i.ibb.co/60tCrTq/003.png"
              alt=""
            />
            <img className="pc" src="https://i.ibb.co/G0hyjbg/004.png" alt="" />
          </div>
        </div>
        <div className="ball1"></div>
        <div className="ball2"></div>
        <div className="ball3"></div>
        <div className="ball4"></div>
        <div className="ball5"></div>
      </div>

      {/* Form section  */}

      <div className="form-flex">
        <div>
          <p className="f-loc">Our Location</p>
          <p className="f-address">
            Cha-70,70/A, Rupayan Millennium Square (9A), Progoti Sharoni, North
            Badda, Gulshan, Dhaka-1212, Bangladesh.
          </p>
          
          <p className="f-phone"><FontAwesomeIcon className="mr-2" icon={faPhone} />+88 01958 424000</p>
          <hr className="line" />
          <p className="f-info">For more information</p>
          <p className="f-mail"><FontAwesomeIcon className="mr-2" icon={faEnvelope} />info@suffixit.com</p>
        </div>

        <div className="input-flex">
            <div className="en-flex">
            <input className="fname" type="text" placeholder="Name" />
            <input className="fmail" type="text" placeholder="Email" />
            </div>
           
            <input className="fsub" type="text" placeholder="Subject" />
            <input className="fphone" type="text" placeholder="Phone No." />
            <textarea className="ftext" name="" id="" cols="10" rows="8" placeholder="Your Comment"></textarea>
            <button className="s-btn">SEND MESSAGE</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
