import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import "../../css/profile.css";

import Carddd from './Carddd';



function Viewpost({ping,setPing,el}) {
  const user=useSelector(store=>store.user?.user)
  const posts=useSelector(store=>store.post?.post)
  // const [addpost, setaddpost] = useState({
  //   postName: "",
  //   category: "",
  //   phoneNumber: "",
  //   description: "",

  // });
  const dispatch = useDispatch();



  return (
    <div>
      <div>

      {posts?.filter(post=>post?.user_id===user?._id).map((el,i)=><Carddd el={el} ping={ping} setPing={setPing}/>
      
      )}
        
    </div>
        
              </div>
  )
}
export default Viewpost