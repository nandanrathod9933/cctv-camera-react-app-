import React from 'react';

const TeamSectionChild = ({ imgsrc, heading, designation }) => {
    return (
        <>
            <div className="position-relative rounded-top">
                <img className="img-fluid rounded-top w-100" src={imgsrc} alt="" />
                <div className="position-absolute bottom-0 end-0 d-flex flex-column bg-white p-1"
                    style={{ marginRight: "-25px" }}>
                    <a className="btn btn-outline-danger btn-square m-1" href="#"><i
                        className="fab fa-twitter fw-normal"></i></a>
                    <a className="btn btn-outline-danger btn-square m-1" href="#"><i
                        className="fab fa-facebook-f fw-normal"></i></a>
                    <a className="btn btn-outline-danger btn-square m-1" href="#"><i
                        className="fab fa-linkedin-in fw-normal"></i></a>
                    <a className="btn btn-outline-danger btn-square m-1" href="#"><i
                        className="fab fa-instagram fw-normal"></i></a>
                </div>
            </div>
            <div className="bg-primary text-center rounded-bottom p-4">
                <h3 className="text-white text-capitalize">{heading}</h3>
                <p className="text-white m-0 text-capitalize">{designation}</p>
            </div>
        </>
    );
};

export default TeamSectionChild;