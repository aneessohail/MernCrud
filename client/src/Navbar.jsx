import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/10 border-b border-white/20 shadow-md mb-4">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
       
        <Link to="/" className="text-3xl font-extrabold text-white tracking-wider hover:text-purple-300 transition-all duration-300">
          CRUD App
        </Link>

        <div className="space-x-6">
          <Link 
            to="/" 
            className="text-white text-lg hover:text-purple-300 transition-all duration-300 font-semibold"
          >
            Home
          </Link>
          <Link 
            to="/create" 
            className="text-white text-lg hover:text-purple-300 transition-all duration-300 font-semibold"
          >
            Post Form
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
