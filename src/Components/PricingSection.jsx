import React from 'react';
import { Link } from 'react-router-dom';

const PricingSection = () => {
    return (
        <>
            <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s" style={{ marginBottom: "75px" }}>
                <div className="container">
                    <div className="text-center mx-auto mb-5" style={{ maxWidth: "600px" }}>
                        <h5 className="text-primary text-uppercase" style={{ letterSpacing: "5px" }}>Pricing Plan</h5>
                        <h1 className="display-5 mb-0">Pricing Plan For CCTV Security Services</h1>
                    </div>
                    <div className="row g-5">
                        <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
                            <div className="position-relative border border-primary rounded">
                                <div className="bg-primary text-center pt-5 pb-4">
                                    <h3 className="text-white">Basic Plan</h3>
                                    <h1 className="display-4 text-white">
                                        <small className="align-top" style={{ fontSize: "22px", lineHeight: "45px" }}>$</small>49<small
                                            className="align-bottom" style={{ fontSize: "16px", lineHeight: "40px" }}>/
                                            Mo</small>
                                    </h1>
                                </div>
                                <div className="text-center py-5">
                                    <p className="border-bottom border-light mb-2 pb-2">HTML5 & CSS3</p>
                                    <p className="border-bottom border-light mb-2 pb-2">Bootstrap v5</p>
                                    <p className="border-bottom border-light mb-2 pb-2">Responsive Layout</p>
                                    <p className="border-bottom border-light mb-2 pb-2">Browsers Compatibility</p>
                                    <p className="mb-2 pb-2">Easy to Use</p>
                                </div>
                                <Link to="#"
                                    className="btn btn-primary py-2 px-4 position-absolute top-100 start-50 translate-middle">Order
                                    Now</Link>
                            </div>
                        </div>
                        <div className="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
                            <div className="position-relative border border-secondary rounded">
                                <div className="bg-secondary text-center pt-5 pb-4">
                                    <h3 className="text-white">Standard Plan</h3>
                                    <h1 className="display-4 text-white">
                                        <small className="align-top" style={{ fontSize: "22px", lineHeight: "45px" }}>$</small>49<small
                                            className="align-bottom" style={{ fontSize: "16px", lineHeight: "40px" }}>/
                                            Mo</small>
                                    </h1>
                                </div>
                                <div className="text-center py-5">
                                    <p className="border-bottom border-light mb-2 pb-2">HTML5 & CSS3</p>
                                    <p className="border-bottom border-light mb-2 pb-2">Bootstrap v5</p>
                                    <p className="border-bottom border-light mb-2 pb-2">Responsive Layout</p>
                                    <p className="border-bottom border-light mb-2 pb-2">Browsers Compatibility</p>
                                    <p className="mb-2 pb-2">Easy to Use</p>
                                </div>
                                <Link to="#"
                                    className="btn btn-primary py-2 px-4 position-absolute top-100 start-50 translate-middle">Order
                                    Now</Link>
                            </div>
                        </div>
                        <div className="col-lg-4 wow slideInUp" data-wow-delay="0.9s">
                            <div className="position-relative border border-primary rounded">
                                <div className="bg-primary text-center pt-5 pb-4">
                                    <h3 className="text-white">Extended Plan</h3>
                                    <h1 className="display-4 text-white">
                                        <small className="align-top" style={{ fontSize: "22px", lineHeight: "45px" }}>$</small>49<small
                                            className="align-bottom" style={{ fontSize: "16px", lineHeight: "40px" }}>/
                                            Mo</small>
                                    </h1>
                                </div>
                                <div className="text-center py-5">
                                    <p className="border-bottom border-light mb-2 pb-2">HTML5 & CSS3</p>
                                    <p className="border-bottom border-light mb-2 pb-2">Bootstrap v5</p>
                                    <p className="border-bottom border-light mb-2 pb-2">Responsive Layout</p>
                                    <p className="border-bottom border-light mb-2 pb-2">Browsers Compatibility</p>
                                    <p className="mb-2 pb-2">Easy to Use</p>
                                </div>
                                <Link href="#"
                                    className="btn btn-primary py-2 px-4 position-absolute top-100 start-50 translate-middle">Order
                                    Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PricingSection;