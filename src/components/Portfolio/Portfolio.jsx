import React from "react";
import "./Portfolio.css";
import { FiGithub } from "react-icons/fi";
import { FiExternalLink } from "react-icons/fi";
import project1 from "./../../assets/project-1.png";
import project2 from "./../../assets/project-2.png";
import project3 from "./../../assets/project-3.png";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container project">
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="project__section"
        >
          <div className="project__left">
            <img className="project__img" src={project1} alt="color palette" />
          </div>
          <div className="project__right">
            <p className="project__headingTertiary">
              <small>Featured Project</small>
            </p>
            <a
              href="https://github.com/sakib-xrz/swap-deal-client "
              target="_blank"
              rel="noreferrer"
              className="project__headingSecondary"
            >
              <h2>Swap Deal</h2>
            </a>
            <div className="project__descriptionContainer">
              <p className="project__description">
                Swap Deal is a used product's resale website with a dedicated
                admin panel. User, Seller, and admin roles added with the Google
                authentication system. Buyer can see their order and pay, Seller
                can see their uploaded product and add a new product and admin
                can see all buyers, all sellers, and reported products.
              </p>
              <div className="project__tags">
                <small>
                  {" "}
                  React &nbsp; React Router &nbsp; Tailwind CSS &nbsp; Node.js
                  &nbsp; Express.js &nbsp; MongoDB &nbsp; Firebase
                </small>
              </div>
              <div className="project__icons">
                <a
                  href="https://github.com/sakib-xrz/swap-deal-client"
                  target="_blank"
                  rel="noreferrer"
                  style={{ marginRight: "1rem" }}
                >
                  <FiGithub className="icons" />
                </a>
                <a
                  href="https://swap-deal-bd.web.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiExternalLink className="icons" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="project__section middle"
        >
          <div className="project__right__middle">
            <p className="project__headingTertiary">
              <small>Featured Project</small>
            </p>
            <a
              href="https://github.com/sakib-xrz/service-review-client"
              target="_blank"
              rel="noreferrer"
              className="project__headingSecondary"
            >
              <h2>Pixel Pictures</h2>
            </a>
            <div className="project__descriptionContainer">
              <p className="project__description__middle">
                Service Website including add or remove services. Form to leave
                reviews for the clients to show on the details page. Option to
                add more services to all service page.
              </p>
              <div className="project__tags">
                <small>
                  {" "}
                  React &nbsp; React Router &nbsp; Tailwind CSS &nbsp; Node.js
                  &nbsp; Express.js &nbsp; MongoDB &nbsp; Firebase
                </small>
              </div>
              <div className="project__icons">
                <a
                  href="https://github.com/sakib-xrz/service-review-client"
                  target="_blank"
                  rel="noreferrer"
                  style={{ marginRight: "1rem" }}
                >
                  <FiGithub className="icons" />
                </a>
                <a
                  href="https://service-review-6ef0e.web.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiExternalLink className="icons" />
                </a>
              </div>
            </div>
          </div>
          <div className="project__left">
            <img className="project__img" src={project2} alt="color palette" />
          </div>
        </div>
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="project__section"
        >
          <div className="project__left">
            <img className="project__img" src={project3} alt="color palette" />
          </div>
          <div className="project__right">
            <p className="project__headingTertiary">
              <small>Featured Project</small>
            </p>
            <a
              href="https://github.com/sakib-xrz/code-easy-client"
              target="_blank"
              rel="noreferrer"
              className="project__headingSecondary"
            >
              <h2>Code Easy</h2>
            </a>
            <div className="project__descriptionContainer">
              <p className="project__description">
                E-learning Website for web developers. Log In method with
                private route feature. Option to download course details page as
                a pdf.
              </p>
              <div className="project__tags">
                <small>
                  {" "}
                  React &nbsp; React Router &nbsp; Tailwind CSS &nbsp; daisyUI
                  &nbsp; Firebase &nbsp; React to PDF Package
                </small>
              </div>
              <div className="project__icons">
                <a
                  href="https://github.com/sakib-xrz/code-easy-client"
                  target="_blank"
                  rel="noreferrer"
                  style={{ marginRight: "1rem" }}
                >
                  <FiGithub className="icons" />
                </a>
                <a
                  href="https://code-easy-client.web.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiExternalLink className="icons" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
