import axios from 'axios'
import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useNavigate } from 'react-router-dom'
function Form() {
  const [Username, setname] = useState('')
  const [email, setemail] = useState('')
const navigate = useNavigate()
  const postform = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/v1/create`, {
        name: Username,
        email: email,
      })
      if (response) {
        toast.success('Form submitted successfully!', { position: 'top-center' })
        setTimeout(() => {
            navigate('/')
          }, 1500) 
      } else {
        toast.error('Form submission failed', { position: 'top-center' })
      }
    } catch (error) {
      toast.error('Something went wrong', { position: 'top-center' })
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] p-10">
      <div className="bg-white/10 backdrop-blur-lg border border-white/30 rounded-3xl p-10 w-full max-w-md shadow-2xl">
        <h2 className="text-4xl font-extrabold text-center text-white mb-8 animate-pulse tracking-wide">Submit Info</h2>
        <form className="flex flex-col space-y-6" onSubmit={postform}>
          <input
            className="w-full px-6 py-3 rounded-full bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
            placeholder="Username"
            type="text"
            value={Username}
            onChange={(e) => setname(e.target.value)}
          />
          <input
            className="w-full px-6 py-3 rounded-full bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
            placeholder="Email Address"
            type="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
          <button
            type="submit"
            className="w-full py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold text-lg shadow-md hover:shadow-lg transition-all duration-300 active:scale-95"
          >
            Submit
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  )
}

export default Form
