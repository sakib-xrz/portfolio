import React from "react";
import "./Portfolio.css";
import { FiGithub } from "react-icons/fi";
import { FiExternalLink } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const Portfolio = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("https://portfolio-server-sigma.vercel.app/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  return (
    <section data-aos="fade-up" data-aos-duration="1500" id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <PhotoProvider>
        <div className="container portfolio_container project">
          {projects.map((project) => (
            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              key={project?.id}
              className="box"
            >
              <div className="content">
                <div className="project-name">
                  <PhotoView src={project?.img}>
                    <img src={project?.img} alt="" />
                  </PhotoView>
                </div>
                <div className="text-content">
                  <div className="heading-content">
                    <h2>{project?.projectName}</h2>
                    <p>{project?.description.slice(0, 70)}. . .</p>
                  </div>
                  <div className="buttons">
                    <div>
                      <Link to={project?.id}>Read More</Link>
                    </div>
                    <div>
                      <a
                        target={"_blank"}
                        rel="noreferrer"
                        href={project?.clientLink}
                      >
                        <FiGithub />
                      </a>
                      <a
                        target={"_blank"}
                        rel="noreferrer"
                        href={project?.liveLink}
                        className="live"
                      >
                        <FiExternalLink />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </PhotoProvider>
      <div className="all-project-button">
        <a
          className="btn btn-primary"
          href="https://github.com/sakib-xrz?tab=repositories"
          target={"_blank"}
          rel="noreferrer"
        >
          See All Projects
        </a>
      </div>
    </section>
  );
};

export default Portfolio;
