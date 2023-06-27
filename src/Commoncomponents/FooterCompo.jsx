import { event } from 'jquery';
import React from 'react';
import { Link } from 'react-router-dom';

const FooterCompo = () => {

    const FormSubmitHandel = (event) => {
        event.preventDefault()

    }
    return (
        <>
            <div className="container-fluid bg-dark text-light mt-5 py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container pt-5">
                    <div className="row g-5">
                        <div className="col-lg-3 col-md-6">
                            <h3 className="text-white mb-4">Quick Links</h3>
                            <div className="d-flex flex-column justify-content-start">
                                <Link className="text-light mb-2" to="/"><i className="fa-solid fa-arrow-right text-primary me-2"></i>Home</Link>
                                <Link className="text-light mb-2" to="/about"><i className="fa-solid fa-arrow-right text-primary me-2"></i>About
                                    Us</Link>
                                <Link className="text-light mb-2" to="/service"><i className="fa-solid fa-arrow-right text-primary me-2"></i>Our
                                    Services</Link>
                                <Link className="text-light mb-2" to="/pricing#"><i className="fa-solid fa-arrow-right text-primary me-2"></i>Pricing
                                    Plan</Link>
                                <Link className="text-light" to="/contact"><i className="fa-solid fa-arrow-right text-primary me-2"></i>Contact Us</Link>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h3 className="text-white mb-4">Popular Links</h3>
                            <div className="d-flex flex-column justify-content-start">
                                <Link className="text-light mb-2" to="/"><i className="fa-solid fa-arrow-right text-primary me-2"></i>Home</Link>
                                <Link className="text-light mb-2" to="/about"><i className="fa-solid fa-arrow-right text-primary me-2"></i>About
                                    Us</Link>
                                <Link className="text-light mb-2" to="/service"><i className="fa-solid fa-arrow-right text-primary me-2"></i>Our
                                    Services</Link>
                                <Link className="text-light mb-2" to="/pricing"><i className="fa-solid fa-arrow-right text-primary me-2"></i>Pricing
                                    Plan</Link>
                                <Link className="text-light" to="/contact"><i className="fa-solid fa-arrow-right text-primary me-2"></i>Contact Us</Link>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h3 className="text-white mb-4">Get In Touch</h3>
                            <p className="mb-2"><i className="fa-solid fa-location-dot text-primary me-2"></i>123 Street, New York, USA</p>
                            <p className="mb-2"><i className="fa fa-envelope text-primary me-2"></i>info@example.com</p>
                            <p className="mb-0"><i className="fa fa-phone text-primary me-2"></i>+012 345 67890</p>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h3 className="text-white mb-4">Follow Us</h3>
                            <div className="d-flex">
                                <Link className="btn btn-lg btn-primary btn-lg-square rounded me-2" to="#"><i
                                    className="fab fa-twitter fw-normal"></i></Link>
                                <Link className="btn btn-lg btn-primary btn-lg-square rounded me-2" to="#"><i
                                    className="fab fa-facebook-f fw-normal"></i></Link>
                                <Link className="btn btn-lg btn-primary btn-lg-square rounded me-2" to="#"><i
                                    className="fab fa-linkedin-in fw-normal"></i></Link>
                                <Link className="btn btn-lg btn-primary btn-lg-square rounded" to="#"><i
                                    className="fab fa-instagram fw-normal"></i></Link>
                            </div>
                        </div>
                        <div className="col-12">
                            <form className="mx-auto" style={{ maxWidth: "600px" }} onSubmit={FormSubmitHandel}>
                                <div className="input-group">
                                    <input type="text" className="form-control border-white p-3" placeholder="Your Email" />
                                    <button className="btn btn-primary px-4" >Sign Up</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid bg-primary text-light py-4">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-md-6 text-center text-md-start">
                            <p className="mb-md-0">&copy; <Link className="text-white border-bottom" to="#">Your Site Name</Link>. All
                                Rights Reserved.</p>
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            <p className="mb-0">Designed by <Link className="text-white border-bottom" to="#">
                                Nandan Rathod</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FooterCompo;