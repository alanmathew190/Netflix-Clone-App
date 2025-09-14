import React, { useState } from 'react'
import SignIn from './SignIn'

function Nav() {
  const [sign, setSign] = useState(false)
  
  return (
      <>
      <nav className=" bg-opacity-80 relative w-full z-10">
      <div className="container mx-auto flex justify-between items-center px-2 py-4">
          <img src="https://images.ctfassets.net/y2ske730sjqp/821Wg4N9hJD8vs5FBcCGg/9eaf66123397cc61be14e40174123c40/Vector__3_.svg?w=460" alt=""
          className='h-10 ml-30 mt-1'/>
          <ul className="flex space-x-6 text-white mr-50">
             <select className='focus:border-2 p-1 border-1'>
          <option className='text-gray-700'>English  </option>
          <option className='text-gray-700'>Hindi  </option>
            </select>
            <button className="bg-red-600 px-3 py-2 rounded font-semibold hover:bg-red-700"
            onClick={()=>setSign(true)}>
          Sign In
        </button>
        </ul>
        </div>
        <SignIn isOpen={sign}
        onClose={()=>setSign(false)}/>
    </nav>
      </>
  )
}

export default Nav