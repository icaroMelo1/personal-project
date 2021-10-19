import React, { Component } from 'react';
import './style/Body.css';
import Inicio from './Contents/Inicio';
import Menu from './Menu';

export class Body extends Component {
  render() {
    return (
      <div className="body">
        <Menu />
        <Inicio />
        <div className="gambiarra">
          gambiarra
        </div>
      </div>
    )
  }
}

export default Body
