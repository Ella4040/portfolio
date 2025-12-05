import React from 'react';
import './resume.css';

const Resume = () => {
  return (
    <section className="resume container section" id="resume">
      <h2 className="section__title">Graduate</h2>

      <div className="resume__container">

        {/* MASTER */}
        <div className="timeline">
          <div className="education__container">
            <span className="years__education">Mar. 2025 - Dec. 2026</span>
            <h3 className="title__education">Software Engineer</h3>
            <h4 className="institut__education">UNCHK Senegal</h4>
            <p className="description__education">
              During my Master's degree, I developed strong skills in project management,
              collaborative work, and team coordination. I learned to apply professional methods such as
              planning, task allocation, progress monitoring, and the use of collaborative tools to
              optimize communication and ensure project success.
              One of the most significant projects I developed was a book management application,
              which allowed me to put my web development skills into practice while applying a complete
              project management approach: needs analysis, functional specification, design,
              development, testing, and deployment.
            </p>
          </div>
        </div>

        {/* BACHELOR */}
        <div className="timeline">
          <div className="education__container">
            <span className="years__education">Oct. 2023 - Jun. 2025</span>
            <h3 className="title__education">Bachelor's Degree</h3>
            <h4 className="institut__education">IPNET Institute of Technology of Togo</h4>
            <p className="description__education">
              During my training, I learned to collaborate effectively within a team and
              participate in projects of various sizes. To improve coordination, I used several
              online collaborative tools. One significant project I completed was developing a
              patient records management application for a health center. This experience strengthened
              my web development skills while integrating functional requirements and user needs.
            </p>
          </div>
        </div>

        {/* HOLBERTON */}
        <div className="timeline">
          <div className="education__container">
            <span className="years__education">2023 - 2024</span>
            <h3 className="title__education">Software Engineer</h3>
            <h4 className="institut__education">Holberton School</h4>
            <p className="description__education">
              The ALX Holberton Software Engineering Program is an intensive and rigorous 12-month
              curriculum in computer software engineering. During this training, I developed strong
              technical and transversal skills through projects, teamwork, and real-world challenges.
            </p>
          </div>
        </div>

      </div>
    </section>

  );
};

export default Resume;

