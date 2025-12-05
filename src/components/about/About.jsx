import React from 'react';
import './about.css';
import Image from "../../assets/avatar-2.png";
import AboutBox from './AboutBox';
import Pdf from "../../assets/CV_Ella_Dossou_English.pdf";

const About = () => {

  return (
    <section className="about container section" id="about">
      <h2 className="section__tittle">About Me</h2>
      <div class="about__container grid">
        <img src={Image} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">My name is Ella DOSSOU, a computer engineer passionate about technology, with over five years of experience and a Bachelor's degree +1 in digital solutions development and design. Professional, rigorous, and results-oriented, I have completed several projects that reflect my technical expertise and creativity. Curious and determined, I am always ready to learn, take on new challenges, and actively contribute to the creation of innovative web solutions.</p>
            <a target="_blank" href="../../assets/CV_Ella_Dossou_English.pdf" download="CV_Ella_Dossou_English.pdf" class="btn">Download Resume</a>
          </div>

          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Full Stack Developer </h3>
                <span className="skills__number">89%</span>
              </div>

              <div className="skills_bar">
                <span className="skills__percentage full"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Back End Developper</h3>
                <span className="skills__number">87%</span>
              </div>

              <div className="skills_bar">
                <span className="skills__percentage backend"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Front End Developer</h3>
                <span className="skills__number">90%</span>
              </div>

              <div className="skills_bar">
                <span className="skills__percentage frontend"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">UI/UX Design</h3>
                <span className="skills__number">75%</span>
              </div>

              <div className="skills_bar">
                <span className="skills__percentage ui__design"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AboutBox />
    </section>
  )
}

export default About