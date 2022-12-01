import React from 'react'
import './footer.css'
import "@fontsource/montez";

export default function Footer() {
    return (
        <section className='footer'>
            <div container>
                <div className='row'>
                    <div className="col-12 col-md-6 col-lg-3 site-pages">
                        <p className='footer-list-title'>Sitemap</p>
                        <ul className='page_list ps-1'>
                            <li><a href="#" className="page-link">Home</a></li>
                            <li><a href="#" className="page-link">About</a></li>
                            <li><a href="#" className="page-link">Menu</a></li>
                            <li><a href="#" className="page-link">Testimonials</a></li>
                            <li><a href="#" className="page-link">Contact</a></li>
                        </ul>
                    </div>
                    <div className='col-12 col-md-6 col-lg-3 '>
                        <p className='footer-list-title'>About</p>
                        <div className='contact-info justify-content-center align-items-center ps-1'>
                            <div className='d-flex'>
                                <i class='about-icon bx bx-map' ></i>
                                <p>4kilo, Addis Ababa, Ethiopia</p>
                            </div>
                            <div className='d-flex'>
                                <i class='about-icon bx bx-phone' ></i>
                                <p>+25190909090</p>
                            </div>
                            <div className='d-flex'>
                                <i class='about-icon bx bx-envelope'></i>
                                <p>cocoon@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 ">
                        <p className='footer-list-title'>Follow Us</p>
                        <ul className='social_list ps-1 d-flex'>
                            <li><a href="#" className="social-link"><i class='social-icon bx bxl-facebook'></i></a></li>
                            <li><a href="#" className="social-link"><i class='social-icon bx bxl-instagram' ></i></a></li>
                            <li><a href="#" className="social-link"><i class='social-icon bx bxl-tiktok' ></i></a></li>
                            <li><a href="#" className="social-link"><i class='social-icon bx bxl-twitter' ></i></a></li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 ">
                        <p className='footer-list-title'>Opening Hours </p>
                        <div className='opening-hour'>
                            <p>Monday - Sunday <br /><span>6AM - 8PM</span></p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <hr />
                    <p className='copyright-text'><small>Copyright &copy;2022 All Right Reserved.</small></p>
                </div>
            </div>
        </section>
    )
}