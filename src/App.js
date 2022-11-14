import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router'; 
import AnimatedRoute from './components/AnimatedRoute';
import Home from './components/Home';
import { NavLink } from "react-router-dom";


function App() {
  return (
    <>
    <Navbar />
    <div className='appMain'>
      <div>
          <div>
          <NavLink className="nav_link" to="/">Trending</NavLink>
          </div>
      </div>
      <div>
        <NavLink className="nav_link" to="/search">Search</NavLink>
      </div>
    </div>
    <AnimatedRoute />
    </>
  );
}

export default App;
