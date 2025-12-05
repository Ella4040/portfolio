import React from 'react';
import "./home.css";
import Me from '../../assets/avatar-1.png';
import HeaderSocials from './HeaderSocials';



const Home = () => {
  return (
    <section className='home container' id='home'>
      <div className='intro'>
        <img src={Me} alt='' className='home__img' />
        <h1 className='home__name'>DOSSOU Ella</h1>
        <span className="home__education">I'm a software engineer</span>
      
        <HeaderSocials />
        <a href="#contact" className="btn">Contact Me</a>

      </div>
    </section>
  )
}

export default Home