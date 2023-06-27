import React from 'react';

const OfferSection = () => {
    return (
        <>
            <div className="container-fluid bg-offer my-5 py-5 wow zoomIn" data-wow-delay="0.1s">
                <div className="container py-5">
                    <div className="row gx-5 justify-content-center">
                        <div className="col-lg-7 text-center">
                            <div className="text-center mx-auto mb-4" style={{ maxWidth: "600px" }}>
                                <h5 className="text-white text-uppercase" style={{ letterSpacing: "5px" }}>Special Offer</h5>
                                <h1 className="display-5 text-white">Save 50% On All Items Your First Order</h1>
                            </div>
                            <p className="text-white mb-4">Eirmod sed tempor lorem ut dolores sit kasd ipsum. Dolor ea et dolore et
                                at sea ea at dolor justo ipsum duo rebum sea. Eos vero eos vero ea et dolore eirmod et. Dolores
                                diam duo lorem. Elitr ut dolores magna sit. Sea dolore sed et.</p>
                            <a href="" className="btn btn-primary py-md-3 px-md-5 me-3">Order Now</a>
                            <a href="" className="btn btn-danger py-md-3 px-md-5">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OfferSection;