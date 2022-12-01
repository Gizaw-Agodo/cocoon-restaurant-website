import React from 'react'

import img1 from './images/img1.jpg'
import img2 from './images/img2.jpg'
import img3 from './images/img3.jpg'
import img4 from './images/img4.jpg'
import img5 from './images/img5.jpg'

import { Swiper , SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import './testimonial.css'

import {Navigation , Pagination, Autoplay, Keyboard } from 'swiper'

export default function Testimonial() {
    return (
        <section className="testimonial">
            <Swiper
                slidesPerView={1}
                autoplay = {
                    {
                        delay: 2000,
                        disableOnInteraction: false
                    }
                }
                keyboard={
                    {
                        enabled:true,
                        onlyInViewport: true
                    }
                }
                grabCursor={true}
                pagination={
                    {
                        clickable: true,
                        dynamicBullets: true
                    }
                }
                loop={true}
                modules={[Navigation, Pagination, Autoplay, Keyboard]}
            >
                <SwiperSlide>
                    <div className="user-testimonial">
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <img src={img1} className="img-fluid user-profile" alt='' />
                        <div className="user-comment my-3">
                            <span><i class='bx bxs-quote-alt-left'></i></span> 
                            <p className='testimony'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores et placeat eligendi dolor nam hic.</p>
                            {/* <span><i class='bx bxs-quote-alt-right'></i></span> */}
                        </div>
                        <div className='user-info'>
                            <p className='user-name'>Max Millan</p>
                            <p className='user-job'>Manager at bloomberg</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="user-testimonial">
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <img src={img2} className="img-fluid user-profile" alt='' />
                        <div className="user-comment my-3">
                            <span><i class='bx bxs-quote-alt-left'></i></span> 
                            <p className='testimony'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores et placeat eligendi dolor nam hic.</p>
                            {/* <span><i class='bx bxs-quote-alt-right'></i></span> */}
                        </div>
                        <div className='user-info'>
                            <p className='user-name'>Max Millan</p>
                            <p className='user-job'>Manager at bloomberg</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="user-testimonial">
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <img src={img3} className="img-fluid user-profile" alt='' />
                        <div className="user-comment my-3">
                            <span><i class='bx bxs-quote-alt-left'></i></span> 
                            <p className='testimony'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores et placeat eligendi dolor nam hic.</p>
                            {/* <span><i class='bx bxs-quote-alt-right'></i></span> */}
                        </div>
                        <div className='user-info'>
                            <p className='user-name'>Max Millan</p>
                            <p className='user-job'>Manager at bloomberg</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="user-testimonial">
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <img src={img4} className="img-fluid user-profile" alt='' />
                        <div className="user-comment my-3">
                            <span><i class='bx bxs-quote-alt-left'></i></span> 
                            <p className='testimony'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores et placeat eligendi dolor nam hic.</p>
                            {/* <span><i class='bx bxs-quote-alt-right'></i></span> */}
                        </div>
                        <div className='user-info'>
                            <p className='user-name'>Max Millan</p>
                            <p className='user-job'>Manager at bloomberg</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="user-testimonial">
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <img src={img5} className="img-fluid user-profile" alt='' />
                        <div className="user-comment my-3">
                            <span><i class='bx bxs-quote-alt-left'></i></span> 
                            <p className='testimony'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores et placeat eligendi dolor nam hic.</p>
                            {/* <span><i class='bx bxs-quote-alt-right'></i></span> */}
                        </div>
                        <div className='user-info'>
                            <p className='user-name'>Max Millan</p>
                            <p className='user-job'>Manager at bloomberg</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    )
} 





