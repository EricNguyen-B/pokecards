import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';

const BoosterPage = () => {
  return(
  <div>
    <h1>BOOSTER PAGE</h1>
  </div>
  );
}

const IndivdualPage = () => {
  return (
    <div>
      <h1>INDIVIDUAL CARDS PAGE</h1>
    </div>
  );
}

const WeeklyFeatured = () => {
  return (
    <div>
      <h1>WEEKLY FEATURED PAGE</h1>
    </div>
  );
}

const Collectibles = () => {
  return (
    <div>
      <h1>COLLECTIBLES</h1>
    </div>
  )
}

const StarterDecks = () => {
  return (
    <div>
      <h1>STARTER DECKS</h1>
    </div>
  )
}

function App() {
  return (
    <div>
      <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route  path="/boosters" element={<BoosterPage/>}/>
          <Route  path="/individual" element={<IndivdualPage/>}/>
          <Route path="/weekly" element={<WeeklyFeatured/>}/>
          <Route path="/collectibles" element={<Collectibles/>}/>
          <Route path="/starters" element={<StarterDecks/>}/>
      </Routes>
    </div>
  );
}

export default App;
