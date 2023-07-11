import React, { useEffect, useState } from "react";
import MealCard from "./MealCard";

const MealsContainer = () => {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    fetchMeals();
  }, [])

  const fetchMeals = async () => {
    const api = await fetch(
      "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
    );
    const {meals} = await api.json();
    setMeals(meals);
  };


  return (
  <div className=" grid grid-cols-1 md:grid-cols-4 gap-8 my-10 w-[80%] mx-auto">
    <MealCard meals={meals}></MealCard>
  </div>
    );
};

export default MealsContainer;
