import './App.css';
import Provider from './components/Provider';
import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
   <Provider>
      <Header />
      <Body />
      <Footer />
    </Provider>
  );
}

export default App;
