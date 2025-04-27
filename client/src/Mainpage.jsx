import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Mainpage() {
  const [info, setinfo] = useState([])

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/v1`)
        setinfo(response.data.message)
      } catch (error) {
        
        toast.error('Error fetching data', { position: 'top-center' })
      }
    }
    fetchdata()
  }, [])

  const deleteuser = async (id) => {
    try {
      await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/api/v1/delete/` + id)
      setinfo((prev) => prev.filter((user) => user._id !== id))
      toast.success('User deleted successfully', { position: 'top-center' })
    } catch (error) {
      toast.error('Failed to delete user', { position: 'top-center' })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] flex items-center justify-center p-8 mt-12">
      <div className="backdrop-blur-lg bg-white/10 border border-white/30 rounded-3xl p-10 w-full max-w-6xl shadow-2xl overflow-hidden">
        <h1 className="text-5xl font-extrabold text-white text-center mb-12 tracking-wide animate-pulse">User Dashboard</h1>
        <table className="w-full text-white table-fixed">
          <thead>
            <tr className="bg-white/10">
              <th className="py-4 px-6 text-lg font-semibold">Name</th>
              <th className="py-4 px-6 text-lg font-semibold">Email</th>
              <th className="py-4 px-6 text-lg font-semibold text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {info.length > 0 ? (
              info.map((user, index) => (
                <tr
                  key={index}
                  className="hover:scale-[1.02] hover:bg-white/5 transition-all duration-300 ease-in-out rounded-xl"
                >
                  <td className="py-6 px-6 text-center">{user.name}</td>
                  <td className="py-6 px-6 text-center">{user.email}</td>
                  <td className="py-6 px-6 text-center space-x-4">
                    <Link
                      to={`/update/${user._id}`}
                      className="inline-block bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-bold py-2 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      Update
                    </Link>
                    <button
                      onClick={() => deleteuser(user._id)}
                      className="inline-block bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white font-bold py-2 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="text-center py-10 text-gray-300">
                  No Users Available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <ToastContainer />
    </div>
  )
}

export default Mainpage
