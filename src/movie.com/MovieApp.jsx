import React, { useEffect, useState } from 'react';
import Movie from './Movie';
import data from "./data.json";
import Header from './Header';
import MovieDescription from './MovieDescription';

const allMovies= data;

const MovieApp = () => {
  const [movies ,setMovies]=useState([]);

  useEffect(()=>{
    setMovies(allMovies);
  },[]);

  const handleSearch=(target)=>{
    let updatedMovies = [...movies];
    updatedMovies=updatedMovies.filter((movie)=>
    movie.name.includes(target.value) );
    setMovies(updatedMovies);
    if(updatedMovies.length === 0 || target.value === ""){
      target.value="";
      setTimeout(()=>{
        setMovies(allMovies);
      },[1000])
    }
  }
  
  return (
    <div className='container'>
      {/* <Header movies={movies} 
      handleSearch={handleSearch}/> */}
      {/* {movies.length === 0  && <h1>No Movies Found Above Search</h1>}
      <main>
        <ul className='grid'>
          {movies.map((movie,index)=>{
            return <Movie key={index} id={index} movie={movie} />
          })}
        </ul>
      </main> */}
      <MovieDescription movie={movies[0]}/>
    </div>
  )
}

export default MovieApp;

