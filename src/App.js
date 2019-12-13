import React from 'react';
import Header from './components/Header';
import Tourism from './components/Tourism';
import Services from './components/Services';
import './scss/App.scss';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Tourism />
      <Services />
    </div>
  );
}

export default App;
