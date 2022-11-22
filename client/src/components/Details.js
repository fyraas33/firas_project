import '../css/details.css' ;
import React from 'react'
import { useSelector } from 'react-redux'
import { Link,useLocation, useParams } from 'react-router-dom'
import Mapps from './Mapps';


function Details() {
const location=useLocation()
const post=location.state.post
  return (
    <div>
      
       <div className="containerrd">
  <div className="flex-containerrd">
    <div className="cardds">
      <div
        className="cardds-image"
        style={{ backgroundImage: `url(${post?.image[0]?.url})` }}
      />
      <div className="cardds-content">
        <h1>{post?.postName}</h1>
        <div className="subtitle">{post?.category}</div>
        <p>
          {post?.description}
        </p>
        <div className="cardds-details">
     
      
            
         
        </div>
       
      </div>
      <Mapps annonce={post} />  
    </div>
   
           
    
       
     
    
  </div>
</div>


      
    </div>
  )
}

export default Details