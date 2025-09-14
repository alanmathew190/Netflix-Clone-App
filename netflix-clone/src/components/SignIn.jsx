import React from 'react'

function SignIn({ isOpen, onClose}) {
    if (!isOpen) return null;
  return (
      <div className="fixed inset-0 flex items-center justify-center z-100 p-2">
          {/* <img src="https://wallpapers.com/images/hd/netflix-background-gs7hjuwvv2g0e9fj.jpg" className='opacity-100 absolute' alt="" /> */}
      <div className="bg-gray-900 rounded-xl p-6 max-w-lg  relative  h-auto  w-100">
        <button
          className="absolute top-2 right-2 text-gray-400 hover:text-white"
          onClick={onClose}
        >
          ✕
              </button>
              <div className='text-white p-5 '>
                  <h1 className='text-2xl text-white font-semibold '>Sign In</h1>
                  <form action="">
                      <input type="email" placeholder='Enter your email' className='border-1 border-gray mt-4 w-75'/>
                      <input type="password" placeholder='Enter your password'className='border-1 border-gray mt-4 w-75' /><br />
                      <button type='submit' className=' bg-red-600 p-3 rounded mt-4 w-75'>Submit</button>
                  </form>
              </div>
      </div>
      </div>
  )
}

export default SignIn