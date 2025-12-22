import React from "react";
import "../style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <>
      <section id="home" className="intro">
        <div className="container">
          <div className="intro-content">
            <h1>
              Hi, I'm <span className="highlight">Suyash Batra</span>
            </h1>
            <h2>Student</h2>
            <p>Turning code into seamless user experiences.</p>
            <div className="buttons">
              <a href="#contact">
                <button className="cbtn custom-btn hmp"> Get in Touch</button>
              </a>
              <a href="#projects">
                <button className="cbtn custom-btn-2 hmp">View My Work</button>
              </a>
            </div>
          </div>
          <div className="scroll-down">
            <a href="#about">
              <FontAwesomeIcon icon={faCircleChevronDown} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
