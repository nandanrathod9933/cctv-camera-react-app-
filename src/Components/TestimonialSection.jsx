import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import TestimonialSliderChlid from "./TestimonialSliderChlid.jsx";
const TestimonialSection = () => {
    const settings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        speed: 300,
        infinite: true,
        autoplaySpeed: 5000,
        autoplay: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                },

            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    dots: false,

                },
            },
        ],
    };
    return (
        <>
            <div className="container-fluid py-5  wow fadeInUp" data-wow-delay="0.1s" style={{ margin: "50px 0" }}>
                <div className="container">
                    <div className="text-center mx-auto mb-5" style={{ maxWidth: "600px" }}>
                        <h5 className="text-primary text-uppercase" style={{ letterSpacing: "5px" }}>Testimonial</h5>
                        <h1 className="display-5 mb-0">What People Say About Our Services</h1>
                    </div>




                    <div className="owl-carousel testimonial-carousel">

                        <Slider {...settings}>
                            <TestimonialSliderChlid imgsrc="img/testimonial-1.jpg" />
                            <TestimonialSliderChlid imgsrc="img/testimonial-2.jpg" />
                            <TestimonialSliderChlid imgsrc="img/testimonial-3.jpg" />
                            <TestimonialSliderChlid imgsrc="img/testimonial-4.jpg" />
                        </Slider>

                    </div>
                </div>
            </div>
        </>
    );
};

export default TestimonialSection;