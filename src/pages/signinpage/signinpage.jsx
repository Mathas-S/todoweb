import React from 'react'
import { useNavigate } from 'react-router-dom'


const signinpage = () => {
  const navigate = useNavigate();


const handleSignIn = () => {
  navigate('/home');
}
return(
  <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-6">Sign In</h1>
      <button
        onClick={handleSignIn}
        className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
      >
        Sign In
      </button>
    </div>
)
}


export default signinpage;