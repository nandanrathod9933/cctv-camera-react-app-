import React, { useEffect } from 'react';
import HeaderCompo from '../Commoncomponents/HeaderCompo.jsx';
import HomePageSlider from "../Components/HomePageSlider.jsx";
import AboutSection from "../Components/AboutSection.jsx";
import ServiceSection from "../Components/ServiceSection.jsx";
import PricingSection from "../Components/PricingSection.jsx";
import OfferSection from "../Components/OfferSection.jsx";
import TeamSection from "../Components/TeamSection.jsx";
import TestimonialSection from "../Components/TestimonialSection.jsx";
import BlogSection from "../Components/BlogSection.jsx";
import FooterCompo from '../Commoncomponents/FooterCompo.jsx';
import BackToTops from '../Commoncomponents/BackToTops.jsx';



const Home = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "auto" });
    }, [])
    return (
        <>
            <HeaderCompo />
            <HomePageSlider />
            <AboutSection />
            <ServiceSection />
            <PricingSection />
            <OfferSection />
            <TeamSection />
            <TestimonialSection />
            <BlogSection />
            <FooterCompo />
            <BackToTops />
        </>
    );
};

export default Home;