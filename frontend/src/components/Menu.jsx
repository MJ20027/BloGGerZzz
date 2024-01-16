import { useContext, useEffect } from "react"
import { UserContext } from "../context/UserContext"
import axios from "axios"
import { URL } from "../url"
import { Link, useNavigate } from "react-router-dom"
 import { ToastContainer, toast } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";
import { CgProfile } from "react-icons/cg";
import { TfiWrite } from "react-icons/tfi";
import { FaBlogger } from "react-icons/fa6";
import { CiLogin } from "react-icons/ci";

const Menu = () => {
const {user}=useContext(UserContext)
const {setUser}=useContext(UserContext)
const navigate=useNavigate()



const handleLogout=async()=>{
   toast.success("Logged Out Sucessfully", {
     position: "top-center",
     autoClose: 2000,
     hideProgressBar: false,
     closeOnClick: true,
     pauseOnHover: true,
     draggable: true,
     progress: undefined,
     theme: "dark",
   });
  try{
    
    const res=await axios.get(URL+"/api/auth/logout",{withCredentials:true})
    console.log(res)

    setUser(null)
    navigate("/login")
    // localStorage.removeItem("token")

  }
  catch(err){
    console.log(err)
  }
}
  return (
    <div className="bg-black w-[150px] items-center flex flex-col items-start absolute top- right-6 md:right-32 rounded-md p-4 space-y-4">
      <ToastContainer />
      {!user && (
        <h3 className="text-white text-sm hover:text-gray-500 cursor-pointer">
          <Link to="/login">Login</Link>
        </h3>
      )}
      {!user && (
        <h3 className="text-white text-sm hover:text-gray-500 cursor-pointer">
          <Link to="/register">Register</Link>
        </h3>
      )}
      {user && (
        <h3 className="text-white text-sm hover:text-gray-500 cursor-pointer ">
          <Link className="flex items-center" to={"/profile/" + user._id}>
            <CgProfile />
            <p className="px-2">Profile</p>
          </Link>
        </h3>
      )}
      {user && (
        <h3 className="text-white text-sm hover:text-gray-500 cursor-pointer">
          <Link className="flex items-center" to="/write">
            <TfiWrite />
            <p className="px-2">Write</p>
          </Link>
        </h3>
      )}
      {user && (
        <h3 className="text-white text-sm hover:text-gray-500 cursor-pointer">
          <Link className="flex items-center" to={"/myblogs/" + user._id}>
            <FaBlogger />
            <p className="px-2">My blogs</p>
          </Link>
        </h3>
      )}
      {user && (
        <h3
          onClick={handleLogout}
          className="text-white flex items-center text-sm hover:text-gray-500 cursor-pointer"
        >
          <CiLogin />
          <p className="px-2">Logout</p>
        </h3>
      )}
    </div>
  );
}

export default Menu