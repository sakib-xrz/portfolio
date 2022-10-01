import React from 'react'
import "./Header.css"
import {FaLinkedin} from "react-icons/fa"
import {FaGithubSquare} from "react-icons/fa"
import {FaFacebookSquare} from "react-icons/fa"


const HeaderSocial = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/sakib-xrz/" target="_blank" rel="noopener noreferrer"><FaLinkedin/></a>
        <a href="https://github.com/sakib-xrz" target="_blank" rel="noopener noreferrer"><FaGithubSquare/></a>
        <a href="https://www.facebook.com/itsonlysakib" target="_blank" rel="noopener noreferrer"><FaFacebookSquare/></a>
    </div>
  )
}

export default HeaderSocial