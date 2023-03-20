import { faDollar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./DomainInventory.css";
import domain from "./DomainInventory.json";

const DomainInventory = () => {
  return (
    <div className="overflow-x-hidden">
      <img
        className="domain-img"
        src="https://suffixit.com/static/media/hosting.9019177e.jpg"
        alt=""
      />
      <h1 className="domain-text">Domain & Hosting</h1>

      <div className="bread">
        <div class="bg-white p-4 breadcrumb m-0 items-center flex-wrap">
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

            <li class="inline-flex items-center mr-2">
              <a href="#host">
                {" "}
                <span className="text-white hover:text-blue-500">
                  Domain & Hosting
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div id="host" data-aos="fade-up" className="domain-card">
        {domain.map((data) => (
          <div>
            <div className="single-domain-card">
              <p className="domain-data">{data.type}</p>
              <p>
                {" "}
                <FontAwesomeIcon
                  className="domain-blue"
                  icon={faDollar}
                ></FontAwesomeIcon>
                <span className="price">{data.price}</span>
                <span className="valid"> {data.validation}</span>
              </p>
              <p className="all-data">{data.ram}</p>
              <p className="all-data">{data.cpu}</p>
              <p className="all-data">{data.storage}</p>
              <p className="all-data">{data.transfer}</p>
              <p className="all-data">{data["net-in"]}</p>
              <p className="all-data">{data["net-out"]}</p>
              <button className="domain-btn">{data.btn}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DomainInventory;
