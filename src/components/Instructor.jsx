import React from "react";
import "../styles/Instructor.css";
import instructorImage from "../assets/profile.jpg";

const Instructor = () => {
  return (
    <div className="instructor-page">
      <div className="instructor-card">
        <div className="instructor-image">
          <img src={instructorImage} alt="Instructor" />
        </div>
        <div className="instructor-info">
          <h1>Anurag Sharma</h1>
          <h4>CSE'28 - NIT SILCHAR</h4>
          <p>
            Hi, I’m Anurag Sharma — a MERN stack developer fueled by a passion
            for building powerful web applications and sharing knowledge. With
            hands-on experience in JavaScript, React, Node.js, Express, and
            MongoDB, I love to create scalable, high-performance
            websites. I’m equally enthusiastic about learning and improving myself.
            Let's build and learn together.💗
          </p>
          <div className="social-links">
            <a
              href="https://github.com/techy-geek"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/anurag-sharma-nits/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/anu__rag.sharma/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
