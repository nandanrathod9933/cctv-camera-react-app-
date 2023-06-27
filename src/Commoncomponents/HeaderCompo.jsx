// import React, { useState } from 'react';

// const HeaderCompo = () => {
//     const [showBasic, setShowBasic] = useState(false);


//     return (
//         <>
//             <nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm py-3 py-lg-0 px-3 px-lg-0">
//                 <a href="index.html" className="navbar-brand ms-lg-5">
//                     <h1 className="display-5 m-0 text-primary">Safe<span className="text-danger">Cam</span></h1>
//                 </a>
//                 <button className="navbar-toggler collapsed" onClick={() => setShowBasic(!showBasic)} type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
//                     <span className="navbar-toggler-icon"></span>
//                 </button>
//                 <div className="collapse navbar-collapse show" id="navbarCollapse">
//                     <div className="navbar-nav ms-auto py-0">
//                         <a href="index.html" className="nav-item nav-link active">Home</a>
//                         <a href="about.html" className="nav-item nav-link">About</a>
//                         <a href="service.html" className="nav-item nav-link">Service</a>
//                         <div className="nav-item dropdown">
//                             <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
//                             <div className="dropdown-menu m-0">
//                                 <a href="price.html" className="dropdown-item">Pricing Plan</a>
//                                 <a href="blog.html" className="dropdown-item">Blog Grid</a>
//                                 <a href="detail.html" className="dropdown-item">Blog Detail</a>
//                                 <a href="team.html" className="dropdown-item">The Team</a>
//                                 <a href="testimonial.html" className="dropdown-item">Testimonial</a>
//                             </div>
//                         </div>
//                         <a href="contact.html" className="nav-item nav-link">Contact</a>
//                         <a href="tel:+123456789" className="nav-item nav-link nav-contact bg-danger  text-white px-5 ms-lg-5"><i className="bi bi-telephone-outbound me-2"></i>+123 456 789</a>
//                     </div>
//                 </div>
//             </nav>
//         </>
//     );
// };

// export default HeaderCompo;

// import React, { useState } from 'react';
// import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdb-react-ui-kit';

// const HeaderCompo = () => {
//     const [showBasic, setShowBasic] = useState(false);

//     return (
//         <Navbar expand='lg' bg='white' className='shadow-sm py-3 py-lg-0 px-3 px-lg-0'>
//             <NavbarBrand href='index.html' className='ms-lg-5'>
//                 <h1 className='display-5 m-0 text-primary'>
//                     Safe<span className='text-danger'>Cam</span>
//                 </h1>
//             </NavbarBrand>
//             <NavbarToggler collapsed onClick={() => setShowBasic(!showBasic)} type='button' data-target='#navbarCollapse'>
//                 <span className='navbar-toggler-icon' />
//             </NavbarToggler>
//             <Collapse show={showBasic} navbar id='navbarCollapse'>
//                 <Nav className='navbar-nav ms-auto py-0'>
//                     <NavItem>
//                         <NavLink href='index.html' active>
//                             Home
//                         </NavLink>
//                     </NavItem>
//                     <NavItem>
//                         <NavLink href='about.html'>About</NavLink>
//                     </NavItem>
//                     <NavItem>
//                         <NavLink href='service.html'>Service</NavLink>
//                     </NavItem>
//                     <Dropdown>
//                         <DropdownToggle tag='a' className='nav-link dropdown-toggle' caret>
//                             Pages
//                         </DropdownToggle>
//                         <DropdownMenu>
//                             <DropdownItem href='price.html'>Pricing Plan</DropdownItem>
//                             <DropdownItem href='blog.html'>Blog Grid</DropdownItem>
//                             <DropdownItem href='detail.html'>Blog Detail</DropdownItem>
//                             <DropdownItem href='team.html'>The Team</DropdownItem>
//                             <DropdownItem href='testimonial.html'>Testimonial</DropdownItem>
//                         </DropdownMenu>
//                     </Dropdown>
//                     <NavItem>
//                         <NavLink href='contact.html'>Contact</NavLink>
//                     </NavItem>
//                     <NavItem>
//                         <NavLink href='tel:+123456789' className='nav-contact bg-danger text-white px-5 ms-lg-5'>
//                             <i className='bi bi-telephone-outbound me-2' />
//                             +123 456 789
//                         </NavLink>
//                     </NavItem>
//                 </Nav>
//             </Collapse>
//         </Navbar>
//     );
// };

// export default HeaderCompo;


// import React, { useState } from 'react';
// import {
//     MDBContainer,
//     MDBNavbar,
//     MDBNavbarBrand,
//     MDBNavbarToggler,
//     MDBIcon,
//     MDBNavbarNav,
//     MDBNavbarItem,
//     MDBNavbarLink,
//     MDBBtn,
//     MDBDropdown,
//     MDBDropdownToggle,
//     MDBDropdownMenu,
//     MDBDropdownItem,
//     MDBCollapse,
// } from 'mdb-react-ui-kit';
// import { Link } from 'react-router-dom';

// const HeaderCompo = () => {
//     const [showBasic, setShowBasic] = useState(false);

//     return (
//         <MDBNavbar expand='lg' bg='white' className='shadow-sm py-3 py-lg-0 px-3 px-lg-0'>
//             <MDBContainer fluid>
//                 <MDBNavbarBrand href='index.html' className='ms-lg-5'>
//                     <h1 className='display-5 m-0 text-primary'>
//                         Safe<span className='text-danger'>Cam</span>
//                     </h1>
//                 </MDBNavbarBrand>
//                 <MDBNavbarToggler
//                     collapsed
//                     onClick={() => setShowBasic(!showBasic)}
//                     type='button'
//                     data-target='#navbarCollapse'
//                 >
//                     <span className='navbar-toggler-icon' />
//                 </MDBNavbarToggler>
//                 <MDBCollapse show={showBasic} navbar id='navbarCollapse'>
//                     <MDBNavbarNav className='navbar-nav ms-auto py-0'>
//                         <MDBNavbarItem>
//                             <MDBNavbarLink href='index.html' active>
//                                 Home
//                             </MDBNavbarLink>
//                         </MDBNavbarItem>
//                         <MDBNavbarItem>
//                             <MDBNavbarLink href='about.html'>About</MDBNavbarLink>
//                         </MDBNavbarItem>
//                         <MDBNavbarItem>
//                             <MDBNavbarLink href='service.html'>Service</MDBNavbarLink>
//                         </MDBNavbarItem>
//                         <MDBDropdown>
//                             <MDBDropdownToggle tag='a' className='nav-link dropdown-toggle' caret>
//                                 Pages
//                             </MDBDropdownToggle>
//                             <MDBDropdownMenu>
//                                 <MDBDropdownItem href='price.html'>Pricing Plan</MDBDropdownItem>
//                                 <MDBDropdownItem href='blog.html'>Blog Grid</MDBDropdownItem>
//                                 <MDBDropdownItem href='detail.html'>Blog Detail</MDBDropdownItem>
//                                 <MDBDropdownItem href='team.html'>The Team</MDBDropdownItem>
//                                 <MDBDropdownItem href='testimonial.html'>Testimonial</MDBDropdownItem>
//                             </MDBDropdownMenu>
//                         </MDBDropdown>
//                         <MDBNavbarItem>
//                             <MDBNavbarLink href='contact.html'>Contact</MDBNavbarLink>
//                         </MDBNavbarItem>
//                         <MDBNavbarItem>
//                             <MDBNavbarLink href='tel:+123456789' className='nav-contact bg-danger text-white px-5 ms-lg-5'>
//                                 <MDBIcon className='bi bi-telephone-outbound me-2' />
//                                 +123 456 789
//                             </MDBNavbarLink>
//                         </MDBNavbarItem>
//                     </MDBNavbarNav>
//                 </MDBCollapse>
//             </MDBContainer>
//         </MDBNavbar>
//     );
// };

// export default HeaderCompo;

import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import $ from 'jquery';



const HeaderCompo = () => {
    const [showBasic, setShowBasic] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 40) {
                $('.navbar').addClass('sticky-top');
            } else {
                $('.navbar').removeClass('sticky-top');
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <>
            <nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm py-3 py-lg-0 px-3 px-lg-0">
                <Link to="/" className="navbar-brand ms-lg-5">
                    <h1 className="display-5 m-0 text-primary">Safe<span className="text-danger">Cam</span></h1>
                </Link>
                <button className="navbar-toggler collapsed btn" onClick={() => setShowBasic(!showBasic)} type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded={showBasic}>
                    <i className='fa fa-bars'></i>
                    {/* <span className="navbar-toggler-icon"></span> */}
                </button>
                <div className={`collapse navbar-collapse ${showBasic ? 'show' : ''}`} id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0">
                        <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-item  nav-link active_link' : 'nav-item  nav-link')}>
                            Home
                        </NavLink>

                        {/* <Link to="/" className="nav-item nav-link ">Home</Link> */}
                        <NavLink to="/about" className="nav-item nav-link">About</NavLink>
                        <NavLink to="/service" className="nav-item nav-link">Service</NavLink>
                        <NavLink to="/pricing" className="nav-item nav-link">Pricing Plan</NavLink>
                        {/* <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                            <div className="dropdown-menu m-0">
                                <a href="price.html" className="dropdown-item">Pricing Plan</a>
                                <a href="blog.html" className="dropdown-item">Blog Grid</a>
                                <a href="detail.html" className="dropdown-item">Blog Detail</a>
                                <a href="team.html" className="dropdown-item">The Team</a>
                                <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                            </div>
                        </div> */}
                        <NavLink to="/contact" className="nav-item nav-link">Contact</NavLink>
                        <Link to="tel:+123456789" className="nav-item nav-link nav-contact bg-danger  text-white px-5 ms-lg-5">
                            <i className="fa-solid fa-phone-volume"></i> &nbsp; +123 456 789</Link>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default HeaderCompo;

