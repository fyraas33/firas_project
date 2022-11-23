
import '../css/card.css' ;
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
import { useEffect } from 'react';
import CallIcon from '@mui/icons-material/Call';

function Card({el}) {
  

  return (
    <div>
       
      <Link to={"/details"} state={{post:el}}> <div className="containerr">
  <div className="flex-containerr">
    <div className="cardd" data-aos="flip-up" data-aos-duration="1000">
      
      <div
        className="cardd-image"
        style={{ backgroundImage: `url(${el?.image[0]?.url})` }}
      />
      <div className="cardd-content" data-aos="flip-right">
        <h1>{el?.postName}</h1>
        <div className="subtitle">{el?.category}</div>
        <p>
          {el.description}
        </p>
        <div className="cardd-details">
          <div className="cardd-details-inner">
            <div className="read-more">
              <a
                className="buttonn"
                href="https://en.wikivoyage.org/wiki/Chicago"
              >
                Read Article
              </a>
            </div>
            <div className="options">
              <div className="comments">
                <a href="#!">
                  <i className="fa fa-comments-o" />
                <CallIcon/>  {el?.phoneNumber}
                </a>
              </div>
              <div className="likes">
                <a href="#!">
                  <i className="fa fa-heart-o" />
                  322 likes
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   
          

     
         
       
     
    
  </div>
</div></Link>


</div>
  
  )
}

export default Card