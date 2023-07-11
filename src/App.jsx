import React from 'react';
import Navbar from './components/Navbar';
import MealsContainer from './components/MealsContainer';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Details from './components/Details';
import Search from './components/Search';


const App = () => {
  return (

    <Routes>
      <Route path='/' element = {<Home/>}></Route>
      <Route path='*' element={<Home/>}></Route>
      <Route path='/details' element={<Details/>}></Route>
      <Route path='/search/:name' element={<Search/>}></Route>
    </Routes>
    
  )
}

export default App
