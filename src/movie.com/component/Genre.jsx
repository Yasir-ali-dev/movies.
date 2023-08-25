import React, { useEffect, useState } from 'react';
import data from "../data.json";
import { Link ,Outlet } from 'react-router-dom';

const Genre = () => {
  const [uniqueGenre,setUniqueGenre]=useState([]);
  useEffect(()=>{
    let totalGenre=[];
    const movieGenres=data.map((movie) => movie.genre.split(", "));
    movieGenres.map(genre=> {
      genre.map((each)=>{
        if(!totalGenre.includes(each)){
          totalGenre.push(each);
        }
      })
    });
    setUniqueGenre(totalGenre);
  },[])

  return (
    <div className='genre'>
      {uniqueGenre.filter((_,index)=> index < 6).map((genre,index)=>{
        return <Link to={`/genre/${genre}`} key={index} >{genre}</Link>
      })}
      <Outlet/>
    </div>
  )
}

export default Genre
