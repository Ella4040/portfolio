import React from 'react'

const AboutBox = () => {
  return (
    <div className="about__boxes grid">
        <div className="about__box">
            <i className="about__icon icon-fire"></i>

            <div>
                <h3 className="about__title">Experience</h3>
                <span className="about__subtitle">3+ Years Working</span>
            </div>
        </div>

        <div className="about__box">
            <i className="about__icon icon-people"></i>

            <div>
                <h3 className="about__title">Satisfied clients</h3>
                <span className="about__subtitle">7+ in the world</span>
            </div>
        </div>

        <div className="about__box">
            <i className="about__icon icon-cup"></i>

            <div>
                <h3 className="about__title">Projects</h3>
                <span className="about__subtitle">6+ Completed</span>
            </div>
        </div>
    </div>
  )
}

export default AboutBox