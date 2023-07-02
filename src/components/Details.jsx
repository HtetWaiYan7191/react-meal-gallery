import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {MdKeyboardBackspace} from 'react-icons/md'

const Details = () => {
  const location = useLocation();
  const {meals} = location.state?.meal; 
  const meal = meals[0];
 const navigate = useNavigate();

  return (
    <div>
        <div className="back-icon pt-4 ps-4"><MdKeyboardBackspace className='text-3xl' onClick={() => navigate(-1)}/> </div>
       <div className="card-container flex">
            <figure className=' w-96 mx-auto flex-5/12'>
                <img src={meal.strMealThumb} className=' object-cover' alt="hello" />
                <figcaption className='text-3xl text-center'>{meal.strMeal}</figcaption>
            </figure>
        <div className="instructions-container flex-1">
            <h1 className='text-2xl font-semi-bold text-center'>Instructions</h1>
            <p className='w-[80%] mx-auto'>{meal.strInstructions}</p>
            <div className="video-link w-[80%] mx-auto flex justify-around">
                <span>{meal.strTags ? meal.strTags : "None"}</span>
                <a href={meal.strYoutube}>Youtube</a>
            </div>
        </div>
       </div>
      
     
      
    </div>
  );
};

export default Details;
