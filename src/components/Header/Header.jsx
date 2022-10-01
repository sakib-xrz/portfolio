import React from 'react'
import CTA from './CTA'
import "./Header.css"
import MyImg from "./../../assets/me.png"
import HeaderSocial from './HeaderSocial'

const Header = () => {
  return (
    <header id='header'>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Md Sakibul Islam</h1>
        <h5 className="text-light">Front-End Developer</h5>
        <CTA/>
        <HeaderSocial/>
        <div className="me">
          <img src={MyImg} alt="" />
        </div>

        <a className='scroll_down' href="#contact">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header