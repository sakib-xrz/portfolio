import React from "react";
import "./Nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { FaLaptopCode } from "react-icons/fa";
import { BsReverseLayoutTextSidebarReverse } from "react-icons/bs";
import { BiMessageSquareDetail } from "react-icons/bi";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <NavLink to="/">
        <AiOutlineHome />
      </NavLink>
      <NavLink to="/about">
        <AiOutlineUser />
      </NavLink>
      <NavLink to="/projects">
        <FaLaptopCode />
      </NavLink>
      <NavLink to="/blog">
        <BsReverseLayoutTextSidebarReverse />
      </NavLink>
      <NavLink to="/contact">
        <BiMessageSquareDetail />
      </NavLink>
    </nav>
  );
};

export default Nav;
