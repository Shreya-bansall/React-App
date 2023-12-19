import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Carousel from './components/Carousel/Carousel';

const App = () => {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <Carousel />

      </main>
    </div>
  );
};

export default App;
