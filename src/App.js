import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Provider from './components/Provider';
import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Provider>
          <Header />
          <Body />
          <Footer />
        </Provider>
    </BrowserRouter>
  );
}

export default App;
