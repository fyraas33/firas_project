import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../css/navbar.css' ;
import { getPost } from '../JS/userSlice/postSlice';
import { logout, userCurrent } from '../JS/userSlice/userSlice';

const Navbar = () => {
  const isAuth=localStorage.getItem("token");
 
  const dispatch = useDispatch()
  const user=useSelector(store=>store.user?.user)

  return (
    <div>
      <nav class="mainnav">
     {/* <!-- LOGO --> */}
     <div class="logo">FIRAS</div>
     {/* <!-- NAVIGATION MENU --> */}
     <ul class="nav-links">
       {/* <!-- USING CHECKBOX HACK --> */}
       <input type="checkbox" id="checkbox_toggle" />
       <label for="checkbox_toggle" class="hamburger">&#9776;</label>
       {/* <!-- NAVIGATION MENUS --> */}
       <div class="menu">
         <li><Link to="/" >Home</Link></li>
         <li><a href="/">About</a></li>
         <li class="services">
            Services
           {/* <!-- DROPDOWN1 MENU --> */}
           <ul class="dropdown1">
             <Link to="/service/phone repairer"><li>Phone Repairer </li></Link>
             <Link to="/service/blacksmith"><li>Blacksmith</li></Link>
             <Link to="/service/Plumber"><li>Plumber</li></Link>
             <Link to="/service/Mechanical"><li>Mechanical</li></Link>
             <Link to="/service/phone repairer"><li>Dropdown1 4</li></Link>
           </ul>
         </li>
        <li><Link to="/contact" >Contact</Link></li>
        
        { isAuth? <Link to='/profile'> <li class="services"  >{user?.username} 
          <ul class="dropdown1">
         {user?.status=="admin"? <Link  to='/dashboard'> <li >Dashboard </li></Link>:null}
          <Link to='/'> <li onClick={()=>{dispatch(logout());}}>Logout </li></Link>
             
           </ul>
        
        </li></Link>:<Link to='/login'> <li>Login</li></Link>}
        
         
        
         
       </div>
       
     </ul>
   </nav>
    </div>
  )
}

export default Navbar