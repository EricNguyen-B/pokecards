import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../src/assets/crown.svg';


import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';

function App() {
  return (
    <div className="App">
       <Link className='logo-container' to="/">
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/shop'>CONTACT</Link>
        </div>
      <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route  path="/shop" element={<ShopPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
