import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faGithub,
  faLinkedin,
  faItchIo,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <>
      <div className="sectionContainer bg1">
        <div className="footer-content">
          <div className="footer-logo">
            <a href="#home">Suyash Batra</a>
          </div>

          <nav className="footer-nav">
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#resume">Resume</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>

          <div className="footer-social">
            <a
              href="https://github.com/Suyash-Batra"
              target="_blank"
              title="GitHub"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://www.linkedin.com/in/suyashbatra/"
              target="_blank"
              title="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://suyash-batra.itch.io/"
              target="_blank"
              title="ItchIo"
            >
              <FontAwesomeIcon icon={faItchIo} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
