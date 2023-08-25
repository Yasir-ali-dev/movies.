import { Menu } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = ({movies,handleSearch}) => {

  const handleSubmit=(e)=>{
    e.preventDefault();
    handleSearch(e.target);

  }

  return (
    <header>
        <div className="logo">
           <h1>Movies.</h1> 
        </div>
      <div className='menu-container'>
        <nav className='menu'>
            <Link to="/">Home</Link>
            <Link to="/years">Years</Link>
            <Link to="/genre">Genre</Link>
            <Link to="/rating">Rating</Link>
        </nav>

        <form className='form'>
          <input 
            type="text" 
            placeholder='Search' 
            name='search' 
            onChange={handleSubmit} 
          />
        </form>
        <button className='menu__btn'>
          <img src="/menu.png" alt=""  /> 
        </button> 
      </div>
    </header>
  )
}

export default Header;