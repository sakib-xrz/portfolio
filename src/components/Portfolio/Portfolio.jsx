import React from "react";
import "./Portfolio.css";
import { FiGithub } from "react-icons/fi";
import { FiExternalLink } from "react-icons/fi";
import project1 from "./../../assets/project-1.png";
import project2 from "./../../assets/project-2.png";
import project3 from "./../../assets/project-3.png";
import { Link } from "react-router-dom";

const projects = [
  {
    projectID: "01",
    projectName: "Swap Deal",
    img: project1,
    description:
      "Swap Deal is a used product's resale website with a dedicated admin panel. User, Seller, and admin roles added with the Google authentication system. Buyer can see their order and pay, Seller can see their uploaded product and add a new product and admin can see all buyers, all sellers, and reported products.",
    liveLink: "https://swap-deal-bd.web.app/",
    clientLink: "https://github.com/sakib-xrz/swap-deal-client",
    serverLink: "https://github.com/sakib-xrz/swap-deal-server",
    details: [
      "⚫️ A complete website with dedicated admin panel also google login feature",

      "⚫️ There is a dashboard to manage admin panel and services.",

      "⚫️ Used React-Router Advance Concepts And Protected Routes.",

      "⚫️ Used Firebase For Authentication.",

      "⚫️ You can Login with Google.",

      "⚫️ Used Environment Variables To Hide Some Secret Data.",

      "⚫️ Used Tailwind CSS Framework.",

      "⚫️ Used React Icons for show icons.",

      "⚫️ Used React-To-Pdf Package to generate and download PDF.",
    ],
    screenshot1: "",
    screenshot2: "",
    screenshot3: "",
  },
  {
    projectID: "02",
    projectName: "Swap Deal",
    img: project2,
    description:
      "Swap Deal is a used product's resale website with a dedicated admin panel. User, Seller, and admin roles added with the Google authentication system. Buyer can see their order and pay, Seller can see their uploaded product and add a new product and admin can see all buyers, all sellers, and reported products.",
    liveLink: "https://swap-deal-bd.web.app/",
    clientLink: "https://github.com/sakib-xrz/swap-deal-client",
    serverLink: "https://github.com/sakib-xrz/swap-deal-server",
    details: [
      "⚫️ A complete website with dedicated admin panel also google login feature",

      "⚫️ There is a dashboard to manage admin panel and services.",

      "⚫️ Used React-Router Advance Concepts And Protected Routes.",

      "⚫️ Used Firebase For Authentication.",

      "⚫️ You can Login with Google.",

      "⚫️ Used Environment Variables To Hide Some Secret Data.",

      "⚫️ Used Tailwind CSS Framework.",

      "⚫️ Used React Icons for show icons.",

      "⚫️ Used React-To-Pdf Package to generate and download PDF.",
    ],
    screenshot1: "",
    screenshot2: "",
    screenshot3: "",
  },
  {
    projectID: "03",
    projectName: "Swap Deal",
    img: project3,
    description:
      "Swap Deal is a used product's resale website with a dedicated admin panel. User, Seller, and admin roles added with the Google authentication system. Buyer can see their order and pay, Seller can see their uploaded product and add a new product and admin can see all buyers, all sellers, and reported products.",
    liveLink: "https://swap-deal-bd.web.app/",
    clientLink: "https://github.com/sakib-xrz/swap-deal-client",
    serverLink: "https://github.com/sakib-xrz/swap-deal-server",
    details: [
      "⚫️ A complete website with dedicated admin panel also google login feature",

      "⚫️ There is a dashboard to manage admin panel and services.",

      "⚫️ Used React-Router Advance Concepts And Protected Routes.",

      "⚫️ Used Firebase For Authentication.",

      "⚫️ You can Login with Google.",

      "⚫️ Used Environment Variables To Hide Some Secret Data.",

      "⚫️ Used Tailwind CSS Framework.",

      "⚫️ Used React Icons for show icons.",

      "⚫️ Used React-To-Pdf Package to generate and download PDF.",
    ],
    screenshot1: "",
    screenshot2: "",
    screenshot3: "",
  },
];

const Portfolio = () => {
  return (
    <section data-aos="fade-up" data-aos-duration="1500" id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container project">
        {projects.map((project) => (
          <div
            data-aos="fade-up"
            data-aos-duration="1500"
            key={project?.projectID}
            class="box"
          >
            <div class="content">
              <img src={project?.img} alt="" />
              <div className="text-content">
                <div className="heading-content">
                  <h2>{project?.projectName}</h2>
                  <p>{project?.description.slice(0, 65)}. . .</p>
                </div>
                <div className="buttons">
                  <div>
                    <Link to={project.projectID}>Read More</Link>
                  </div>
                  <div>
                    <a href={project?.clientLink}>
                      <FiGithub />
                    </a>
                    <a href={project?.liveLink} className="live">
                      <FiExternalLink />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="all-project-button">
        <a className="btn btn-primary" href="#contact">
          See All Projects
        </a>
      </div>
    </section>
  );
};

export default Portfolio;
