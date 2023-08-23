import React, { useState } from 'react';


const Header = () => {
  const [search,setSearch]=useState("");

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
        <form >
          <input 
            type="text" 
            placeholder='Search' 
            name='search' 
            value={search}
            onChange={(e)=> setSearch(e.target.value)}  
          />
          <button type='submit'>Search</button>
        </form>
      </div>
    </header>
  )
}

export default Header;