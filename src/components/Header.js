import React, { useContext } from 'react'
import Menu from './Menu';
import Context from './services/Context';
import './style/Header.css';

function Header() {
  const { hideMenu, sethideMenu } = useContext(Context);

  function hideMenuByState() {
    if(hideMenu === 'yes') {
      sethideMenu('no')
    } else {
      sethideMenu('yes')
    }
  }

  function returnMenu() {
    if(hideMenu === 'no') {
      return <Menu />
    }
  }

  return (
    <>
      <div className="header">
        <div className="image">
          image 
        </div>
        <div  className="myName">
          <h1>
            Icaro Melo
          </h1>
        </div>
        <button
          onClick={ () => hideMenuByState() }
        >
          Opções
        </button>
      </div>
      { returnMenu() }
    </>
  )
}

export default Header;
