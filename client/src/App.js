import "./App.css";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";

import Login from "./components/Login";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, userCurrent } from "./JS/userSlice/userSlice";
import Profile from "./components/profile/Profile";
import PrivateRoute from "./routes/PrivateRoute";
import Post from "./components/Post";
import Navbar from "./components/Navbar";
import { getPost } from "./JS/userSlice/postSlice";
import Home from "./components/Home";


import Addpost from "./components/profile/Addpost";
import Editprofile from "./components/profile/Editprofile";
import Contactus from "./components/Contactus";

import Viewpost from "./components/profile/Viewpost";

import Details from "./components/Details";
import Dashboard from "./components/dashboard/Dashboard";
import AdminRoute from "./routes/AdminRoute";
import Alluser from "./components/dashboard/Alluser";
import Postcard from "./components/dashboard/Postcard";
import { Footer } from "./components/Footer";
import Test123 from "./components/Test123";




function App() {
  const navigate = useNavigate();
  const isAuth = localStorage.getItem("token");
  const dispatch = useDispatch();
  const [ping, setPing] = useState(false);
  useEffect(() => {
    if (isAuth) {
      dispatch(userCurrent());
    }
    dispatch(getPost());
  }, [ping]);

  const posts = useSelector((state) => state?.post?.post);
  console.log(posts);

  return (
    <div className="App">

      <div className="header">
        <Navbar />

      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/details" element={<Details />} />
        <Route path="/test" element={<Test123 />} />

        <Route element={<PrivateRoute />}>

          <Route path="/Profile" element={<Profile ping={ping} setPing={setPing} />} >

            <Route path="edit" element={<Editprofile ping={ping} setPing={setPing} />} />
            <Route path="add" element={<Addpost ping={ping} setPing={setPing} />} />
            <Route path="service" element={<Viewpost />} />

          </Route>

          {/*dashboard*/}
          <Route element={<AdminRoute />}>
            <Route path="/dashboard" element={<Dashboard ping={ping} setPing={setPing} />} >
              <Route path="alluser" element={<Alluser ping={ping} setPing={setPing} />} />
              <Route path="allpost" element={<Postcard ping={ping} setPing={setPing} />} />
            </Route>
          </Route>

        </Route>
        {/*services*/}
        <Route path="/service/:category" element={<Post />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
