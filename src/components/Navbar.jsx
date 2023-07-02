import React, { useState } from 'react';
import {PiForkKnifeLight} from 'react-icons/pi'

const Navbar = () => {
    const [searchInput, setSearchInput] = useState('');

    const handleInput = (e) => {
        setSearchInput(e.target.value)
    }
  return (
    <div className=' flex justify-around align-middle items-center py-5 bg-red-500'>
        <PiForkKnifeLight className='text-3xl'/>
        <input type="text" className='p-2 rounded-lg w-[250px]' onChange={handleInput} value={searchInput}  placeholder='Search Your Favuorite Meal'/>
    </div>
  )
}

export default Navbar
