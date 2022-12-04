import React from 'react'
import "./Header.css"
import CV from "./../../assets/sakibul-islam-resume.pdf"

const CTA = () => {
  return (
    <div className='cta'>
        <a className='btn' href={CV} download>Download Resume</a>
        <a className='btn btn-primary' href="#contact">Let's Talk</a>
    </div>
  )
}

export default CTA