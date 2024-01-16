import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import Menu from "./Menu";
import { UserContext } from "../context/UserContext";
import "../CSS/Navbar.css";
import ThemeContext from "../context/ThemeContext";

const ExtraNavbar = () => {
  const [prompt, setPrompt] = useState("");
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();
  const path = useLocation().pathname;

  // console.log(prompt)

  const showMenu = () => {
    setMenu(!menu);
  };

  const { user } = useContext(UserContext);
  const theme = useContext(ThemeContext);
  // const [search ,setSearch] = useState("");

  useEffect(() => {
    // console.log(setSearch);
    navigate(prompt ? "?search=" + prompt : navigate("/"));
  }, [prompt]);
  return (
    <div
      className={`items-center justify-between px-6  py-2  bg-slate-400 `}
    >
      {path === "/" && (
        <div className="flex justify-center items-center space-x-0 px-3 py-1 rounded-full outline-1 outline ">
          <p
            // onClick={() =>
            //   navigate(prompt ? "?search=" + prompt : navigate("/"))
            // }
            className="cursor-pointer"
          >
            <BsSearch />
          </p>
          <input
            onChange={(e) => setPrompt(e.target.value)}
            className={`outline-none px-2  placeholder-gray-500 bg-slate-400`}
            placeholder="Search post by Title"
            type="text"
          />
          {/* ${theme}*/}
        </div>

        // for small screen
      )}
    </div>
  );
};

export default ExtraNavbar;
