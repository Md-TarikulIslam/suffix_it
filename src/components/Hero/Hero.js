import React, { useState } from "react";
import Work from "../Work/Work";
import "./Hero.css";

const Hero = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <div>
        <div>
          <div className="flex justify-evenly items-center reverse cover-pic">
            <div className="pl-8 text-start">
              <h1
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                className="text-5xl font-bold pb-10 care-color"
              >
                We care about the <br /> IT Solution you need
              </h1>
              <p className="text-2xl opacity-50 pb-10">
                Suffix IT provides best and prominent Software & <br /> Hardware
                solutions to ensure your business
              </p>
              <div className="flex mb-10">
                <a href="#work">
                  {" "}
                  <button className="btn">LET'S EXPLORE</button>
                </a>
                <div className="circle"></div>
                <img
                  onClick={() => setShowModal(true)}
                  className="ml-20 h-10 d-img"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAdVBMVEUAAAAXXP8WXP8VXv8dYf8WXP8WXf8XXP8XXP8XXP8XXf8WXP8WXP8XXP8XXP8WXP8XW/8WXP8WXP8WXP8XXP8UWv8XXP8XXP8XXP8VW/8XW/8WXP8XXf8WW/8XXf8WXf8YXf8YXP8VXf8XXP8ZWv8VXv8XXP/JaG5aAAAAJnRSTlMA+8wXCME49erHb2TYm+/k1LaJRhsMmLFYJLmfj1ylLYFVKKY+MTbZvFAAAAEgSURBVDjLhVPZtoIwDExaS6lQNmVRvKh3mf//xHsQoRSOkLc006SdzJCLsrEiZA6FbUpax7fV4Fh1nYoBbS+L8qFg5JEcEhnl4OIwr18yqGB+ECiYs0v/Qj4uRx45vU/3w+REqzglqXzPFzzWfQSL4R0FXH9/Ch6v/7GiD6F0P8QiGG/EXz4gQEVU6nzMBVCfPcRVl9QgmgDZDYnXJEJDluUEEBTEyGdNJCoSMTnAi/MkcojMUKg8APlN6pC4WwDocEM6bqpl4p9twP4Is/dIi+1v7hH13KXaW1a2Wpbt9bSxbr7sCKYYiDGfJGfefJ3TbdES3dNt2RNJBfO7NI70rPfQuDrrXZ31XJNKA1ndtnUG6Goyr2f/yvT2N9VzZv9/4o8UVxMG2nkAAAAASUVORK5CYII="
                  alt=""
                />

                {showModal ? (
                  <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                      <div className="relative w-auto my-6 mx-auto max-w-3xl">
                        {/*content*/}
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                          {/*body*/}
                          <div className="relative p-6 flex-auto">
                            <iframe
                              width="560"
                              height="315"
                              src="https://www.youtube.com/embed/t9XYLboQdSg"
                              title="YouTube video player"
                              frameborder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowfullscreen
                            ></iframe>
                          </div>
                          {/*footer*/}
                          <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                            <button
                              className="text-red-700 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                              type="button"
                              onClick={() => setShowModal(false)}
                            >
                              Close
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                  </>
                ) : null}
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
