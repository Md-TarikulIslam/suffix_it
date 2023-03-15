import React from "react";
import comments from "./Comments.json";
import "./Comments.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay, FreeMode } from "swiper";
import Clients from "../Clients/Clients";

const Comments = () => {
  return (
    <div>
    <div className="fullContainer">
      <h1 className="w-text">What They Said!</h1>
      <h1 className="s-text">
        Customer satisfaction is our top priority. Client’s positive feedback
        inspire and motivate our team and business
      </h1>

      <Swiper
        modules={[Pagination, Autoplay, FreeMode]}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
        }}
        direction="horizontal"
        autoplay={{
          delay: 2500,
        }}
        spaceBetween={30}
        // pagination={{
        //   clickable: true,
        // }}
        className="mySwiperr "
      >
        {comments.map((comment) => (
          <SwiperSlide className="card-container">
            <h1 className="c-header">{comment.header}</h1>
            <h1 className="c-comment">{comment.comment}</h1>
            <img className="c-img" src={comment["p-img"]} alt="" />
            <h1 className="c-name">{comment.name}</h1>
            <h1 className="c-des">{comment.designation}</h1>
          </SwiperSlide>
        ))}
      </Swiper>
      
    </div>
    <Clients></Clients>
    </div>
  );
};

export default Comments;
