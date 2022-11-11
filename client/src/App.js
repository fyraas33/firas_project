import "./App.css";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";

import Login from "./components/Login";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, userCurrent } from "./JS/userSlice/userSlice";
import Profile from "./components/Profile";
import PrivateRoute from "./routes/PrivateRoute";
import Post from "./components/Post";
import Navbar from "./components/Navbar";
import { getPost } from "./JS/userSlice/postSlice";
import Home from "./components/Home";


import Addpost from "./components/Addpost";
import Editprofile from "./components/Editprofile";
import Contactus from "./components/Contactus";
import ViewProfile from "./components/ViewProfile";
import Viewpost from "./components/Viewpost";
import Mapps from "./components/Mapps";
import Details from "./components/Details";



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
        <Route path="/details" element={<Details  />} />
        {/*dashboard*/}
        <Route element={<PrivateRoute />}>
          <Route path="/Profile" element={<Profile ping={ping} setPing={setPing} />} >
            <Route path="view" element={<ViewProfile ping={ping} setPing={setPing} />} />
            <Route path="edit" element={<Editprofile ping={ping} setPing={setPing} />} />
            <Route path="post" element={<Addpost ping={ping} setPing={setPing} />} />
            <Route path="service" element={<Viewpost  />} />
          </Route>
        </Route>
        {/*services*/}
        <Route path="/service/:category" element={<Post />} />
      </Routes>
    </div>
  );
}

export default App;
