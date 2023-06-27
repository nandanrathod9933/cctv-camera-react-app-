import React from 'react';
import TeamSectionChild from "./TeamSectionChild.jsx"

const TeamSection = () => {
    return (
        <>
            <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container">
                    <div className="text-center mx-auto mb-5" style={{ maxWidth: "600px" }}>
                        <h5 className="text-primary text-uppercase" style={{ letterSpacing: "5px" }}>Team Members</h5>
                        <h1 className="display-5 mb-0">Our Professional Team Members</h1>
                    </div>
                    <div className="row g-5">
                        <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
                            <TeamSectionChild imgsrc="img/team-1.jpg" heading="kaushik" designation="project manager" />
                        </div>
                        <div className="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
                            <TeamSectionChild imgsrc="img/team-2.jpg" heading="vivek" designation="senior developer" />
                        </div>
                        <div className="col-lg-4 wow slideInUp" data-wow-delay="0.9s">
                            <TeamSectionChild imgsrc="img/team-3.jpg" heading="nandan" designation="junior developer" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TeamSection;