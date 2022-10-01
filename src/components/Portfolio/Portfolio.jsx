import React from "react";
import "./Portfolio.css";
import demo1 from "./../../assets/portfolio1.jpg";
import demo2 from "./../../assets/portfolio2.jpg";
import demo3 from "./../../assets/portfolio3.jpg";
import demo4 from "./../../assets/portfolio4.jpg";
import demo5 from "./../../assets/portfolio5.jpg";
import demo6 from "./../../assets/portfolio6.jpg";

const projects = [
  {
    id: 1,
    img: demo1,
    title: "Build Your Dream Team",
    demo: "https://build-dream-team.netlify.app/",
  },
  {
    id: 2,
    img: demo2,
    title: "Check Your Typing Skill",
    demo: "https://speed-booster.netlify.app/",
  },
  {
    id: 3,
    img: demo3,
    title: "Let's Find Your Phone",
    demo: "https://sakib-xrz.github.io/phone-hunter-api/",
  },
  {
    id: 4,
    img: demo4,
    title: "Commit To Be Fit",
    demo: "https://fit-factory-react.netlify.app/",
  },
  {
    id: 5,
    img: demo5,
    title: "Explore All Latest News",
    demo: "https://news-era.netlify.app/",
  },
  {
    id: 6,
    img: demo6,
    title: "See Today's Weather",
    demo: "https://sakib-xrz.github.io/weather-app/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {
          projects.map(({id,img,title,demo}) => {
            return (
              <article key={id} className="portfolio_item">
                <div className="portfolio_item_image">
                  <img src={img} alt="" />
                </div>
                <h3>{title}</h3>
                <div className="demo_button">
                  <a
                    className="btn"
                    href={demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </article>
            );
          })
        }
      </div>
    </section>
  );
};

export default Portfolio;
