
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {ImCross} from 'react-icons/im'
import { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext'
import { IF, URL } from '../url'
import axios from 'axios'
import {  useNavigate } from 'react-router-dom'
import ReactQuill from 'react-quill';
import { MdDelete } from "react-icons/md";
import 'react-quill/dist/quill.snow.css';
import Editor from '../../Editor'

const CreatePost = () => {
   
    const [title,setTitle]=useState("")
    const [desc,setDesc]=useState("")
    const [file,setFile]=useState("")
    const {user}=useContext(UserContext)
    const [cat,setCat]=useState("")
    const [cats,setCats]=useState([])
    

    const navigate=useNavigate()

    const deleteCategory=(i)=>{
       let updatedCats=[...cats]
       updatedCats.splice(i)
       setCats(updatedCats)
    }

    const addCategory=()=>{
        let updatedCats=[...cats]
        if(cat!==""){
          updatedCats.push(cat);
          setCat("");
          setCats(updatedCats);
        }
        
    }

    const handleCreate=async (e)=>{
        e.preventDefault()
        const post = {
          title,
          desc,
          photo:file,
          username: user.username,
          userId: user._id,
          categories: cats,
        };

        // if(file){
        //   const data=new FormData()
        //   const filename=Date.now()+file.name
        //   data.append("img",filename)
        //   data.append("file",file)
        //   post.photo=filename
        //   console.log(data)
        //   //img upload
        //   try{
        //     const imgUpload=await axios.post(URL+"/api/upload",data)
        //     console.log(imgUpload.data)
        //   }
        //   catch(err){
        //     console.log(err)
        //   }
        // }
        //post upload
        console.log(post)
        try{
          const res=await axios.post(URL+"/api/posts/create",post,{withCredentials:true})
          navigate("/posts/post/"+res.data._id)
          // console.log(res.data)

        }
        catch(err){
          console.log(err)
        }
    }




  return (
    <div>
      <Navbar />
      <div className="px-6 md:px-[200px] mt-8">
        <h1 className="font-bold md:text-2xl text-xl ">Create a post</h1>
        <form className="w-full flex flex-col space-y-4 md:space-y-8 mt-4">
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Enter post title"
            className="px-4 outline-1 py-2 text-slate-500 outline rounded outline-1"
          />
          {/* <input
            onChange={(e) => setFile(e.target.files[0])}
            type="file"
            className="outline-1 block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100 outline rounded p-1"
          /> */}
          <input
            onChange={(e) => setFile(e.target.value)}
            type="url"
            placeholder="Enter Image URL"
            className="px-4 outline-1 py-2 text-slate-500 outline rounded outline-1"
          />
          <div className="flex flex-col">
            <div className="flex items-center space-x-4 md:space-x-4">
              <input
                value={cat}
                onChange={(e) => setCat(e.target.value)}
                className="px-4 py-2 text-slate-500 outline-1 rounded outline"
                placeholder="Enter Category"
                type="text"
              />
              <div
                onClick={addCategory}
                className="bg-black text-white px-4 py-2 font-semibold cursor-pointer rounded-full"
              >
                Add
              </div>
            </div>

            {/* categories */}
            <div className="flex px-4 mt-3">
              {cats?.map((c, i) => (
                <div
                  key={i}
                  className="flex justify-center items-center space-x-2 mr-4 bg-gray-200 px-2 py-1 rounded-md"
                >
                  <p>{c}</p>
                  <p onClick={() => deleteCategory(i)}>
                    <MdDelete />
                  </p>
                </div>
              ))}
            </div>
          </div>
          {/* <textarea
            onChange={(e) => setDesc(e.target.value)}
            rows={15}
            cols={30}
            className="px-4 py-2 text-slate-500 outline outline-1 rounded"
            placeholder="Enter post description"
          /> */}
          {/* <div dangerouslySetInnerHTML={{ __html:desc }}> */}

          <Editor value={desc} onChange={setDesc} />
          {/* </div> */}

          {/* <ReactQuill
            value={desc}
            onChange={(newValue) => setDesc(newValue)}
            modules={modules}
            formats={formats}
          /> */}
          <button
            onClick={handleCreate}
            className="bg-black rounded-full w-full md:w-[20%] mx-auto text-white font-semibold px-4 py-2 md:text-xl text-lg"
          >
            Create
          </button>
        </form>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default CreatePost