import React, { useContext } from 'react';
import img from './images/right-arrow.png';
import './style/Body.css';
import Context from './services/Context';
import Inicio from './Contents/Inicio';
import Contact from './Contents/Contact';
import Projects from './Contents/Projects';
import About from './Contents/About';

const about = '.about';
const home = '.home';
const contact = '.contact';
const projects = '.projects';

function BodyPage() {
  const { Body, setBody } = useContext(Context);

  function renderWithState() {
    if(Body === home) {
      return (<Inicio />)
    }
    if(Body === contact) {
      return (<Contact />)
    }
    if(Body === projects) {
      return (<Projects />)
    }
    if(Body === about) {
      return (<About />)
    }
  }

  function nextPart() {
    if(Body === home) {
      setBody(about)
    }
    if(Body === about) {
      setBody(contact)
    }
    if(Body === contact) {
      setBody(projects)
    }
    if(Body === projects) {
      setBody(home)
    }
  }

  function lastPart() {
    if(Body === home) {
      setBody(projects)
    }
    if(Body === about) {
      setBody(home)
    }
    if(Body === contact) {
      setBody(about)
    }
    if(Body === projects) {
      setBody(contact)
    }
  }
  

  return (
    <div className="body">
        <button
          className="changebutton"
          onClick={ () => lastPart() }
        >
         <img alt='voltar' src={img} className="back-btt"/>
        </button>
      <div className="midbody">
        <div className="insidemidbody">
          { renderWithState() }
        </div>
      </div>
        <button
          className="changebutton"
          onClick={ () => nextPart() }
        >
          <img alt='frente' src={img} className="front-btt"/>
        </button>
    </div>
  )
}

export default BodyPage;
