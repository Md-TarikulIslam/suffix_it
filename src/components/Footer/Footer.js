import React from "react";

import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer-area">
      <div className="flex10">
        <div>
          <img
          className="company-logo"
            src="data:image/png;base64,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"
            alt=""
          />
          <p className="address">
            Cha-70,70/A, Rupayan Millennium Square (9A), Progoti Sharoni, North
            Badda, Gulshan, Dhaka-1212, Bangladesh.
          </p>
          <p className="mail">E-mail: info@suffixit.com</p>
          <p className="phone">Phone: +88 01958 424000</p>
          <div className="logo-flex">
          <FaFacebook className="b-logo"/> 
          <FaTwitter  className="b-logo"/> 
          <FaLinkedin className="b-logo"/>
          </div>
          
        </div>
        <div>
            <h1 className="foo-head">Product</h1>

            <div className="link-flex">
            <Link className="li-name">RUPANTOR HCM/HR/Payroll</Link>
            <Link className="li-name">SUFFIX PF</Link>
            <Link className="li-name">Rupantor ERP</Link>
            <Link className="li-name">E-commerce</Link>
            <Link className="li-name">Field Force Management</Link>
            <Link className="li-name">Suffix Interconnect Billing</Link>
            <Link className="li-name">SUffix Hotel Booking System</Link>
            <Link className="li-name">Rupantor Inventor</Link>
            <Link className="li-name">Smart POS & Billing System</Link>
            </div>
       
        </div>
        <div>
            <h1 className="foo-head">Services</h1>
            
           <div className="link-flex">
            <Link className="li-name">Domain & Hosting</Link>
            <Link className="li-name">ERP Consulting</Link>
            <Link className="li-name">Web & Ecommerce</Link>
            <Link className="li-name">Custom Applications</Link>
            <Link className="li-name">Storage & Backup Services</Link>
            <Link className="li-name">Mobile Apps</Link>
            <Link className="li-name">Field Force Management</Link>
            <Link className="li-name">Bulk SMS</Link>
            <Link className="li-name">Suffix Video COnferencing</Link>
            <Link className="li-name">Smart POS & Billing System</Link>
            <Link className="li-name">IoT-(Internet of things)</Link>
           </div>
        </div>
        <div>
            <h1 className="foo-head">Members of:</h1>
            <img className="foo-img" src="https://suffixit.com/static/media/basis.4d3b2ce9.svg" alt="" />
            <img className="foo-img" src="https://suffixit.com/static/media/bacco.bd0330ea.png" alt="" />
        </div>
      </div>
      <div>
        <hr />
        <div className="term-flex">
            <p className="rights-all"><span> &copy; 2023 All Rights Reserved by <span className="text-blue-500">Suffix IT</span></span></p>
            <p className="privacy">Privacy & Policy.Faq.Terms</p>
            
        </div>
      </div>
    </div>
  );
};

export default Footer;
