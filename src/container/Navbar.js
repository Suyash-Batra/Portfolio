import React, { useEffect, useState } from "react";
import "../style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");

    if (currentTheme === "light") {
      document.documentElement.removeAttribute("data-theme");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const onScroll = () => {
      let current = "home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          current = section.getAttribute("id");
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark custom-navbar fixed-top">
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
                <a
                  className={`nav-link theme ${
                    activeSection === "home" ? "active" : ""
                  }`}
                  href="#home"
                >
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a
                  className={`nav-link theme ${
                    activeSection === "about" ? "active" : ""
                  }`}
                  href="#about"
                >
                  About
                </a>
              </li>

              <li className="nav-item">
                <a
                  className={`nav-link theme ${
                    activeSection === "projects" ? "active" : ""
                  }`}
                  href="#projects"
                >
                  Project
                </a>
              </li>

              <li className="nav-item">
                <a
                  className={`nav-link theme ${
                    activeSection === "contact" ? "active" : ""
                  }`}
                  href="#contact"
                >
                  Contact
                </a>
              </li>
            </ul>

            <a href="#resume">
              <button
                type="button"
                className={`btn ${
                  activeSection === "resume" ? "active-btn" : "custom-btn"
                }`}
              >
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
