import React from 'react';
import { Link } from 'react-router-dom';

const HomePageSlider = () => {
    return (
        <>
            <div className="container-fluid p-0 mb-5">
                <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#header-carousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#header-carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#header-carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="w-100" src="./img/carousel-1.jpg" alt="Image" />
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div className="p-3" style={{ maxWidth: "900px" }}>
                                    <h5 className="text-white text-uppercase animated bounceInDown">Best Security Services</h5>
                                    <h1 className="display-1 text-white mb-md-4 animated zoomIn">Safe & Secure Home For Your Family</h1>
                                    <Link to="#" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Get Quote</Link>
                                    <Link to="#" className="btn btn-danger py-md-3 px-md-5 animated slideInRight">Contact Us</Link>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="w-100" src="./img/carousel-2.jpg" alt="Image" />
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div className="p-3" style={{ maxWidth: "900px" }}>
                                    <h5 className="text-white text-uppercase animated bounceInDown">Best Security Services</h5>
                                    <h1 className="display-1 text-white mb-md-4 animated zoomIn">Safe & Secure Home For Your Family</h1>
                                    <Link to="#" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Get Quote</Link>
                                    <Link to="#" className="btn btn-danger py-md-3 px-md-5 animated slideInRight">Contact Us</Link>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="w-100" src="./img/carousel-3.jpg" alt="Image" />
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div className="p-3" style={{ maxWidth: "900px" }}>
                                    <h5 className="text-white text-uppercase animated bounceInDown">Best Security Services</h5>
                                    <h1 className="display-1 text-white mb-md-4 animated zoomIn">Safe & Secure Home For Your Family</h1>
                                    <Link to="#" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Get Quote</Link>
                                    <Link to="#" className="btn btn-danger py-md-3 px-md-5 animated slideInRight">Contact Us</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#header-carousel"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </>
    );
};

export default HomePageSlider;