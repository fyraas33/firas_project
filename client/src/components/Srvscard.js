import '../css/card.css' ;
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { delPost, delpost } from '../JS/userSlice/postSlice';



function Srvscard({ping,setPing,el}) {
   
    const dispatch = useDispatch();
  return (
    <div>
      
 <div className="containerr">
  <div className="flex-containerr">
    <div className="cardd">
      <div
        className="cardd-image"
        style={{ backgroundImage: `url(${el?.pic})` }}
      />
      <div className="cardd-content">
        <h1>{el.postName}</h1>
        <div className="subtitle">{el?.category}</div>
        <p>
          {el.description}
        </p>
        <div className="cardd-details">
          <div className="cardd-details-inner">
            <div className="read-more">
              <button className="buttonn"  onClick={(e) => {
            dispatch(delPost({id:el?._id}));setPing(!ping)

          }}>
                 delete
                </button>
           
            </div>
            <div className="options">
              <div className="comments">
                <a href="#!">
                  <i className="fa fa-comments-o" />
                  16 comments
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
</div>


      
    </div>
  )
}

export default Srvscard