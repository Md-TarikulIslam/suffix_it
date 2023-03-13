import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faServer, faBuilding, faCartShopping , faHospital, faGraduationCap, faGears, faMessage, faMobile, faDatabase } from "@fortawesome/free-solid-svg-icons";
import React from 'react';
import './Services.css'


const Services = () => {
    return (
        <div className='mt-[100px]'>
            <div className='service-position'>
           <h1 className='our-text'>Our <span className='service-text'> Services</span></h1>
           <p className='service-paragraph'>As a leader in technology exploring, Suffix IT is committed to exporting quality software worldwide..</p>
           </div>
           <div className='service-grid'>
            <div className='service-card'>
                <FontAwesomeIcon className='service-icon' icon={faServer}/>
                <h1 className='service-header'>Domain & Hosting</h1>
                <p className='service-p'>Database backup and storage provides centrally controlled protection, security of enterprise and reduces the possibility...</p>
                
            </div>
            <div className='service-card'>
                <FontAwesomeIcon className='service-icon' icon={faBuilding}/>
                <h1 className='service-header'>ERP Consulting</h1>
                <p className='service-p'>We provide IT consulting services which includes project management. Rupantor’s General...</p>
                
            </div>
            <div className='service-card'>
                <FontAwesomeIcon className='service-icon' icon={faCartShopping}/>
                <h1 className='service-header'>Web & E-Commerce</h1>
                <p className='service-p'>We have helped corporations within and across the boundaries by launching successfully e-business solutions...</p> 
            </div>
            <div className='service-card'>
                <FontAwesomeIcon className='service-icon' icon={faGears}/>
                <h1 className='service-header'>Custom Applications</h1>
                <p className='service-p'>We work with clients to assess their unique needs in a discovery phase, define a realistic project scope...</p> 
            </div>
            <div className='service-card'>
                <FontAwesomeIcon className='service-icon' icon={faMessage}/>
                <h1 className='service-header'>Video Conferencing</h1>
                <p className='service-p'>The Suffix Video Conferencing Platform allows students to share their audio, images, chat...</p> 
            </div>
            <div className='service-card'>
                <FontAwesomeIcon className='service-icon' icon={faMobile}/>
                <h1 className='service-header'>Mobile Apps</h1>
                <p className='service-p'>Get an enterprise digital assistant equipped with a long array of screen sizes, user- friendly interface...</p> 
            </div>
            <div className='service-card'>
                <FontAwesomeIcon className='service-icon' icon={faHospital}/>
                <h1 className='service-header'>Hospital Management</h1>
                <p className='service-p'>Suffix Hospital Management System has a user interface that is very easy and quick to use, and that suits...</p> 
            </div>
            <div className='service-card'>
                <FontAwesomeIcon className='service-icon' icon={faGraduationCap}/>
                <h1 className='service-header'>Learning Management</h1>
                <p className='service-p'>It's time to make a decision and find out what sort of LMS would be the best choice for you...</p> 
            </div>
            <div className='service-card'>
                <FontAwesomeIcon className='service-icon' icon={faDatabase}/>
                <h1 className='service-header'>Storage & Backup</h1>
                <p className='service-p'>Database backup and storage provides centrally controlled protection, security of enterprise and...</p> 
            </div>
           </div>
        </div>
    );
};

export default Services;