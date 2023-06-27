import React, { useEffect } from 'react';
import HeaderCompo from '../Commoncomponents/HeaderCompo';
import NavigateCompo from '../Commoncomponents/NavigateCompo';
import ContactSection from '../Components/ContactSection.jsx';
import FooterCompo from '../Commoncomponents/FooterCompo';
import BackToTops from '../Commoncomponents/BackToTops';

const Contact = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "auto" });
    }, [])
    return (
        <>
            <HeaderCompo />
            <NavigateCompo pagename="Contact" homepage="Home" currentpage="Contact" linkhref="/contact" />
            <ContactSection />
            <FooterCompo />
            <BackToTops />
        </>
    );
};

export default Contact;