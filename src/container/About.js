import React from "react";
import "../style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleInfo,
  faGears,
  faHeart,
  faCode,
  faServer,
  faLaptopCode,
} from "@fortawesome/free-solid-svg-icons";

export default function About() {
  return (
    <>
      <section id="about"></section>
      <div className="sectionContainer bg1">
        <center>
          <div className="title">
            <b>About me</b>
            <div className="underline"></div>
          </div>
        </center>
        <div className="description">
          <h4>
            <b>Hi, I'm Suyash Batra</b> <br />
            <br />
            <p>
              A results-driven and detail-oriented individual with expertise in
              Web Development, and Game Development. Skilled in applying
              advanced programming techniques to build practical, user-focused
              solutions.
              <br />
              <br />
              <p>
                {" "}
                Proficient in Unity and front-end/back-end web technologies,
                with a strong track record of problem-solving and effective
                communication in collaborative environments.
              </p>
            </p>
          </h4>
        </div>
        <div className="parallelContainers">
          <div className="card mb-3">
            <div className="card-header">
              <FontAwesomeIcon icon={faCircleInfo} /> Personal Info
            </div>
            <div className="card-body">
              <p className="card-text">
                <ul>
                  <li>
                    <strong>Name:</strong> Suyash Batra
                  </li>
                  <li>
                    <strong>Age:</strong> 20 Years
                  </li>
                  <li>
                    <strong>Location:</strong> Pune, Maharashtra
                  </li>
                  <li>
                    <strong>Email:</strong> suyashbatra@gmail.com
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <div className="card mb-3">
            <div className="card-header">
              <FontAwesomeIcon icon={faHeart} /> Interests
            </div>
            <div className="card-body">
              <p className="card-text">
                <ul>
                  <li>Web Development</li>
                  <li>Game Development</li>
                  <li>Open Source</li>
                  <li>Artificial Intelligence</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
        <div className="description">
          <h4>
            <b>Skills and Technologies</b> <br />
            <br />
            <div className="parallelContainers">
              <div className="card mb-3">
                <div className="card-header">
                  <FontAwesomeIcon icon={faCode} /> Frontend
                </div>
                <div className="card-body">
                  <p className="card-text">
                    <button className="tabs">HTML5</button>
                    <button className="tabs">CSS</button>
                    <button className="tabs">JS</button>
                    <button className="tabs">React</button>
                    <button className="tabs">Bootstrap</button>
                    <button className="tabs">AWT/Swing</button>
                  </p>
                </div>
              </div>
              <div className="card mb-3">
                <div className="card-header">
                  <FontAwesomeIcon icon={faServer} /> Backend
                </div>
                <div className="card-body">
                  <p className="card-text">
                    <button className="tabs">PHP</button>
                    <button className="tabs">Python</button>
                    <button className="tabs">Java</button>
                    <button className="tabs">C#</button>
                    <button className="tabs">MySQL</button>
                    <button className="tabs">SQLite</button>
                  </p>
                </div>
              </div>
              <div className="card mb-3">
                <div className="card-header">
                  <FontAwesomeIcon icon={faGears} /> Software Dev
                </div>
                <div className="card-body">
                  <p className="card-text">
                    <button className="tabs">Android Studio</button>
                    <button className="tabs">Kotlin</button>
                    <button className="tabs">Unity</button>
                  </p>
                </div>
              </div>
              <div className="card mb-3">
                <div className="card-header">
                  <FontAwesomeIcon icon={faLaptopCode} /> Other
                </div>
                <div className="card-body">
                  <p className="card-text">
                    <button className="tabs">AWS EC2</button>
                    <button className="tabs">Git</button>
                    <button className="tabs">Scikit-learn</button>
                  </p>
                </div>
              </div>
            </div>
          </h4>
        </div>
      </div>
    </>
  );
}
