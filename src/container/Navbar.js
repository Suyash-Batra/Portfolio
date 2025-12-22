import React from "react";
import "../style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");

    if (currentTheme === "light") {
      document.documentElement.removeAttribute("data-theme");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark custom-navbar">
        <div className="container">
          <a className="navbar-brand theme" href="#">
            Suyash Batra
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-underline theme">
              <li className="nav-item">
                <a className="nav-link theme theme" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link theme" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link theme" href="#projects">
                  Project
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link theme" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
            <a href="#resume">
              <button type="button" className="btn custom-btn">
                Resume
              </button>
            </a>
            <button className="mode" onClick={toggleTheme}>
              <FontAwesomeIcon icon={faCircleHalfStroke} />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
