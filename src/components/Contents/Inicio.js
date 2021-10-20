import React, { Component } from 'react';
import './style/Inicio.css';

class Inicio extends Component {
  render() {
    return (
      <div className="template">
        <div className="inside-paragrafo">
          <p>
            - Tenho 20 anos, sou natural de Fortaleza-ce, sempre gostei muito de jogos e da tecnologia envolvida, hoje faço Eng.Mecatronica no IFCE e o curso da Trybe.
          </p>
          <p>
            - Já tive experiência com pizzaria e lanchonetes, mas ao conhecer o curso da Trybe, resolvi mudar de ramo.
          </p>
          <p>
            - Ao decorrer do meu desenvolvimento na Trybe, hoje tenho em meu curriculo Fundamentos para Desenvolvimento Web, além disso, certificado de curso em Front-End, aprendendo sobre React, Redux, ContextAPI, dentre outras Tecnologias já desenvolvidas.
          </p>
          <p>
            - No momento essa aplicação(este site) está sendo desenvolvida para receber todos os projetos que ja realizei durante minha jornada de aprendizagem, sendo atualizada constantemente.
          </p>
          <h5>
            - Qualquer duvida, por gentileza, entrar em contato comigo, os meios estarão disponiveis abaixo...
          </h5>
        </div>
      </div>
    )
  }
}

export default Inicio;
