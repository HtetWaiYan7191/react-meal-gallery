import React from 'react';
import MealDetail from './MealDetail';
import '../style.css';

const MealCard = ({meals}) => {
    return (
        <>
          {meals.map((meal, id) => {
            return <div key={id} className=' relative meal-card rounded-xl bg-pink-200 overflow-hidden '>
                <figure className=''>
                    <img src={meal.strMealThumb} alt="" className=' w-full object-cover' />
                    <figcaption className='py-5 px-2 text-2xl font-lightbold font-mono'>{meal.strMeal}</figcaption>
                </figure>
                <MealDetail meal={meal}/>
            </div>;
          })}
         
        </>
      );
      
}

export default MealCard
