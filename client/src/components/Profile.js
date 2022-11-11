import React from "react";
import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import "../css/profile.css";

function Profile({ ping, setPing }) {
  const user = useSelector((store) => store.user?.user);
  console.log(user);
  return (
    <div>
      {/* <div className="cardp">
        <img src={user?.avatar} alt="Avatar" style={{width: '200px',height:'200px'}} /> */}
      <div className="wrapper">
        <div className="left">
          <img
            src={`.${user?.avatar}`}
            alt="Avatar"
            className="teswira"
          />
          <Link to={"/profile/view"}>  <h2 className="nme" >{user?.username}</h2></Link>

          <ul className="prfl">
            <Link to={"/profile/edit"}> <li>Edit profile</li></Link>
            <Link to={"/profile/post"}><li >Add your service</li></Link>
            <Link to={"/profile/service"}>  <li>Your service</li></Link>
          </ul>
        </div>

        <div className="right">
         
          {/* <div className="containerb">
            <h1 className="title">Edit profile</h1>
            <div className="grid">
              <div className="form-group a">
                <label htmlFor="name">Username</label>
                <input
                  id="name"
                  type="text"
                  placeholder={`${user?.username}`}
                />
              </div>

              <div className="form-group email-group">
                <label htmlFor="email">Email</label>
                <input id="email" type="text" placeholder={`${user?.email}`} />
              </div>
            </div>

            <div className="button-containerb">
              <button className="button">Save</button>
            </div>
          </div> */}

          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Profile;
