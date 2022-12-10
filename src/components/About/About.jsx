import React from "react";
import "./About.css";
import AboutImage from "./../../assets/me-about.jpg";
import { BiBriefcase } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { RiFolderSettingsLine } from "react-icons/ri";
import Timeline from "./Timeline";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="about_me"
        >
          <div className="about_me_image">
            <img src={AboutImage} alt="" />
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="about_content"
        >
          <div className="about_cards">
            <article className="about_card">
              <BiBriefcase className="about_icon" />
              <h5>Experience</h5>
              <small>1 Year</small>
            </article>
            <article className="about_card">
              <FiUsers className="about_icon" />
              <h5>Clients</h5>
              <small>10+ Worldwide</small>
            </article>
            <article className="about_card">
              <RiFolderSettingsLine className="about_icon" />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>

          <p>
            I'm a frontend-based full-stack developer from Bangladesh. I love
            web development because I can showcase my creativity in this work. I
            want to see myself as a skilled web developer with my hard work. I
            want to work with someone who can help me develop both my
            professional and personal abilities. Currently, I'm studying
            Computer Science and Engineering at Daffodil International
            University.
          </p>

          <a className="btn btn-primary" href="#contact">
            Let's Talk
          </a>
        </div>
      </div>
      <Timeline></Timeline>
    </section>
  );
};

export default About;
