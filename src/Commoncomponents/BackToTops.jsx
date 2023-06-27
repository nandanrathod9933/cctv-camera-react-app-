import React, { useState, useEffect } from 'react';

const BackToTop = () => {
    const [isHeaderActive, setIsHeaderActive] = useState(true);

    const handleScroll = () => {
        if (window.scrollY > 100) {
            setIsHeaderActive(false);
        } else {
            setIsHeaderActive(true);
        }
    };
   
    const hedenClik = () => {
        window.scrollTo({ top: 0, behavior: "smooth" }); /* Scroll to the top of the page */
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            {!isHeaderActive && <button onClick={hedenClik} className='btn btn-lg btn-primary  btn-lg-square rounded position-fixed bottom-0 end-0 mb-3 me-3' id="back_top"> <i className="fas fa-arrow-up"></i></button>}
        </div>
    );
};

export default BackToTop;