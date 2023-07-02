import React from 'react'
import '../style.css';
import { useNavigate } from 'react-router-dom';

const MealDetail = () => {
    const navigate = useNavigate();

    const goDetailPage = () => {
        navigate('/details');
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
