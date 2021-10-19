import React, { Component } from 'react'
import './style/Header.css';

export class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="image">
          image 
        </div>
        <div  className="myName">
          <h1>
            Icaro Melo
          </h1>
        </div>
        <div className="anythingForComplete">
          Anything
        </div>
      </div>
    )
  }
}

export default Header
