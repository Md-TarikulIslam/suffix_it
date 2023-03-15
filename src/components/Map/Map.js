import React from 'react';
import './Map.css'

const Map = () => {
    return (
        <div className='google-map'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14603.879854664943!2d90.4255461!3d23.7840839!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c793ffffffff%3A0x7aefdbe12c0d44e3!2sSuffix%20IT!5e0!3m2!1sen!2sbd!4v1678882199157!5m2!1sen!2sbd"  ></iframe>
        </div>
    );
};

export default Map;