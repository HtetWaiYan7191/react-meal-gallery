import React from 'react';
import Navbar from './Navbar';
import MealsContainer from './MealsContainer';

const Home = () => {
  return (
    <div className=' bg-pink-300'>
      <Navbar></Navbar>
      <MealsContainer></MealsContainer>
    </div>
  )
}

export default Home
