import React from "react";
import clients from "./Clients.json";
import "./Clients.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay, FreeMode } from "swiper";

const Clients = () => {
  return (
    <div>
      <div className="client">
        <h1 className="text-slate-600 text-3xl our happy font-bold mb-5">
          Our Happy Clients
        </h1>
        <p className="text-gray-600 text-xl best paragraph mb-10">
          We Work Only For <span className="text-blue-500">The Best.</span>
        </p>
      </div>
     
     
        
      <div className="slider1">
        <div className="slide-track">
        <div className="slide">
          <img className="com-img" src="https://suffixit.com/static/media/2.94dbe157.png" alt="" />
        </div>
        <div className="slide">
          <img className="com-img" src="https://suffixit.com/static/media/5.8075929a.png" alt="" />
        </div>
        <div className="slide">
          <img className="com-img" src="https://suffixit.com/static/media/1.a2a785dc.png" alt="" />
        </div>
        <div className="slide">
          <img className="com-img" src="https://suffixit.com/static/media/19.7051bd96.png" alt="" />
        </div>
        <div className="slide">
          <img className="com-img" src="https://suffixit.com/static/media/2.94dbe157.png" alt="" />
        </div>
        <div className="slide">
          <img className="com-img" src="https://suffixit.com/static/media/8.42fc361e.png" alt="" />
        </div>


        <div className="slide">
          <img className="com-img" src="https://suffixit.com/static/media/2.94dbe157.png" alt="" />
        </div>
        <div className="slide">
          <img className="com-img" src="https://suffixit.com/static/media/5.8075929a.png" alt="" />
        </div>
        <div className="slide">
          <img className="com-img" src="https://suffixit.com/static/media/1.a2a785dc.png" alt="" />
        </div>
        <div className="slide">
          <img className="com-img" src="https://suffixit.com/static/media/19.7051bd96.png" alt="" />
        </div>
        <div className="slide">
          <img className="com-img" src="https://suffixit.com/static/media/2.94dbe157.png" alt="" />
        </div>
        <div className="slide">
          <img className="com-img" src="https://suffixit.com/static/media/8.42fc361e.png" alt="" />
        </div>
        </div>
      </div>
      
    </div>
  );
};

export default Clients;
