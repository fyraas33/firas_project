import React from 'react'
import { useSelector } from 'react-redux';
import '../css/profile.css' ;
import Card from './Card';
function Profile() {
  const user=useSelector(store=>store.user?.user)
  console.log(user)
  return (
    <div>
      
     {/* <div className="cardp">
        <img src={user?.avatar} alt="Avatar" style={{width: '200px',height:'200px'}} /> */}
           <div className="wrapper">
        <div className="left">
        <img src={`.${user?.avatar}`} alt="Avatar" style={{width: '100px',height:'100px'}} />
          <h4>Alex William</h4>
          <p>UI Developer</p>
        </div>
        <div className="right">
          <div className="info">
            <h3>Information</h3>
            <div className="info_data">
              <div className="data">
                <h4>Email</h4>
                <p>alex@gmail.com</p>
              </div>
              <div className="data">
                <h4>Phone</h4>
                <p>0001-213-998761</p>
              </div>
            </div>
          </div>
          <div className="projects">
            <h3>Projects</h3>
            <div className="projects_data">
              <div className="data">
                <h4>Recent</h4>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
              <div className="data">
                <h4>Most Viewed</h4>
                <p>dolor sit amet.</p>
              </div>
            </div>
          </div>
          <div className="social_media">
            <ul>
              <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
              <li><a href="#"><i className="fab fa-twitter" /></a></li>
              <li><a href="#"><i className="fab fa-instagram" /></a></li>
            </ul>
          </div>
        </div>
      </div>
      {/* </div> */}
   
         
       </div>
  )
}

export default Profile