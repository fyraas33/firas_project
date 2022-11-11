
import '../css/card.css' ;
import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'


function Card({el}) {

  return (
    <div>
      
      <Link to={"/details"}> <div className="containerr">
  <div className="flex-containerr">
    <div className="cardd">
      <div
        className="cardd-image"
        style={{ backgroundImage: `url(${el.pic})` }}
      />
      <div className="cardd-content">
        <h1>{el.postName}</h1>
        <div className="subtitle">{el.category}</div>
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
</div></Link>


      
    </div>
  )
}

export default Card