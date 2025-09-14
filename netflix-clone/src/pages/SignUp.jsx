// src/pages/SignInPage.jsx
import React, { useState } from 'react';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="bg-gray-900 rounded-xl p-6 max-w-md w-full">
        <h2 className="text-xl font-bold mb-4">Sign In</h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log(email, password); // handle login
          }}
        >
          <label className="block mb-2">
            Email
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 mt-1 rounded bg-transparent border-b border-gray-500 text-white placeholder-gray-300 focus:outline-none"
              placeholder="Email"
              required
            />
          </label>

          <label className="block mb-4">
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 mt-1 rounded bg-transparent border-b border-gray-500 text-white placeholder-gray-300 focus:outline-none"
              placeholder="Password"
              required
            />
          </label>

          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded w-full"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
