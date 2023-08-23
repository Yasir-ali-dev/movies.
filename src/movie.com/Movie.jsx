import React from 'react'

const Movie = ({movie,id}) => {

  return (
    <div className='media'>

        <img src={movie.poster} alt={movie.name} />    
    </div>
  )
}

export default Movie;