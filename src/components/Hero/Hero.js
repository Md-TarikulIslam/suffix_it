import React from "react";
import Work from "../Work/Work";
import "./Hero.css";

const Hero = () => {
  return (
    <div>
    <div>
      <div>
        <div className="flex justify-evenly items-center reverse cover-pic">
          <div className="pl-8 text-start">
            <h1
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
              className="text-5xl font-bold pb-10 care-color"
            >
              We care about the <br /> IT Solution you need
            </h1>
            <p className="text-2xl opacity-50 pb-10">
              Suffix IT provides best and prominent Software & <br /> Hardware
              solutions to ensure your business
            </p>
            <div className="flex mb-10">
              <button className="btn">LET'S EXPLORE</button>
              <div className="circle"></div>
              <img
                className="ml-20 h-10 d-img"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAdVBMVEUAAAAXXP8WXP8VXv8dYf8WXP8WXf8XXP8XXP8XXP8XXf8WXP8WXP8XXP8XXP8WXP8XW/8WXP8WXP8WXP8XXP8UWv8XXP8XXP8XXP8VW/8XW/8WXP8XXf8WW/8XXf8WXf8YXf8YXP8VXf8XXP8ZWv8VXv8XXP/JaG5aAAAAJnRSTlMA+8wXCME49erHb2TYm+/k1LaJRhsMmLFYJLmfj1ylLYFVKKY+MTbZvFAAAAEgSURBVDjLhVPZtoIwDExaS6lQNmVRvKh3mf//xHsQoRSOkLc006SdzJCLsrEiZA6FbUpax7fV4Fh1nYoBbS+L8qFg5JEcEhnl4OIwr18yqGB+ECiYs0v/Qj4uRx45vU/3w+REqzglqXzPFzzWfQSL4R0FXH9/Ch6v/7GiD6F0P8QiGG/EXz4gQEVU6nzMBVCfPcRVl9QgmgDZDYnXJEJDluUEEBTEyGdNJCoSMTnAi/MkcojMUKg8APlN6pC4WwDocEM6bqpl4p9twP4Is/dIi+1v7hH13KXaW1a2Wpbt9bSxbr7sCKYYiDGfJGfefJ3TbdES3dNt2RNJBfO7NI70rPfQuDrrXZ31XJNKA1ndtnUG6Goyr2f/yvT2N9VzZv9/4o8UVxMG2nkAAAAASUVORK5CYII="
                alt=""
              />
            </div>
          </div>
          <div data-aos="fade-left">
            <img 
              className="banner-img"
              src="https://suffixit.com/static/media/banner_image.a079af09.png"
              alt=""
            />
            <img
              className="dot-down"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABbBAMAAAB+C51lAAAAHlBMVEUAAAAXXP8XXP8XXP8XXP8XXP8XXP8XXP8XXP8XXP/fQI9nAAAACXRSTlMAu/S+HiEgwvDza90XAAAAqUlEQVRYw2NwVHRgYGBgERIBkggONiEoJTnTAMhinDkZSCI42ISglOZMBSCLaeYkIIngYBOCUCTbQLofRsEQBaOpdRSMgtH8MAqGIhhNraNg6IBk5QQgyWZkhsbBFIJQdEitlTMLgCz2mdOBJIKDTQhKBTcHAFmsFqZAEsHBJgSlRsEQBaOpdRQMHZAISY1CZmgcTCEwRY/UaglOjczg1IjgYBMCUWSkVgC5Zu0c7+5ewgAAAABJRU5ErkJggg=="
              alt=""
            />
            <img
              className="dot-up"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABbBAMAAAB+C51lAAAAHlBMVEUAAAAXXP8XXP8XXP8XXP8XXP8XXP8XXP8XXP8XXP/fQI9nAAAACXRSTlMAu/S+HiEgwvDza90XAAAAqUlEQVRYw2NwVHRgYGBgERIBkggONiEoJTnTAMhinDkZSCI42ISglOZMBSCLaeYkIIngYBOCUCTbQLofRsEQBaOpdRSMgtH8MAqGIhhNraNg6IBk5QQgyWZkhsbBFIJQdEitlTMLgCz2mdOBJIKDTQhKBTcHAFmsFqZAEsHBJgSlRsEQBaOpdRQMHZAISY1CZmgcTCEwRY/UaglOjczg1IjgYBMCUWSkVgC5Zu0c7+5ewgAAAABJRU5ErkJggg=="
              alt=""
            />
            <div>
              <span className="bubble-1"></span>
              <span className="bubble-2"></span>
            </div>
          </div>
          
        </div>
       
      </div>
    
    </div>
    <Work></Work>
    </div>
  );
};

export default Hero;
