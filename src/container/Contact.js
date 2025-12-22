import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faPhone,
  faEnvelope,
  faLocationDot,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

import {
  faGithub,
  faLinkedin,
  faItchIo,
} from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  return (
    <>
      <div className="sectionContainer bg2">
        <section id="contact"></section>
        <center>
          <div className="title">
            <b>Get in Touch</b>
            <div className="underline"></div>
            <p className="hmp">
              Have a project in mind or want to discuss a potential
              collaboration? Feel free to reach out!
            </p>
          </div>
        </center>
        <div className="parallelContainers">
          <div className="contact-info">
            <div className="contact-card">
              <h3>Contact Information</h3>
              <p>Feel free to reach out through any of these channels</p>

              <div className="contact-details">
                <div className="contact-item">
                  <i className="fas fa-envelope"></i>
                  <div>
                    <h4>
                      <b>
                        <FontAwesomeIcon icon={faEnvelope} /> Email
                      </b>
                    </h4>
                    <a href="mailto:suyashbatra@gmail.com">
                      suyashbatra@gmail.com
                    </a>
                  </div>
                </div>

                <div className="contact-item">
                  <i className="fas fa-phone"></i>
                  <div>
                    <h4>
                      <b>
                        <FontAwesomeIcon icon={faPhone} /> Phone
                      </b>
                    </h4>
                    <a href="tel:+917678624133">+91 7678624133</a>
                  </div>
                </div>

                <div className="contact-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <div>
                    <h4>
                      <b>
                        <FontAwesomeIcon icon={faLocationDot} /> Location
                      </b>
                    </h4>
                    <p>Pune, Maharashtra</p>
                  </div>
                </div>
              </div>

              <div className="social-links">
                <h4>
                  <b>Connect with me</b>
                </h4>
                <div className="social-icons">
                  <a
                    href="https://github.com/Suyash-Batra"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="GitHub"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/suyashbatra/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="LinkedIn"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                  <a
                    href="https://suyash-batra.itch.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Twitter"
                  >
                    <FontAwesomeIcon icon={faItchIo} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <div className="contact-card">
              <h3>Send a Message</h3>
              <p>
                Fill out the form below and I'll get back to you as soon as
                possible
              </p>

              <form action="https://formspree.io/f/mzdpjoqz" method="POST">
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" name="name" required />
                </div>

                <div className="form-group">
                  <label>Email</label>
                  <input type="email" name="email" required />
                </div>

                <div className="form-group">
                  <label>Message</label>
                  <textarea name="message" rows="5" required></textarea>
                </div>

                <button type="submit" className="btn custom-btn hmp">
                  <FontAwesomeIcon icon={faPaperPlane} /> Send Message
                </button>
              </form>

              <div id="form-message" className="form-message"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
