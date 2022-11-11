import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import "../css/profile.css";
import { addPost } from '../JS/userSlice/postSlice';


import Srvscard from './Srvscard';
function Editpost({ping,setPing}) {
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

      {posts?.filter(post=>post?.user_id===user._id).map((el,i)=><Srvscard el={el}/>
      )}
        
    </div>
  )
}
export default Editpost