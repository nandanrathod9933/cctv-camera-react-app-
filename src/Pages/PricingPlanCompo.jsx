import React, { useEffect } from 'react';
import HeaderCompo from '../Commoncomponents/HeaderCompo';
import NavigateCompo from '../Commoncomponents/NavigateCompo';
import PricingSection from '../Components/PricingSection';
import FooterCompo from '../Commoncomponents/FooterCompo';
import OfferSection from '../Components/OfferSection';
import BackToTops from '../Commoncomponents/BackToTops';
import TestimonialSection from '../Components/TestimonialSection';


const PricingPlanCompo = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "auto" });
    }, [])
    return (
        <>
            <HeaderCompo />
            <NavigateCompo pagename="Pricing" homepage="Home" currentpage="Pricing" linkhref="/pricing" />
            <PricingSection />
            <OfferSection />
            <TestimonialSection />
            <FooterCompo />
            <BackToTops />
        </>
    );
};

export default PricingPlanCompo;