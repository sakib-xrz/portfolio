import React from 'react'
import Header from "./components/Header/Header"
import Nav from "./components/Nav/Nav"
import About from "./components/About/About"
import Experience from "./components/Experience/Experience"
import Services from "./components/Services/Services"
import Portfolio from "./components/Portfolio/Portfolio"
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer"
import "animate.css";
import "./app.css";

const App = () => {
  return (
    <div className='portfolio-body'>
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Portfolio/>
      <Services/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App