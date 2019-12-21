import React from 'react';
import Header from './components/Header';
import Tourism from './components/Tourism';
import Services from './components/Services';
import Packages from './components/Packages';
import Contact from './components/Contact';
import './scss/App.scss';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Tourism />
      <Services />
      <Packages />
      <Contact />
    </div>
  );
}

export default App;
