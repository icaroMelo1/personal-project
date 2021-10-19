import React, { useState } from 'react';
import './style/Menu.css';

function Menu() {
  const [Body, setBody] = useState('Inicio');

  
  function midBody() {
    const home = document.querySelector('.home').innerHTML;
    const about = document.querySelector('.about').innerHTML;
    const contact = document.querySelector('.contact').innerHTML;
    const project = document.querySelector('.projects').innerHTML;
    if (Body !== project) {
      setBody(project)
    } 
    if (Body !== about) {
      setBody(about)
    }
    if (Body !== contact) {
      setBody(contact);
    } 
    if (Body !== home) {
      setBody(home);
    }
  }

  return (
    <div>
      <div className="menu">
        <button
          onClick={ midBody }
          className="home"
        >
          Inicio
        </button>

        <button
          onClick={ midBody }
          className="about"
        >
          Sobre
        </button>

        <button
          onClick={ midBody }
          className="contact"
        >
          Contato
        </button>

        <button
          onClick={ midBody }
          className="projects"
        >
          Projetos
        </button>
      </div>
    </div>
  )

}

export default Menu;
