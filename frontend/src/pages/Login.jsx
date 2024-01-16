import { Link, useNavigate } from "react-router-dom"
import Footer from "../components/Footer"
import { useContext, useEffect, useState } from "react"
import axios from "axios"
import { URL } from "../url"
import { UserContext } from "../context/UserContext"
// import React from "react";

;

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [username,setUsername]=useState("")
  const [password,setPassword]=useState("")
  const [error,setError]=useState(false)
  const {setUser}=useContext(UserContext)
  const navigate=useNavigate()



  const handleLogin=async()=>{

    try{
      const res = await axios.post(
        URL + "/api/auth/login",
        { username, password },
        { withCredentials: true }
      );
      console.log(res.data.token)
      // localStorage.setItem("token", res.data.token);
      setUser(res.data)
      navigate("/")
      

    }
    catch(err){
      toast.error("Invalid User or Password", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

      setError(true)
      console.log(err)

    }

  }
  return (
    <>
      <ToastContainer />
      <div className="flex items-center justify-between px-6 md:px-[200px] py-4 bg-slate-400">
        <h1 className="text-lg md:text-xl font-extrabold">
          <Link to="/">BloGGerZzz</Link>
        </h1>
        <h3>
          <Link to="/register">Register</Link>
        </h3>
      </div>
      <div className="w-full flex justify-center items-center h-[80vh] ">
        <div className="flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%]">
          <h1 className="text-xl font-bold text-left">
            Log in to your account
          </h1>
          <input
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 border-2 border-black outline-0 rounded"
            type="text"
            placeholder="Enter your Username"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border-2 border-black outline-0 rounded"
            type="password"
            placeholder="Enter your password"
          />
          <button
            onClick={handleLogin}
            className="w-full px-4 py-4 text-lg font-bold text-white bg-black rounded-full hover:bg-gray-500 hover:text-black "
          >
            Log in
          </button>
          {error}
          <div className="flex justify-center items-center space-x-3">
            <p>New here?</p>
            <p className="text-gray-500 hover:text-black">
              <Link to="/register">Register</Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login