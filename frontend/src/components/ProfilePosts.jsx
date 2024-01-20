/* eslint-disable react/prop-types */
import {IF} from '../url'

const ProfilePosts = ({p}) => {
  // console.log(p)
  return (
    <div className=" outline outline-offset-2 px-1 py-1 outline-gray-200 rounded w-full sm:flex mt-8 space-x-4">
      {/* left */}
      <div className="sm:w-[35%] sm:h-[200px] flex justify-center items-center">
        <img src={p.photo} alt="" className="h-full w-full object-cover" loading="lazy"/>
      </div>
      {/* right */}
      <div className="flex flex-col sm:w-[65%]">
        <h1 className="text-xl font-bold  md:mb-2 mb-1 md:text-2xl">
          {p.title}
        </h1>
        <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4">
          <p>@{p.username}</p>
          <div className="flex space-x-2">
            <p>{new Date(p.updatedAt).toString().slice(0, 15)}</p>
            {/* <p>{new Date(p.updatedAt).toString().slice(16, 24)}</p> */}
          </div>
        </div>
        <p className="text-sm md:text-lg">
          <div dangerouslySetInnerHTML={{ __html: p.desc.slice(0, 200) }}></div>

          {/* this below line written it without running so it may be wrong to improve it */}
          <span className="text-blue">...Read more</span>
        </p>
      </div>
    </div>
  );
}

export default ProfilePosts
