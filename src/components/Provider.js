import React from 'react';
import Context from './services/Context';

export default function Provider({ children }) {
    return (
      <Context.Provider>
        { children }
      </Context.Provider>
    )

}
