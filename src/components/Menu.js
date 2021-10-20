import React, { useContext } from 'react';
import Context from './services/Context';
import './style/Menu.css';

function Menu() {
  const { setBody } = useContext(Context);

  return (
    <div className="menu">
      <button
        onClick={ () => setBody('.home') }
        className="home"
      >
        Inicio
      </button>

      <button
        onClick={ () => setBody('.about') }
        className="about"
      >
        Sobre
      </button>

      <button
        onClick={ () => setBody('.contact') }
        className="contact"
      >
        Contato
      </button>

      <button
        onClick={ () => setBody('.projects') }
        className="projects"
      >
        Projetos
      </button>
    </div>
  )

}

export default Menu;
