import React, { useEffect } from 'react'

function Nav() {

  return (
      <>
     <nav className=" bg-opacity-80 fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-red-600 text-3xl font-bold">Netflix</h1>
        <ul className="flex space-x-6 text-white">
          <li className="hover:text-gray-400 cursor-pointer">Home</li>
          <li className="hover:text-gray-400 cursor-pointer">TV Shows</li>
          <li className="hover:text-gray-400 cursor-pointer">Movies</li>
          <li className="hover:text-gray-400 cursor-pointer">My List</li>
        </ul>
      </div>
    </nav>
      </>
  )
}

export default Nav