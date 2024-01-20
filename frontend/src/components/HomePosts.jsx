/* eslint-disable react/prop-types */
import {IF} from '../url'


const HomePosts = ({post}) => {
  return (
    <div className="outline outline-offset-2 outline-gray-200 outline-1 rounded py-2 px-2 w-full sm:flex mt-8 space-x-4 ">
      {/* left */}
      <div className="sm:w-[35%] sm:h-[200px] flex justify-center items-center ">
        <img
          src={post.photo}
          alt=""
          className="h-full w-full object-cover "
          loading="lazy"
        />
        
      </div>
      {/* right */}
      <div className="flex flex-col sm:w-[65%]">
        <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl">
          {post.title}
        </h1>
        <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4">
          <p>@{post.username}</p>
          <div className="flex space-x-2 text-sm">
            <p>{new Date(post.updatedAt).toString().slice(0, 15)}</p>
            {/* <p>{new Date(post.updatedAt).toString().slice(16, 24)}</p> */}
          </div>
        </div>
        <p className="text-sm md:text-lg">
          <div
            dangerouslySetInnerHTML={{ __html: post.desc.slice(0, 200) }}
          ></div>
          {" "}
          <span className="text-sky-500">...read more</span>
        </p>
      </div>
    </div>
  );
}

export default HomePosts

