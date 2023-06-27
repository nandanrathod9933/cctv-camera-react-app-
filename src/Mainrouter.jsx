import React, { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import HomeCompo from "./Pages/Home.jsx";
import AboutCompo from "./Pages/About.jsx";
import ServiceCompo from "./Pages/ServiceCompo.jsx";
import PricingPlanCompo from "./Pages/PricingPlanCompo.jsx";
import ContactCompo from "./Pages/Contact.jsx";


const Router = createBrowserRouter([
    {
        path: "/",
        element: <> <HomeCompo /></>,
    },
    {
        path: "/about",
        element: <> <AboutCompo /></>,
    },
    {
        path: "/service",
        element: <> <ServiceCompo /></>,
    },
    {
        path: "/pricing",
        element: <> <PricingPlanCompo /></>,
    },

    {
        path: "/contact",
        element: <> <ContactCompo /></>,
    }
]);

export default Router;