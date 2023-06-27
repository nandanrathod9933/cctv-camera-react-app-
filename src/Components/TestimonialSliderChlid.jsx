import React from 'react';

const TestimonialSliderChlid = ({ imgsrc }) => {
    return (
        <>
            <div className="text-center pb-4">
                <img className="img-fluid mx-auto rounded-circle" src={imgsrc}
                    style={{ width: "100px", height: "100px" }} />
                <div className="testimonial-text mx-2 rounded p-4 mt-n5">
                    <p className="mt-5">Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod
                        eos labore diam
                    </p>
                    <h4 className="text-truncate">Client Name</h4>
                    <i>Profession</i>
                </div>
            </div>
        </>
    );
};

export default TestimonialSliderChlid;