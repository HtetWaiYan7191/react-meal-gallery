import React from 'react';
import MealDetail from './MealDetail';

const MealCard = ({meals}) => {
    return (
        <>
          {meals.map((meal, id) => {
            return <div key={id} className=' relative'>
                <figure className=''>
                    <img src={meal.strMealThumb} alt="" className=' w-full object-cover' />
                    <figcaption>{meal.strMeal}</figcaption>
                </figure>
                <MealDetail/>
            </div>;
          })}
         
        </>
      );
      
}

export default MealCard
