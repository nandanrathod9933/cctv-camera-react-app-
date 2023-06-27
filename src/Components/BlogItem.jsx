import React from 'react';

const BlogItem = ({ imgsrc }) => {
    return (
        <>
            <div className="blog-item">
                <div className="position-relative">
                    <img className="img-fluid w-100 rounded-top" src={imgsrc} alt="" />
                    <div className="blog-date">
                        <h5 className="text-white fw-bold mb-0">01</h5>
                        <h6 className="text-light mb-0">January</h6>
                    </div>
                </div>
                <div className="bg-primary rounded-bottom p-5">
                    <div className="d-flex mb-3">
                        <span className="text-light text-uppercase">Admin</span>
                        <span className="text-light px-2">|</span>
                        <span className="text-light text-uppercase">Web Design</span>
                    </div>
                    <a className="h3 m-0 text-white" href="">Kasd dolor lorem sit justo rebum stet justo elitr dolor
                        amet sit</a>
                </div>
            </div>
        </>
    );
};

export default BlogItem;