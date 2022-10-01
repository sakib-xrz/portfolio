import React from 'react'
import "./Footer.css"
import { AiFillFacebook } from "react-icons/ai";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      
      <ul className="permalinks">
        <li>
          <a href="#header">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#timeline">Education</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer_social">
        <a
          href="https://www.facebook.com/itsonlysakib"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillFacebook />
        </a>
        <a
          href="https://twitter.com/SakibXrz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitterSquare />
        </a>
        <a
          href="https://www.instagram.com/ig.sakib_xrz/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagramSquare />
        </a>
      </div>

      <div className="footer_copyright">
        <small> &copy; Md Sakibul Islam. All right reserved.</small>
      </div>
    </footer>
  );
}

export default Footer