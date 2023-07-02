import React, { useEffect, useState } from 'react'
import '../style.css';
import { useNavigate } from 'react-router-dom';

const MealDetail = ({meal}) => {

    useEffect (() => {
        fetchDetails();
    },[])

    const fetchDetails = async () => {
        const api = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`);
        const data = await api.json();
        console.log(data)
         meal = data;
    }
    const navigate = useNavigate();

    const goDetailPage = (e) => {
        e.preventDefault();
        navigate('/details',{state:{meal:meal}});
    }
  return (
    <div className='absolute top-0 left-0 w-full bg-red-50/40 h-full flex justify-center align-middle items-center backgrop-filte card-layout'>
      <div className="detail-container">
        <button className=' border rounded-lg bg-red-400 py-2 px-5' onClick={goDetailPage}>Details</button>
      </div>
    </div>
  )
}

export default MealDetail