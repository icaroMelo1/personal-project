import React from 'react';
import './style/Body.css';
import Menu from './Menu';
import Inicio from './Contents/Inicio';
import Contact from './Contents/Contact';
import Projects from './Contents/Projects';
import About from './Contents/About';

function Body() {
  return (
    <div className="body">
      <Menu />
      <div className="midbody">
        <button>Tras</button>
        <Inicio />
        <About />
        <Contact />
        <Projects/>
        <button>Frente</button>
      </div>
    </div>
  )
}

export default Body;
