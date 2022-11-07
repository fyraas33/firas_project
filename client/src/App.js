import './App.css';
import { Navigate, Route, Routes,useNavigate } from 'react-router-dom';

import Login from './components/Login';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  logout, userCurrent } from './JS/userSlice/userSlice';
import Profile from './components/Profile';
import PrivateRoute from './routes/PrivateRoute';
import Post from './components/Post';
import Navbar from './components/Navbar';
import { getPost } from './JS/userSlice/postSlice';
import Home from './components/Home';
import Phone from './components/services/Phone';

function App() {
  const navigate=useNavigate();
  const isAuth=localStorage.getItem("token");
  const dispatch = useDispatch()
  useEffect(() => {
    if(isAuth){
      dispatch(userCurrent());
    }
   dispatch(getPost())
  }, []);
 
  const posts=useSelector(state=>state?.post?.post)
  console.log(posts)
  

  return (
    <div className="App">
     <div className='header'>
     
     <Navbar/>
     </div>
    
    <Routes>
    <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>

      {/*dashboard*/}
      <Route element={<PrivateRoute/>} >
        <Route path='/Profile' element={<Profile/>} />
      </Route>
        {/*services*/}
      <Route path='/service/:category' element={<Post/>}/>


    </Routes>
    </div>

  );
}

export default App;
