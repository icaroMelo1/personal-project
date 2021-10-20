import React, { Component } from 'react'
import './style/Inicio.css';

class Projects extends Component {
  render() {
    return (
      <div className="template" >
        <div className="inside-skills">
          <h4>Tecnologias:</h4>
          <p>-CSS</p>
          <p>-JavaScript</p>
          <p>-HTML</p>
          <p>-RTL</p>
          <p>-Redux</p>
          <p>-React</p>
          <p>-ContextAPI</p>
          <p>-ReactHooks</p>
        </div>
        <div className="links">
          <a className="link" target="blank" href="https://github.com/tryber/sd-013-a-project-lessons-learned/pull/100">-Lessons Learned</a>
          <a className="link" target="blank" href="https://github.com/tryber/sd-013-a-project-playground-functions/pull/124">-Playground Functions</a>
          <a className="link" target="blank" href="https://github.com/tryber/sd-013-a-project-pixels-art/pull/135">-Pixel Art</a>
          <a className="link" target="blank" href="https://github.com/tryber/sd-013-a-project-todo-list/pull/67">-To do List</a>
          <a className="link" target="blank" href="https://github.com/tryber/sd-013-a-project-js-unit-tests/pull/131">-Unit Test</a>
          <a className="link" target="blank" href="https://github.com/tryber/sd-013-a-project-trybewarts/pull/137">-TrybeWarts</a>
          <a className="link" target="blank" href="https://github.com/tryber/sd-013-a-project-zoo-functions/pull/30">-Zoo Functions</a>
          <a className="link" target="blank" href="https://github.com/tryber/sd-013-a-project-shopping-cart/pull/86">-Shopping Cart</a>
          <a className="link" target="blank" href="https://github.com/tryber/sd-013-a-project-jest/pull/127">-Project Jest</a>
          <a className="link" target="blank" href="https://github.com/tryber/sd-013-a-project-movie-cards-library/pull/135">-Movie Cards Library</a>
          <a className="link" target="blank" href="https://github.com/tryber/sd-013-a-project-movie-cards-library-stateful/pull/45">-Movie Cards Stateful</a>
          <a className="link" target="blank" href="https://github.com/tryber/sd-013-a-project-movie-card-library-crud/pull/55" >-Movie Cards Crud</a>
          <a className="link" target="blank" href="https://github.com/tryber/sd-013-a-project-react-testing-library/pull/78">-React Testing Library</a>
          <a className="link" target="blank" href="https://github.com/tryber/sd-013-a-project-trybewallet/pull/93">-TrybeWallet</a>
          <a className="link" target="blank" href="https://github.com/tryber/sd-013-a-project-starwars-planets-search/pull/96">-Starwars Planet Search</a>
        </div>
    </div>
    )
  }
}

export default Projects;
