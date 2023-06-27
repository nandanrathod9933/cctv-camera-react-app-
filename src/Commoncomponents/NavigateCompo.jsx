import React from 'react';
import { Link } from 'react-router-dom';

const NavigateCompo = ({ pagename, homepage, currentpage, linkhref }) => {
    return (
        <>
            <div className="container-fluid bg-primary p-5 hero-header mb-5">
                <div className="row py-5">
                    <div className="col-12 text-center">
                        <h1 className="display-1 text-white animated zoomIn">{pagename}</h1>
                        <Link to="/" className="h4 text-white">{homepage}</Link>
                        <i className="far fa-circle text-white px-2"></i>
                        <Link to={linkhref} className="h4 text-white">{currentpage}</Link >
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavigateCompo;