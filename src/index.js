import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fontsource/jost/500.css";
import "@fontsource/open-sans"
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './index.css';
import './Assets/css/animation.css';
import './Assets/css/animationmain.css';
import MainRouter from './Mainrouter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={MainRouter} />
)
