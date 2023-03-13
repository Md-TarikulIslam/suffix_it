import './Products.css'
import fakeData from '../../../src/fakeData.json'
import './Products.css'

import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/pagination";


import { Pagination } from "swiper";

const Products = () => {
    
    return (
        <div>
            <div>
                <h1 className='our-text mt-40'>Our <span className='service-text'>Products</span></h1>
                <p className='service-paragraph mt-10 mb-10'>We offer a diverse spectrum of products for your specific company requirements. We implement rigorous quality testing as a <br /> technologically process-driven firm to assure seamless, round-the-clock, and global performance. We are very much enthusiastic about <br /> developing innovative software solutions merging with the current technological advancement.</p>
            </div>
        <div className='main-container'>
              <Swiper
        slidesPerView= {4}
        autoplay={true}
        loop={true}
        speed= {3000}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true 

        }}
        navigation={true}
        modules={[Pagination]}
        className="mySwiper "
      >
           {
                fakeData.map((data)=>(
                    
                   
                    <SwiperSlide className='swip-container'>
                    <img className='swip-img' src={data.image} alt="" />
                    <h1 className='swip-h'>{data.header}</h1>
                    <h1 className='swip-p'>{data.details}</h1>
                    </SwiperSlide>

                    
                 
                ))
            }
        
  
      </Swiper>
        </div>
        </div>
    );
};

export default Products;