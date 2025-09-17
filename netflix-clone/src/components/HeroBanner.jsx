import React, { useState } from 'react'
import SIgnUp from './SIgnUp';

function HeroBanner() {
  const [sign1,setSign1]=useState(false)
  return (
    <>
      <section className="relative bottom-22 h-[98vh] bg-black text-white flex items-center justify-center">
        <img
          src="https://wallpapers.com/images/hd/netflix-background-gs7hjuwvv2g0e9fj.jpg"
          alt="banner"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative max-w-xl text-center mt-30">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Unlimited movies, TV shows and more
          </h1>
          <h1 className="text-xl font-bold mb-6">
            Starts at ₹149. Cancel at any time.
          </h1>
          <p className="mb-6">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <form action="" className="flex justify-evenly">
            <input
              type="text"
              placeholder="Enter your Email"
              className="rounded w-95 backdrop-blur-sm bg-black/10  border border-gray-700 py-3 pr-3 pl-3  text-base text-white focus:outline-white"
            />

            <button type='button'
              className="bg-red-600 text-2xl p-4 rounded font-bold hover:bg-red-700 "
              onClick={() => setSign1(true)}
              onSubmit={(e) => e.preventDefault()}
            >
              Get Started &gt;
            </button>
          </form>
        </div>
        <SIgnUp isOpen1={sign1} onClose1={() => setSign1(false)} />
      </section>
    </>
  );
}

export default HeroBanner