import React, { useEffect } from 'react';
import HeaderCompo from '../Commoncomponents/HeaderCompo';
import NavigateCompo from '../Commoncomponents/NavigateCompo';
import ServiceSection from "../Components/ServiceSection.jsx";
import OfferSection from '../Components/OfferSection';
import FooterCompo from '../Commoncomponents/FooterCompo';
import BackToTops from '../Commoncomponents/BackToTops';
import TestimonialSection from '../Components/TestimonialSection';


const ServiceCompo = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "auto" });
    }, [])
    return (
        <>
            <HeaderCompo />
            <NavigateCompo pagename="Service page" homepage="Home" currentpage="Service" linkhref="/service" />
            <ServiceSection />
            <OfferSection />
            <TestimonialSection />
            <FooterCompo />
            <BackToTops />
        </>
    );
};

export default ServiceCompo;