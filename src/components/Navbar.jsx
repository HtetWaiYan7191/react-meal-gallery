import React, { useState } from "react";
import { PiForkKnifeLight } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();
  const handleInput = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchInput}`)
  };

  return (
    <div className=" flex justify-around align-middle items-center py-5 bg-red-500">
      <PiForkKnifeLight className="text-3xl text-white" />
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          className="p-2 rounded-lg w-[250px] focus:outline-green-400"
          onChange={handleInput}
          value={searchInput}
          placeholder="Search Your Favuorite Meal"
        />
      </form>
    </div>
  );
};

export default Navbar;
