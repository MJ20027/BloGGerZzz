// import { ThemeProvider } from "../src/components/theme-provider.tsx";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PostDetails from "./pages/PostDetails";
import CreatePost from "./pages/CreatePost";
import EditPost from "./pages/EditPost";
import Profile from "./pages/Profile";
import { UserContextProvider } from "./context/UserContext";
import MyBlogs from "./pages/MyBlogs";
import ThemeContext from "./context/ThemeContext";
import { useContext } from "react";



import "./App.css"
// import { transitions, positions, Provider as AlertProvider } from "react-alert";
// import AlertTemplate from "react-alert-template-basic";

const App = () => {

  const theme = useContext(ThemeContext);
  console.log(theme)

  return (
    // <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">

    <div className={`${theme}`}>
      {/* <AlertProvider.Provider template={AlertTemplate} {...options}> */}
      <ThemeContext.Provider value={theme}>
        <UserContextProvider>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/write" element={<CreatePost />} />
            <Route exact path="/posts/post/:id" element={<PostDetails />} />
            <Route exact path="/edit/:id" element={<EditPost />} />
            <Route exact path="/myblogs/:id" element={<MyBlogs />} />
            <Route exact path="/profile/:id" element={<Profile />} />
          </Routes>
        </UserContextProvider>
      </ThemeContext.Provider>
      {/* </AlertProvider.Provider> */}
    </div>
  );
};

export default App;
