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
      <nav class="navbar">
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
           {/* <!-- DROPDOWN MENU --> */}
           <ul class="dropdown">
             <Link to="/service/phone repairer"><li>Phone </li></Link>
             <Link to="/service/blacksmith"><li>Blacksmith</li></Link>
             <Link to="/service/phone repairer"><li>Dropdown 2</li></Link>
             <Link to="/service/phone repairer"><li>Dropdown 3</li></Link>
             <Link to="/service/phone repairer"><li>Dropdown 4</li></Link>
           </ul>
         </li>
        <li><Link to="/contact" >Contact</Link></li>
        
        { isAuth? <Link to='/profile/view'> <li class="services"  >{user?.username} 
          <ul class="dropdown">
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