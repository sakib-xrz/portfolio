import React from "react";
import CTA from "./CTA";
import "./Header.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import MyImg from "./../../assets/me.png";
import HeaderSocial from "./HeaderSocial";
import { Link } from "react-router-dom";

const Header = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  return (
    <header id="header">
      <div className="container heder-content header_container">
        <div className="header-content animate__animated animate__slideInDown">
          <div className="me">
            <img src={MyImg} alt="" />
          </div>
          <h5>Hello I'm</h5>
          <h1>Md Sakibul Islam</h1>
          <h5 className="text-light">Front-End Developer</h5>
          <CTA />
          <div className="mobile-social-icon">
            <a
              className="first"
              href="https://www.linkedin.com/in/sakib08/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/sakib-xrz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithubSquare />
            </a>
            <a
              className="last"
              href="https://www.facebook.com/itsonlysakib"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookSquare />
            </a>
          </div>
        </div>
        <HeaderSocial />

        <Link className="scroll_down" to="/contact">
          Let's Talk
        </Link>
      </div>
    </header>
  );
};

export default Header;
