import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import "../../css/contact.css";


function Profile({ping,setPing}) {
  const user = useSelector((store) => store.user?.user);
  const [newUser, setNewUser] = useState({})
  const dispatch =useDispatch();
  return (
    <div>
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet" />
    <div className="main-content">
      {/* Top navbar */}
     
        <div className="container-fluid">
          {/* Brand */}
          
          {/* Form */}
       
          {/* User */}
         
        </div>
      
      {/* Header */}
      
      {/* Page content */}
      <div className="container-fluid mt--7">
        <div className="row1">
          <div className="col-xl-4 order-xl-2 mb-5 mb-xl-0">
            <div className="card card-profile shadow">
              <div className="row1 justify-content-center">
                <div className="col-lg-3 order-lg-2">
                  <div className="card-profile-image">
                    <a href="#">
                      <img src={`.${user?.avatar}`} className="rounded-circle" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                <div className="d-flex justify-content-between">
                  
                </div>
              </div>
              <div className="card-body pt-0 pt-md-4">
                <div className="row1">
                  <div className="col">
                    <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                      <div>
                        <span className="heading">22</span>
                        <span className="description">Friends</span>
                      </div>
                      <div>
                        <span className="heading">10</span>
                        <span className="description">Photos</span>
                      </div>
                      <div>
                        <span className="heading">89</span>
                        <span className="description">Comments</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                <Link to={"/Profile"}> <h3>
                  {user?.username}
                  </h3></Link> 
                  <div className="h5 font-weight-300">
                    <i className="ni location_pin mr-2" />{user?.adress}
                  </div>
                 
                  
                  <hr className="my-4" />
                  <p>{user?.aboutme}</p>
                  
                  <ul className="prfl">
                  <Link to={"/Profile/edit"}> <li>Edit profile</li></Link>
            <Link to={"/Profile/add"}><li >Add your service</li></Link>
            <Link to={"/Profile/service"}>  <li>Your service</li></Link>
          </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-8 order-xl-1">
            <div className="card bg-secondary shadow">
              <div className="card-header bg-white border-0">
                <div className="row1 align-items-center">
                  <div className="col-8">
                    <h3 className="mb-0">My account</h3>
                  </div>
                  <div className="col-4 text-right">
                   
                  </div>
                </div>
              </div>
              <div className="card-body">
              <Outlet />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  </div>
  )
}

export default Profile