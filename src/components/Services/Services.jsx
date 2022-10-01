import React from 'react'
import "./Services.css"
import { HiCode } from "react-icons/hi"
import { MdOutlineDevices } from "react-icons/md";
import { BsCurrencyDollar } from "react-icons/bs";

const Services = () => {
  return (
    <section id="service">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container service_container">
        <div className="service_cards">
          <div className="service_card">
            <HiCode className="card-icons" />
            <div className="card-content">
              <h3>Web Development</h3>
              <p className="text-light">
                I will make a clean, unique, and professional-looking website.
                My design must be responsive on all devices, pixel perfect and
                clean coding. I hope, I can help you to make an awesome website
                for your business.
              </p>
            </div>
          </div>
          <div className="service_card">
            <MdOutlineDevices className="card-icons" />
            <div className="card-content">
              <h3>Responsive Design</h3>
              <p className="text-light">
                I will provide you with excellent web design services. Your
                website will be loaded first and it will show perfectly on every
                device. I believe in providing the best experience, the best
                designs, and the best results.
              </p>
            </div>
          </div>
          <div className="service_card">
            <BsCurrencyDollar className="card-icons" />
            <div className="card-content">
              <h3>Reasonable Cost</h3>
              <p className="text-light">
                I work closely with my clients on each project to create not
                only an amazing design that will help the business grow but to
                create a long-term relationship of trust and caring.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services