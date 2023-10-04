import React from 'react'
import './project.css'
import SQL from '../../assets/SQL.png'
import ORM from '../../assets/ORM.png'
import WeatherEvent from '../../assets/WeatherEvent.png'
import ClikdOn from '../../assets/ClikdOn.png'
import { BrowserRouter, Link } from 'react-router-dom';


const Projects = () => {
  return (
    <section id='projects'>
        <h2 className='projectsTitle'>My Projects</h2>
        <span className='projectsDescr'>Here are my projects I have developed during the course. More to come, soon!</span>
        <div className='projectImgs'>
        <BrowserRouter>
        <Link to="https://github.com/BanhMiMan/SocialNetworkAPI" target="_blank">
          <img src={SQL} alt='SocialNetworkAPI' className='projectsImg' />
        </Link>
        </BrowserRouter>

        <BrowserRouter>
        <Link to="https://github.com/BanhMiMan/E-CommerceBackend" target="_blank">
            <img src={ORM} alt='BackEndECommerce' className='projectsImg' />
        </Link>
        </BrowserRouter>
        <BrowserRouter><Link to="https://titan-mp.github.io/weather-event/" target="_blank">
            <img src={WeatherEvent} alt='GroupProject1' className='projectsImg' />
        </Link>
        </BrowserRouter>
        <BrowserRouter><Link to="https://github.com/dtm589/professional-social-media" target="_blank">
            <img src={ClikdOn} alt='GroupProject2' className='projectsImg' />
        </Link>
        </BrowserRouter>
        </div>
    </section>
  );
};

export default Projects;