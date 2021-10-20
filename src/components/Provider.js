import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './services/Context';

function Provider({ children }) {
  const [Body, setBody] = useState('.home');
  
  return (
    <Context.Provider value={ {
      Body,
      setBody
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
