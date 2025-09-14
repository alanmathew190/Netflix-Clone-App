import React from 'react'

function HeroBanner() {
  return (
      <>
    <section className="relative h-[70vh] bg-gray-900 text-white flex items-center justify-center">
      <img
        src="https://image.tmdb.org/t/p/original/6Lw54zxm6BAEKJeGlabyzzR5Juu.jpg"
        alt="banner"
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />
      <div className="relative z-10 max-w-xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Popular Movie</h1>
        <p className="mb-6">Watch anywhere. Cancel anytime.</p>
        <button className="bg-red-600 px-6 py-2 rounded font-semibold hover:bg-red-700">
          Play
        </button>
      </div>
    </section>
      </>
  )
}

export default HeroBanner