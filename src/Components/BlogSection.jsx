import React from 'react';
import BlogItem from './BlogItem.jsx'
const BlogSection = () => {
    return (
        <>
            <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container">
                    <div className="text-center mx-auto mb-5" style={{ maxWidth: "600px" }}>
                        <h5 className="text-primary text-uppercase" style={{ letterSpacing: "5px" }}>Blog Post</h5>
                        <h1 className="display-5 mb-0">Latest Articles From Our Blog Post</h1>
                    </div>
                    <div className="row g-5">
                        <div className="col-lg-6 wow slideInUp" data-wow-delay="0.3s">
                            <BlogItem imgsrc="/img/blog-1.jpg" />
                        </div>
                        <div className="col-lg-6 wow slideInUp" data-wow-delay="0.6s">
                            <BlogItem imgsrc="/img/blog-2.jpg" />

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogSection;