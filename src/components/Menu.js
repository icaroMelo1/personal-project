import React, { Component } from 'react'
import './style/Menu.css';

export class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <button>
          <h4 className="home">
            Inicio
          </h4>
        </button>
        <button>
          <h4 className="about">
            Sobre
          </h4>
        </button>
        <button>
          <h4 className="contact">
            Contato
          </h4>
        </button>
        <button>
          <h4 className="projects">
            Projetos
          </h4>
        </button>
      </div>
    )
  }
}

export default Menu
