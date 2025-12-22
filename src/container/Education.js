import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

export default function Education() {
  return (
    <>
      <div className="sectionContainer bg1">
        <section id="resume"></section>
        <center>
          <div className="title">
            <b>Resume</b> <div className="underline"></div>
            <a href={`${process.env.PUBLIC_URL}/Resume.pdf`} download>
              <button className="btn custom-btn hmp">
                <FontAwesomeIcon icon={faDownload} />
                Download Resume
              </button>
            </a>
          </div>
        </center>
        <div className="container">
          <div className="description">
            <h4>
              <b>
                <FontAwesomeIcon icon={faGraduationCap} /> Education
              </b>
            </h4>
            <div className="timeline">
              <div className="timeline-item">
                <span className="timeline-date">2023 - 2026</span>

                <h4>Bachelor of Computer Applications</h4>
                <h5>Symbiosis University</h5>

                <ul>
                  <li>Current CGPA: 8.6</li>
                  <li>
                    Awarded Merit Scholarship by SIU for academic excellence
                    (Top 4 GPA holders)
                  </li>
                  <li>
                    Actively participated in multiple hackathons and published
                    research in IEEE
                  </li>
                </ul>
              </div>
              <div className="timeline-item">
                <span className="timeline-date">2007–2023</span>

                <h4>Secondary School</h4>
                <h5>DPSG Faridabad</h5>

                <ul>
                  <li>Scored 90% in Class 12 (CBSE)</li>
                  <li>Scored 85% in Class 10 (CBSE)</li>
                  <li>
                    Received academic scholarship during school for outstanding
                    performance
                  </li>
                  <li>Served as Vice Captain of the school</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
