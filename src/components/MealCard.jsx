import React from 'react';
import MealDetail from './MealDetail';
import '../style.css';

const MealCard = ({meals}) => {
    return (
        <>
          {meals.map((meal, id) => {
            return <div key={id} className=' relative meal-card'>
                <figure className=''>
                    <img src={meal.strMealThumb} alt="" className=' w-full object-cover' />
                    <figcaption>{meal.strMeal}</figcaption>
                </figure>
                <MealDetail meal={meal}/>
            </div>;
          })}
         
        </>
      );
      
}

export default MealCard
