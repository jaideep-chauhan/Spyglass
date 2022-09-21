import React from 'react';
import './Style.css';
import { Link, BrowserRouter as Router, NavLink } from 'react-router-dom';
// import { Carousel } from 'react-bootstrap';
import image1 from '../imges/hr-1.jpg'
import image2 from '../imges/hr-2.jpg'
import image3 from '../imges/hr-3.jpg'
// import image4 from '../imges/hr-4.jpg'
import image6 from '../imges/spyglasslogo.png'




export default function HomePage() {
    return (
        <>
            <div className='main-home d-flex'>
                <div className='l-home'>
                    <div className='l-navbar d-flex-sb'>
                        <img src={image6}/>
                        <ul className='d-flex-sb'>
                            <li><span>HOME</span></li>
                            <div className="dropdown">
                                <Router>
                                    <NavLink to="%" className="dropbtn">PAGES</NavLink>
                                    <div className="dropdown-content">
                                        <Link to="/3DPrinting">Our Advisers</Link>
                                        <Link to="/3DScaning">About Us</Link>
                                        <Link to="/CADModeling">Advisers Profile</Link>
                                        <Link to="/ProductDesign">Our Services</Link>
                                    </div>
                                </Router>
                            </div>
                            <li><span>FEATURES</span></li>
                            <li><span>BLOG</span></li>
                            <li><span>CONTACT</span></li>
                        </ul>
                    </div>
                </div>
                <div className='r-home'>
                    <div className='r-navbar'>
                        <div className='media-icon'>
                            <span class="iconify" data-icon="brandico:twitter-bird"></span>
                            <span class="iconify" data-icon="dashicons:facebook-alt"></span>
                            <span class="iconify" data-icon="fa-brands:instagram"></span>
                        </div>
                        <span class="iconify" data-icon="carbon:search"></span>

                    </div>

                </div>
            </div>
            <div className='uper-home'>

                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block w-100" src={image1} alt="First slide"/>
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src={image2} alt="Second slide"/>
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src={image3} alt="Third slide"/>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only"></span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only"></span>
                    </a>
                </div>


            </div>


        </>
    )
}
