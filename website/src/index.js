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
import ProjectDetails from './components/ProjectDetails';
import transaction from "./images/transactions.png"
// TODO: Get images for remaining projects

const AboutPages = {
  "CurrentSee": {
    title: "CurrentSee",
    description: 
    "Built over the course of about six weeks,five others and I went to work on creating a personal finance tracking app. I served as the group leader for this project and ensured that features were being built on time and properly implemented. I also built out most of the skeleton and structure for this project by utilizing tools such as figma to map out the layout of this app. I learned a tremendous amount about how to be a positive leader and leave an impact within a team of multiple developers and throughouly enjoyed building this app.",
    link: "https://jolly-hill-0543a4310.5.azurestaticapps.net/",
    images: [transaction],
  },
  "AndDone": {
    title: "AndDone",
    description: "As described this app was supposed to serve as the bridge between tech management and life management. Working within a small team we completed this project within about six weeks all while learning the tech stack on the go. This was my first full fledged web application and we were given a massive congratulations during our tech demo which I headed.",
    link: "https://github.com/johnstongrant/andDone",
    images: [transaction],
  },
  "Tracks": {
    title: "Tracks",
    description: "A streamlined todo list app that served as my personal playground in react. I was learning out to use react to make a single page web application and this todo list was borne from trial and error and experimentation.",
    link: "https://orange-field-0891ce80f.5.azurestaticapps.net/",
    images: [transaction],
  },
  "Class Scraper": {
    title: "Class Scraper",
    description: "After graduation I was left with a multitude of canvas pages with really valuable information that I knew one day would go away. Because of this I spent some time building a web scraper to quickly fetch a couple of my course's webpages and turned them into markdown files so that if I ever needed to refresh my knowledge the informaiton would be one click away.",
    link: "https://github.com/johnstongrant/web-scraper-canvas",
    images: [transaction],
  },
  "The Maze": {
    title: "The Maze",
    description: "My first real deep dive into algorithms. Learning BFS and DFS is in every coders catalog, but I loved working with algorithms and java specifically that during my Junior year in college I decided to TA for this course. During that time I got to reflect on my previous projects and learn how to be a better coder by teaching others about the power of these algorithms.",
    link: "",
    images: [transaction],
  },
  "Swish Terminal": {
    title: "Swish Terminal",
    description: "Diving into OS was a big step for my developer career and this is a project I am fairly proud of. Learning about piping and child processes was one thing, its a whole other thing to then transform my knowledge into a working terminal! This was a lot of fun to create and got to work alongside a colleague who became on of my best friends. Great experience.",
    link: "",
    images: [transaction],
  },
  "Drone Simulation": {
    title: "Drone Simulation",
    description: "A last horray if you will. This was one of my upper divison projects that we spend the entire semester brainstorming and working on the development cycle of computing. In the end I learned what it means to work within an Agile development process and collaborate with others within the field of computer science.",
    link: "",
    images: [transaction],
  }
}

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
  {
    path: "/CurrentSee",
    element: <Navigation>
      <ProjectDetails
      title={AboutPages["CurrentSee"].title}
      about={AboutPages["CurrentSee"].description}
      link={AboutPages["CurrentSee"].link}
      images={AboutPages["CurrentSee"].images}></ProjectDetails>
    </Navigation>
  },
  {
    path: "/AndDone",
    element: <Navigation>
      <ProjectDetails
      title={AboutPages["AndDone"].title}
      about={AboutPages["AndDone"].description}
      link={AboutPages["AndDone"].link}
      images={AboutPages["AndDone"].images}></ProjectDetails>
    </Navigation>
  },
  {
    path: "/Tracks",
    element: <Navigation>
      <ProjectDetails
      title={AboutPages["Tracks"].title}
      about={AboutPages["Tracks"].description}
      link={AboutPages["Tracks"].link}
      images={AboutPages["Tracks"].images}></ProjectDetails>
    </Navigation>
  },
  {
    path: "/The Maze",
    element: <Navigation>
      <ProjectDetails
      title={AboutPages["The Maze"].title}
      about={AboutPages["The Maze"].description}
      link={AboutPages["The Maze"].link}
      images={AboutPages["The Maze"].images}></ProjectDetails>
    </Navigation>
  },
  {
    path: "/Class Scraper",
    element: <Navigation>
      <ProjectDetails
      title={AboutPages["Class Scraper"].title}
      about={AboutPages["Class Scraper"].description}
      link={AboutPages["Class Scraper"].link}
      images={AboutPages["Class Scraper"].images}></ProjectDetails>
    </Navigation>
  },
  {
    path: "/Swish Terminal",
    element: <Navigation>
      <ProjectDetails
      title={AboutPages["Swish Terminal"].title}
      about={AboutPages["Swish Terminal"].description}
      link={AboutPages["Swish Terminal"].link}
      images={AboutPages["Swish Terminal"].images}></ProjectDetails>
    </Navigation>
  },
  {
    path: "/Drone Simulation",
    element: <Navigation>
      <ProjectDetails
      title={AboutPages["Drone Simulation"].title}
      about={AboutPages["Drone Simulation"].description}
      link={AboutPages["Drone Simulation"].link}
      images={AboutPages["Drone Simulation"].images}></ProjectDetails>
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