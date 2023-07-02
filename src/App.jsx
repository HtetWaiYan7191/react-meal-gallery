import React from 'react';
import Navbar from './components/Navbar';
import MealsContainer from './components/MealsContainer';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';


const App = () => {
  return (

    <Routes>
      <Route path='/' element = {<Home/>}></Route>
      <Route path='*' element={<Home/>}></Route>
    </Routes>
    
  )
}

export default App
