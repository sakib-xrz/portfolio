import React from "react";
import CTA from "./CTA";
import "./Header.css";
import MyImg from "./../../assets/me.png";
import HeaderSocial from "./HeaderSocial";
import { AiOutlineDoubleRight } from "react-icons/ai";

const Header = () => {
  return (
    <header id="header">
      <div className="container heder-content header_container">
        <div className="animate__animated animate__slideInDown">
          <div className="me">
            <img src={MyImg} alt="" />
          </div>
          <h5>Hello I'm</h5>
          <h1>Md Sakibul Islam</h1>
          <h5 className="text-light">Front-End Developer</h5>
          <CTA />
        </div>
        <HeaderSocial />

        <a className="scroll_down" href="#contact">
          Scroll Down <AiOutlineDoubleRight className="bounce" />
        </a>
      </div>
    </header>
  );
};

export default Header;
