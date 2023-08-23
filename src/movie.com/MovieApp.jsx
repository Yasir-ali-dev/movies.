import React, { useEffect, useState } from 'react';
import Movie from './Movie';
import data from "./data.json";
import Header from './Header';

const MovieApp = () => {
  const [movies ,setMovies]=useState([]);

  useEffect(()=>{
    setMovies(data);
  },[] );
  
  return (
    <div className='container'>
      <Header/>
      <main>
        <ul className='grid'>
          {movies.map((movie,index)=>{
            return <Movie key={index} movie={movie} />
          })}
        </ul>
      </main>
    </div>
  )
}

export default MovieApp;

