import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
function Updateform() {
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    const updateuser = async () => {
      try {
        const updatedata = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/v1/update/` + id)
        setname(updatedata.data.message.name)
        setemail(updatedata.data.message.email)
      } catch (error) {
        console.log(error)
      }
    }
    updateuser()
  }, [])

  const update = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.put(`${import.meta.env.VITE_BACKEND_URL}/api/v1/update/` + id, { name, email })
      if (response) {
        setTimeout(() => {
            toast.success('Form Updated Successfully', { position: 'top-center' })
        }, 150);
        navigate('/')
      } else {
        alert('Something went wrong')
      }
    } catch (error) {
      alert(error)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] p-10">
      <div className="bg-white/10 backdrop-blur-lg border border-white/30 rounded-3xl p-10 w-full max-w-md shadow-2xl">
        <h2 className="text-4xl font-extrabold text-center text-white mb-8 animate-pulse tracking-wide">Update Info</h2>
        <form className="flex flex-col space-y-6" onSubmit={update}>
          <input
            className="w-full px-6 py-3 rounded-full bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all duration-300"
            placeholder="Username"
            type="text"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
          <input
            className="w-full px-6 py-3 rounded-full bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all duration-300"
            placeholder="Email Address"
            type="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
          <button
            type="submit"
            className="w-full py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-bold text-lg shadow-md hover:shadow-lg transition-all duration-300 active:scale-95"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  )
}

export default Updateform
