import React, { useEffect } from 'react';
import ServiceSectionChlid from "../Components/ServiceSectionChlid.jsx"
import { FaSmile } from 'react-icons/fa'
import { BiSolidCctv } from 'react-icons/bi';
// import { ReactComponent as SurveillanceImg } from '../Img/surveillance.svg';
import WOW from 'wow.js';

const ServiceSection = () => {
    useEffect(() => {

        const wow = new WOW();
        wow.init();
    }, []);
    return (
        <>
            <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container">
                    <div className="text-center mx-auto mb-5" style={{ maxWidth: "600px" }}>
                        <h5 className="text-primary text-uppercase" style={{ letterSpacing: "5px" }}>Services</h5>
                        <h1 className="display-5 mb-0">Our Excellent CCTV Security Services</h1>
                    </div>
                    <div className="row g-5">
                        <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
                            <ServiceSectionChlid subheading="Installation" />
                            {/* <BiSolidCctv /> */}
                            {/* <img src="img/surveillance.svg" alt="" className=" d-block display-1 fw-normal  mb-3" style={{ width: "100px" }} /> */}
                            {/* <SurveillanceImg className=" d-block display-1 fw-normal  mb-3" style={{ width: "100px" }} /> */}
                            {/* </ServiceSectionChlid > */}
                        </div>
                        <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
                            <ServiceSectionChlid subheading="Configuration" />
                            {/* <FaSmile />
                            </ServiceSectionChlid> */}
                        </div>
                        <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.9s">
                            <ServiceSectionChlid subheading="Maintenance" />
                        </div>

                        <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
                            <ServiceSectionChlid subheading="Repair & Service" />
                        </div>
                        <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
                            <ServiceSectionChlid subheading="Monitoring" />
                        </div>
                        <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.9s">
                            <ServiceSectionChlid subheading="Access Control" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceSection;