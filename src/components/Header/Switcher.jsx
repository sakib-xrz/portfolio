import React, { useState } from "react";
import "./Header.css";
import { BsFillSunFill } from "react-icons/bs";
import {BsFillMoonFill} from "react-icons/bs"

const Switcher = () => {
  const [isDark, setIsDark] = useState(false);
  const handSwitcher = () => {
    if (isDark) {
      document.querySelector("body").classList.add("dark");
      document.querySelector("body").classList.remove("light");
      setIsDark(false);
    } else {
      document.querySelector("body").classList.add("light");
      document.querySelector("body").classList.remove("dark");
      setIsDark(true);
    }
  };

  return (
    <label className={`theme-switcher-label d-flex  ${isDark ? "active" : ""}`}>
      <input
        type="checkbox"
        onClick={handSwitcher}
        className="theme-switcher"
      />
      <div className="switch-handle">
        <span className="light-text">
          <BsFillSunFill className="filter_1" />
        </span>
        <span className="dark-text">
          <BsFillMoonFill className="filter_2" aria-hidden="true" />
        </span>
      </div>
    </label>
  );
};

export default Switcher;
