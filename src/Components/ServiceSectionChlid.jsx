import React from 'react';
import { Link } from 'react-router-dom';

const ServiceSectionChlid = ({ subheading, children }) => {
    return (
        <>
            <div className="service-item bg-light border-bottom border-5 border-primary rounded">
                <div className="position-relative p-5">
                    {/* <icon className="flaticon-cctv d-block display-1 fw-normal text-secondary mb-3" /> */}
                    {/* <i className="flaticon-cctv d-block display-1 fw-normal text-secondary mb-3"></i> */}
                    <div className=" d-block display-1 fw-normal text-danger mb-3">{children}</div>
                    {/* <div>{children}</div> */}
                    {/* {children} */}
                    <h5 className="text-primary mb-0">CCTV</h5>
                    <h3 className="mb-3">{subheading}</h3>
                    <p>Kasd dolor no lorem sit tempor at justo rebum rebum stet justo elitr dolor amet sit</p>
                    <Link to="#">Read More &nbsp;<i className="fa-solid fa-arrow-right"></i></Link>
                </div>
            </div>
        </>
    );
};

export default ServiceSectionChlid;