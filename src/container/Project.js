import React from "react";
import "../style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Project() {
  return (
    <>
      <div className="sectionContainer bg2">
        <section id="projects"></section>
        <center>
          <div className="title">
            <b>My Projects</b>
            <div className="underline"></div>
          </div>
        </center>
        <div className="parallelContainers">
          <div className="project-card" data-category="web">
            <div className="project-img">
              <img
                src={`${process.env.PUBLIC_URL}/images/ecomm.jpg`}
                alt="E-commerce Platform"
              />
            </div>
            <div className="project-content">
              <h3>E-commerce Platform</h3>
              <p>
                A E-commerce Platform with Login & Add to Cart functionalities.
              </p>
              <div className="project-tags">
                <span>Website</span>
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>PHP</span>
                <span>MySQL</span>
              </div>
              <div className="project-links">
                <a
                  href="https://github.com/Suyash-Batra/SymbiZone/"
                  target="_blank"
                >
                  <button className="btn custom-btn" data-id="project1">
                    View
                  </button>
                </a>
                <div className="icon-links">
                  <a
                    href="https://github.com"
                    target="_blank"
                    title="Source Code"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="project-card" data-category="web">
            <div className="project-img">
              <img
                src={`${process.env.PUBLIC_URL}/images/Exp.jpg`}
                alt="Expense Tracker"
              />
            </div>
            <div className="project-content">
              <h3>Expense Tracker</h3>
              <p>Expense Tracker with Visual Graphs and Excel</p>
              <div className="project-tags">
                <span>Website</span>
                <span>HTML</span>
                <span>CSS</span>
                <span>Composer</span>
                <span>PHP</span>
                <span>Python</span>
              </div>
              <div className="project-links">
                <a
                  href="https://github.com/Suyash-Batra/BudgetEase"
                  target="_blank"
                >
                  <button className="btn custom-btn" data-id="project2">
                    View
                  </button>
                </a>
                <div className="icon-links">
                  <a
                    href="https://github.com"
                    target="_blank"
                    title="Source Code"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="project-card" data-category="mobile">
            <div className="project-img">
              <img
                src={`${process.env.PUBLIC_URL}/images/icon.jpg`}
                alt="StreetRunner Game"
              />
            </div>
            <div className="project-content">
              <h3>StreetRunner</h3>
              <p>A 3D Endless Runner Game Prototype</p>
              <div className="project-tags">
                <span>Game Dev</span>
                <span>Unity</span>
                <span>3D</span>
                <span>C#</span>
              </div>
              <div className="project-links">
                <a href="https://suyash-batra.itch.io/" target="_blank">
                  <button className="btn custom-btn" data-id="project4">
                    View
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="project-card" data-category="mobile">
            <div className="project-img">
              <img
                src={`${process.env.PUBLIC_URL}/images/icon.png`}
                alt="Ashborn Game"
              />
            </div>
            <div className="project-content">
              <h3>Ashborn</h3>
              <p>A 2D RPG Game</p>
              <div className="project-tags">
                <span>Game Dev</span>
                <span>Unity</span>
                <span>2D</span>
                <span>C#</span>
              </div>
              <div className="project-links">
                <a
                  href="https://play.unity.com/en/games/d39f9fe8-d3ae-4ecf-9e37-e5032a33f850/ashborn"
                  target="_blank"
                >
                  <button className="btn custom-btn" data-id="project5">
                    Play
                  </button>
                </a>
                <div className="icon-links">
                  <a
                    href="https://suyash-batra.itch.io/ashborn"
                    target="_blank"
                    title="Download"
                  >
                    <FontAwesomeIcon icon={faDownload} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
