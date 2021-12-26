import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';

const BoosterPage = (props) => {
  return(
  <div>
    <Link to='/'>home</Link>
    <h1>BOOSTER PAGE</h1>
  </div>
  );
}




function App() {
  return (
    <div>
      <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route  path="/boosters" element={<BoosterPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
