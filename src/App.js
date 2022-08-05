import React from 'react';
import './App.css';
import Deals from './components/Deals';
import Header from './components/Header';
import Highlights from './components/Highlights';
import Landing from './components/Landing';

function App() {
  return (
    <div className="app">
      <Header />
      <Landing />
      <Highlights />
      <Deals />
    </div>
  );
}

export default App;
