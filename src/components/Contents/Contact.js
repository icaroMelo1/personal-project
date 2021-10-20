import React, { Component } from 'react';
import './style/Inicio.css';

class Contact extends Component {
  render() {
    return (
      <div className="template">
        <div>
          <h4>Contato:</h4>
          <p>Email: icarodmelof@gmail.com</p>
          <p>Linkedin: <a target="blank" href="https://www.linkedin.com/in/icaromelo/">Icaro Melo</a></p>
          <p>Instagram: <a target="blank" href="https://www.instagram.com/icarusdm/">@icarusdm</a></p>
          <p>Github: <a target="blank" href="https://github.com/icaroMelo1" >icaroMelo1</a></p>
        </div>
        <div>
          <h4>Projetos no ar:</h4>
          <a target="blank" href="https://icaromelo1.github.io/portfolio/">
            icaromelo1.github.io/portfolio
          </a>
        </div>
      </div>
    )
  }
}

export default Contact;
