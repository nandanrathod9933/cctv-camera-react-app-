import React, { useEffect } from 'react';
import HeaderCompo from '../Commoncomponents/HeaderCompo';
import NavigateCompo from "../Commoncomponents/NavigateCompo.jsx";
import AboutSection from '../Components/AboutSection';
import TeamSection from '../Components/TeamSection';
import FooterCompo from '../Commoncomponents/FooterCompo';
import BackToTops from '../Commoncomponents/BackToTops';


const About = () => {
    useEffect(() => {

        window.scrollTo({ top: 0, behavior: "auto" });
    },[])
    return (
        <>
            <HeaderCompo />
            <NavigateCompo pagename="About page" homepage="Home" currentpage="About" linkhref="/about" />
            <AboutSection />
            <TeamSection />
            <FooterCompo />
            <BackToTops />

        </>
    );
};

export default About;