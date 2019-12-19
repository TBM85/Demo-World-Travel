import React from 'react';
import Header from './components/Header';
import Tourism from './components/Tourism';
import Services from './components/Services';
import Packages from './components/Packages';
import './scss/App.scss';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Tourism />
      <Services />
      <Packages />
    </div>
  );
}

export default App;
