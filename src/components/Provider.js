import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './services/Context';

function Provider({ children }) {
  const [Body, setBody] = useState('.home');
  const [hideMenu, sethideMenu] = useState('yes')

  return (
    <Context.Provider value={ {
      Body,
      setBody,
      hideMenu,
      sethideMenu
    } }
    >
      { children }
    </Context.Provider>
  )
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
