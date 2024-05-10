import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "flowbite/dist/flowbite.phoenix.js";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navigation from './components/Navigation';
import Splash from './routes/Splash';
import About from './routes/About';
import Project from './routes/Project';
import Contact from './routes/Contact';

// create the router -- paths are configured here
const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigation>
        <Splash></Splash>
    </Navigation>
  },
  {
    path: "/about",
    element: <Navigation>
        <About></About>
    </Navigation>
  },
  {
    path: "/projects",
    element: <Navigation>
        <Project></Project>
    </Navigation>
  },
  {
    path: "/contact",
    element: <Navigation>
        <Contact></Contact>
    </Navigation>
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
// make the router the default component
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);