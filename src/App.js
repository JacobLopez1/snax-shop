import React from 'react';
import './App.css';
import BestSelling from './components/BestSelling';
import BrandLibrary from './components/BrandLibrary';
import DayDeals from './components/DayDeals';
import Deals from './components/Deals';
import Header from './components/Header';
import Highlights from './components/Highlights';
import Landing from './components/Landing';
import Products from './components/Products';

function App() {
  return (
    <div className="app">
      <Header />
      <Landing />
      <Highlights />
      <Deals />
      <Products />
      <DayDeals />
      <BestSelling />
      <BrandLibrary />
    </div>
  );
}

export default App;
