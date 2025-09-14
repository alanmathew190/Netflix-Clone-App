import React from 'react'

function PopModal({ movie, onClose }) {
    if(!movie) return null
  return (
     <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-10 p-2">
      <div className="backdrop-blur-sm bg-black/50 border border-gray-700 rounded-xl p-6 max-w-lg  relative  h-auto  w-100">
        <button
          className="absolute top-2 right-2 text-gray-400 hover:text-white"
          onClick={onClose}
        >
          ✕
        </button>
         <h2 className="text-white font-bold mb-2 text-3xl">{movie.title}</h2>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="rounded-xl mb-4 h-75 m-auto"
        />
        <p className="text-sm text-gray-300 text-justify ">{movie.overview}</p>
        <p className="text-xs mt-2 text-white">
          ⭐ {movie.vote_average} | Release: {movie.release_date}
              </p>
              <button className='bg-red-600 rounded text-white p-1 mt-3'>Watch Now</button>
      </div>
      </div>
  )
}

export default PopModal