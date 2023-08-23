import React from 'react'

const MovieDescription = ({movie}) => {
  return (
    <div className='movie-description'>
        <img src={movie.poster} alt={movie.name} />
    </div>
  )
}

export default MovieDescription;
