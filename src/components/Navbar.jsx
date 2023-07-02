import React, { useState } from 'react';
import {PiForkKnifeLight} from 'react-icons/pi'

const Navbar = () => {
    const [searchInput, setSearchInput] = useState('');
  return (
    <div className=' flex justify-around align-middle items-center py-5 bg-amber-500'>
        <PiForkKnifeLight className='text-3xl'/>
        <input type="text" className='p-2 rounded-lg' value={searchInput}  placeholder='Search Your Favuorite Meal'/>
    </div>
  )
}

export default Navbar
