import React from 'react'

const Movie = ({movie}) => {
  return (
    <li className='media'>
        <img src={movie.poster} alt={movie.name} />
                   
    </li>
  )
}

export default Movie;