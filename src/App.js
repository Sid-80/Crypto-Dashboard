import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router'; 
import AnimatedRoute from './components/AnimatedRoute';


function App() {
  return (
    <>
    <Navbar />
    <AnimatedRoute />
    </>
  );
}

export default App;
