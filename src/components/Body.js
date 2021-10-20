import React, { useContext } from 'react';
import './style/Body.css';
import Context from './services/Context';
import Menu from './Menu';
import Inicio from './Contents/Inicio';
import Contact from './Contents/Contact';
import Projects from './Contents/Projects';
import About from './Contents/About';

function BodyPage() {
  const { Body } = useContext(Context)
  function renderWithState() {
    if(Body === '.home') {
      return ( <Inicio />)
    }
    if(Body === '.contact') {
      return ( <Contact />)
    }
    if(Body === '.projects') {
      return ( <Projects />)
    }
    if(Body === '.about') {
      return ( <About />)
    }
  }

  return (
    <div className="body">
      <Menu />
      <div className="midbody">
        <button>Tras</button>
        { renderWithState() }
        <button>Frente</button>
      </div>
    </div>
  )
}

export default BodyPage;
