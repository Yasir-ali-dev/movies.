import React, { useEffect, useState } from 'react';
import Movie from './Movie';
import data from "./data.json";
import Header from './Header';

import paginate from './paginate';
const allMovies = data;
const paginatedMovies= paginate(allMovies);

const MovieApp = () => {
  const [movies ,setMovies]=useState([]);
  const [currentIndex,setCurrentIndex]=useState(0);

  useEffect(()=>{
    setMovies(paginatedMovies[currentIndex]);
  },[currentIndex]);


  const handleSearch=(target)=>{
    let updatedMovies = [...allMovies];
    updatedMovies=updatedMovies.filter((movie)=>
    movie.name.includes(target.value) );
    setMovies(updatedMovies);
    if(updatedMovies.length === 0 || target.value === ""){
      target.value="";
      setTimeout(()=>{
        setMovies(paginatedMovies[currentIndex]);
      },[1500])
    }
  }
  
  return (
    <div className='container'>
      <Header movies={movies} 
      handleSearch={handleSearch}/> 
      {movies.length === 0  && <h1>No Movies Found Above Search</h1>}
      <main>
        <ul className='grid'>
          {movies.map((movie,index)=>{
            return <Movie key={index} id={index} movie={movie} />
          })}
        </ul>
      </main>
      <ul className='btn-group'>
        <button
          onClick={()=> setCurrentIndex(prevIndex=>{
            return prevIndex+1
          })}
        >{`next`}</button>
          {movies.map((_,index)=> {
            return (<li key={index}>
              <button
                onClick={()=> setCurrentIndex(index)}
              >{index+1}</button>
            </li>)
          })}
          <button
          onClick={()=> setCurrentIndex(prevIndex=>{
            if(prevIndex > 0){
              return prevIndex-1
            }
            return prevIndex;
          })}
        >{`prev`}</button>
      </ul>

    </div>
  )
}

export default MovieApp;

