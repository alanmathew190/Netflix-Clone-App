
import React, { useEffect,useState } from 'react'
import PopModal from './PopModal'

function MovieRow({ title, movies }) {
  const [selectedMovie, setSelectedMovie] = useState(null)
  
  return (
    <section className='relative bottom-22'>
       <div className="my-6">
      <h2 className="text-white text-2xl font-bold mb-2">{title}</h2>
      <div className="flex overflow-x-scroll space-x-4 scrollbar-hide" >
        {movies.map((movie) => (
          <img
            key={movie.id}
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={movie.title}
            className="rounded-md hover:scale-105 transition-transform duration-300 cursor-pointer"
            onClick={()=>setSelectedMovie(movie)}
          />
          
        ))}
          
      </div>
      
        <PopModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />

      </div>
      </section>
  )
}

export default MovieRow