import React from "react";
import { useLoaderData } from "react-router-dom";
import "./Portfolio.css";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const ProjectDetails = () => {
  const projectDetails = useLoaderData();
  const {
    projectName,
    img,
    description,
    liveLink,
    clientLink,
    serverLink,
    details,
    screenshots,
  } = projectDetails;
  console.log(projectDetails);
  return (
    <section data-aos="fade-up" data-aos-duration="1500" id="portfolio-details">
      <h5>My Recent Work</h5>
      <h2>{projectName}</h2>
      <PhotoProvider>
        <div className="project-details-header">
          <div>
            <Carousel className="image-slide">
              {screenshots.map((ss, i) => (
                <div className="image-div" key={i}>
                  <img src={ss} alt="" />
                </div>
              ))}
            </Carousel>
            <div className="links">
              <a
                target={"_blank"}
                rel="noreferrer"
                className="btn"
                href={clientLink}
              >
                Client Side Code
              </a>
              <a
                target={"_blank"}
                rel="noreferrer"
                className="btn"
                href={serverLink}
              >
                Server Side Code
              </a>
              <a
                target={"_blank"}
                rel="noreferrer"
                className="btn"
                href={liveLink}
              >
                Live Website Link
              </a>
            </div>
          </div>
          <div className="project-detail-content">
            <p>{description}</p>
            {details.map((d, i) => (
              <li className="list-style" key={i}>
                {d}
              </li>
            ))}
          </div>
        </div>
      </PhotoProvider>
    </section>
  );
};

export default ProjectDetails;
