import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import {MdKeyboardBackspace} from 'react-icons/md'
import {FaRegHandPointRight} from 'react-icons/fa'
import { useNavigate } from "react-router-dom";


const Search = () => {
    const navigate = useNavigate();
  const {name} = useParams();
  const [favMeal, setFavMeal] = useState({});
  const fetchData = async () => {
    const api =
      await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
    const {meals} = await api.json();
    setFavMeal(meals[0])
    console.log(favMeal)
  };

  useEffect(() => {
    fetchData();
  }, []);


    return (
        <div className='bg-gray-100 py-10'>
            <div className="back-icon pt-4 ps-4 ml-7 text-red-500 cursor-pointer"><MdKeyboardBackspace className='text-3xl' onClick={() => navigate(-1)}/> </div>
           <div className="card-container flex my-4 text-gray-900 px-12 mt-10">
                <figure className=' w-96 mx-auto flex-5/12 shadow-lg details-card hover:shadow-gray-500 p-2'>
                    <img src={favMeal.strMealThumb} className=' object-cover mt-4 rounded-lg' alt="hello" />
                    <figcaption className='text-3xl text-center my-4 font-serif text-green-600'>{favMeal.strMeal}</figcaption>
                </figure>
            <div className="instructions-container flex-1">
                <h1 className='text-4xl font-semi-bold text-center text-green-500 mb-5'>INSTRUCTIONS</h1>
                <p className='w-[80%] mx-auto font-sans text-lg tracking-wide text-gray-600 leading-8 text-justify h-56 overflow-y-auto mb-5 scrollbar-none'>{favMeal.strInstructions}</p>
                <div className="video-link w-[80%] mx-auto flex justify-around">
                    <span className='px-5 py-2 text-xl font-semibold font-serif text-green-600 meal-tag'>Meal Tags</span>
                    <FaRegHandPointRight className='my-2 mx-3 text-2xl text-red-500 point-icon'/>
                    <span className=' border shadow-lg border-red-500 hover:shadow-red-500 px-5 py-2 text-red-500 text-lg rounded-md tracking-wide'>{favMeal.strTags ? favMeal.strTags : "None"}</span>
                    <a href={favMeal.strYoutube} className='px-5 py-2 border shadow-lg bg-green-400  hover:bg-green-500 hover:shadow-green-500 hover:text-white rounded-lg youtube-btn'>Youtube</a>
                </div>
            </div>
           </div>
          
         
          
        </div>
      );

};

export default Search;
