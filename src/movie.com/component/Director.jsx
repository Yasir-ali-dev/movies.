import React, { useEffect, useState } from 'react'
import data from "../data.json";

const Director = () => {
  const [directors,setDirectors]=useState([]);

  useEffect(()=>{
    console.log(data.map((movie)=> movie["directors"][0]));
  },[])

  return (
    <div>
      director
    </div>
  )
}

export default Director;