import React from "react";
import "../style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <>
      <section id="home" class="intro">
        <div class="container">
          <div class="intro-content">
            <h1>
              Hi, I'm <span class="highlight">Suyash Batra</span>
            </h1>
            <h2>Student</h2>
            <p>Turning code into seamless user experiences.</p>
            <div class="buttons">
              <a href="#contact">
                <button class="cbtn custom-btn hmp"> Get in Touch</button>
              </a>
              <a href="#projects">
                <button class="cbtn custom-btn-2 hmp">View My Work</button>
              </a>
            </div>
          </div>
          <div class="scroll-down">
            <a href="#about">
              <FontAwesomeIcon icon={faCircleChevronDown} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
