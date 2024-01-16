import axios from "axios"
import Footer from "../components/Footer"
import HomePosts from "../components/HomePosts"
import Navbar from "../components/Navbar"
import { IF, URL } from "../url"
import { useContext, useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import Loader from '../components/Loader'
import { UserContext } from "../context/UserContext"
import ThemeContext from "../context/ThemeContext"
import "../CSS/Home.css"
 import { ToastContainer, toast } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";
import ExtraNavbar from "../components/ExtraNavbar"
 

const Home = () => {

  const {search}=useLocation()
  // console.log(search)
  const [posts,setPosts]=useState([])
  const [noResults,setNoResults]=useState(false)
  const [loader,setLoader]=useState(false)
  const {user}=useContext(UserContext)
  const theme = useContext(ThemeContext);
  // console.log(theme);
      // useEffect(() => {
      //        toast.success("Logged In Sucessfully", {
      //          position: "top-center",
      //          autoClose: 2000,
      //          hideProgressBar: false,
      //          closeOnClick: true,
      //          pauseOnHover: true,
      //          draggable: true,
      //          progress: undefined,
      //          theme: "dark",
               
      //        });
      // }, [user]);
  const fetchPosts=async()=>{
    setLoader(true)
    try{
      const res=await axios.get(URL+"/api/posts/"+search)
      console.log(res.data)
      setPosts(res.data)
      if(res.data.length===0){
        setNoResults(true)
      }
      else{
        setNoResults(false)
      }
      setLoader(false)
      
    }
    catch(err){
      console.log(err)
      setLoader(true)
    }
  }

  useEffect(()=>{
    fetchPosts()
  },[search])



  return (
    <>
      <ToastContainer />
      <Navbar />
      <div className="xxsm:hidden">
      <ExtraNavbar/>
      </div>
      <div className={`px-8 xl:px-[300px] md:px-[92px] min-h-[80vh] ${theme}`}>
        {loader ? (
          <div className="h-[40vh] flex justify-center items-center">
            <Loader />
          </div>
        ) : !noResults ? (
          posts.map((post) => (
            <>
              <Link to={user ? `/posts/post/${post._id}` : "/login"}>
                <HomePosts key={post._id} post={post} />
              </Link>
            </>
          ))
        ) : (
          <h3 className="text-center font-bold mt-16">No posts available</h3>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Home