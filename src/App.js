// import { BrowserRouter } from 'react-router-dom';
import React, { Component } from 'react';
import './App.css';
import Provider from './components/Provider';
import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';


export class App extends Component {
  render() {
    return (
      <div>
        {/* <BrowserRouter basename={process.env.PUBLIC_URL}> */}
        <Provider>
            <Header />
            <Body />
            <Footer />
          </Provider>
        {/* </BrowserRouter> */}
      </div>
    )
  }
}

export default App;
