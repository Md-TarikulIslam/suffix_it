import React from "react";
import "./HotelBook.css";
const HotelBook = () => {
  return (
    <div>
      <div className="payroll-flex">
        <div>
          <h1 className="hr-text">Hotel Booking System</h1>
          <span className="cover-ball"></span>
          <span className="round-ball"></span>
        </div>
        <div>
          <img
            className="pay-img"
            src="https://suffixit.com/static/media/Hotel%20Booking-pana.c7923eb8.svg"
            alt=""
          />
        </div>
      </div>

      <div className="payroll-mod-flex mt-20">
        <div data-aos="fade-right">
          <img
            className="payroll-img"
            src="https://suffixit.com/static/media/booking.bb598b64.svg"
            alt=""
          />
        </div>
        <div data-aos="fade-left">
          <h1 className="payroll-text">Multiple room bookings</h1>
          <p className="payroll-p">
            Guests can book more than one room within a single reservation.
            During the booking process, they will see the available rooms for
            the selected period and can pick one or more rooms and the number of
            guests.
          </p>
        </div>
      </div>
      <div>
    
        <div className="payroll-mod-flex">
          <div data-aos="fade-right">
            <h1 className="payroll-text">Reservation Management</h1>
            <p className="payroll-p">
              The integrated reservation management system enables
              administrators to manage booking and customer details and add
              bookings manually. They can keep track of bookings by date and
              status on the room availability calendar.
            </p>
          </div>
          <div data-aos="fade-left">
            <img
              className="payroll-img"
              src="https://suffixit.com/static/media/reservation.504f3564.svg"
              alt=""
            />
          </div>
        </div>
      </div>

      <div>
          <img
            className="live-demo-img"
            src="https://suffixit.com/static/media/Telecommuting-rafiki.6436ded2.svg"
            alt=""
          />
          <h1 className="schedule-text">Schedule a live demo</h1>
          <p className="schedule-p">
            Go for a free practical demonstration in order to experience the
            user friendly platform of Suffix Field Force Management.
          </p>
          <button className="schedule-btn">Request for a demo</button>
        </div>
    </div>
  );
};

export default HotelBook;
