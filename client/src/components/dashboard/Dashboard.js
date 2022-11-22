import React from 'react'
import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom'
import "../../css/dash.css";
const Dashboard = () => {
  const user = useSelector((store) => store.user?.user);
  return (
    <div>
      
       <div class="dashboard">
       
  <div class="dashleft">
 
  <div className="left">
          <img
            src={`.${user?.avatar}`}
            alt="Avatar"
            className="teswira"
          />
          <Link to={"/profile/view"}>  <h2 className="nme" >{user?.username}</h2></Link>

          <ul className="prfl">
            <Link to={"/dashboard/alluser"}> <li>Get all user</li></Link>
            <Link to={"/dashboard/allpost"}><li >New post demande</li></Link>
            
          </ul>
        </div>
  </div>

  <div class="dashright">
  <Outlet />

  
  </div>
</div>
</div>
   
  )
}

export default Dashboard