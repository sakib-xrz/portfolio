import React from 'react'
import "./Header.css"
import CV from "./../../assets/sakibul-islam-resume.pdf"
import { Link } from 'react-router-dom';


const CTA = () => {
  return (
    <>
      <div className="cta">
        <a className="btn" href={CV} download>
          Download Resume
        </a>
        <Link className="btn btn-primary" to="/contact">
          Let's Talk
        </Link>
      </div>
    </>
  );
}

export default CTA