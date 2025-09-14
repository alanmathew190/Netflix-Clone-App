import React from 'react'

function MovieRow({title, movies }) {
  return (
      <>
       <div className="my-6">
      <h2 className="text-white text-2xl font-bold mb-2 px-6">{title}</h2>
      <div className="flex overflow-x-scroll space-x-4 px-6">
        {movies.map((movie) => (
          <img
            key={movie.id}
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={movie.title}
            className="rounded-md hover:scale-105 transition-transform duration-300 cursor-pointer"
          />
        ))}
      </div>
    </div>
      </>
  )
}

export default MovieRow