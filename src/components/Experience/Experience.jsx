import React from "react";
import "./Experience.css";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { FaBootstrap } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiVisualstudiocode } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import { SiAdobephotoshop } from "react-icons/si";
import { IoLogoCodepen } from "react-icons/io";
import { FiFigma } from "react-icons/fi";
import { SiNetlify } from "react-icons/si";

const Experience = () => {
  return (
    <>
      <section data-aos="fade-up" data-aos-duration="1500" id="experience">
        <h5>What Skills I Have</h5>
        <h2>My Expertise</h2>

        <div className="container experience_container">
          <div
            data-aos="fade-up"
            data-aos-duration="1500"
            className="experience_frontend"
          >
            <h3>Frontend Development</h3>
            <div className="experience_content">
              <article className="experience_details">
                <AiFillHtml5 className="experience-icons" />
                <div>
                  <h4>HTML</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience_details">
                <DiCss3 className="experience-icons" />
                <div>
                  <h4>CSS</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience_details">
                <IoLogoJavascript className="experience-icons" />
                <div>
                  <h4>JavaScript</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
              <article className="experience_details">
                <FaBootstrap className="experience-icons" />
                <div>
                  <h4>Bootstrap</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience_details">
                <SiTailwindcss className="experience-icons" />
                <div>
                  <h4>Tailwind</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
              <article className="experience_details">
                <FaReact className="experience-icons" />
                <div>
                  <h4>React</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="1500"
            className="experience_tools"
          >
            <div className="experience_frontend">
              <h3>Systems & Tools</h3>
              <div className="experience_content">
                <article className="experience_details">
                  <SiVisualstudiocode className="experience-icons" />
                  <div>
                    <h4>VS Code</h4>
                    <small className="text-light">Intermediate</small>
                  </div>
                </article>
                <article className="experience_details">
                  <AiFillGithub className="experience-icons" />
                  <div>
                    <h4>GitHub</h4>
                    <small className="text-light">Intermediate</small>
                  </div>
                </article>
                <article className="experience_details">
                  <SiNetlify className="experience-icons" />
                  <div>
                    <h4>Netlify</h4>
                    <small className="text-light">Intermediate</small>
                  </div>
                </article>
                <article className="experience_details">
                  <IoLogoCodepen className="experience-icons" />
                  <div>
                    <h4>Codepen</h4>
                    <small className="text-light">Experienced</small>
                  </div>
                </article>
                <article className="experience_details">
                  <SiAdobephotoshop className="experience-icons" />
                  <div>
                    <h4>Photoshop</h4>
                    <small className="text-light">Basic</small>
                  </div>
                </article>
                <article className="experience_details">
                  <FiFigma className="experience-icons" />
                  <div>
                    <h4>Figma</h4>
                    <small className="text-light">Intermediate</small>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
