import React, { useState } from 'react';


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
            <a href="#_">Home</a>
            <a href="#_">Web Series</a>
            <a href="#_">Dual Audio</a>
            <a href="#_">Genre</a>
            <a href="#_">By Year</a>
        </nav>
        <form className='form'>
          <input 
            type="text" 
            placeholder='Search' 
            name='search' 
            onChange={handleSubmit} 
          />
        </form>
      </div>
    </header>
  )
}

export default Header;