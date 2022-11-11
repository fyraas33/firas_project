import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../JS/userSlice/userSlice';

function Editprofile({ping,setPing}) {
  const user = useSelector((store) => store.user?.user);
  const [newUser, setNewUser] = useState({})
  const dispatch =useDispatch();
  return (
    <div>
      <div className="containerb">
            <h1 className="title">Edit profile</h1>
            <div className="grid">
              <div className="form-group a">
                <label htmlFor="name">Username</label>
                <input
                  id="name"
                  type="text"
                  onChange={(e)=>setNewUser({...newUser,username: e.target.value})} defaultValue={`${user?.username}`}/>
                 

                
              </div>

              <div className="form-group email-group">
                <label htmlFor="email">Phone number</label>
                <input id="email" type="text" pattern="[0-9]{8}" required onChange={(e)=>setNewUser({...newUser,phone: e.target.value})} defaultValue={`${user?.phone}`} ></input>
                
              </div>
            </div>

            <div className="buttone-containerb">
              <buttone className="buttone" onClick={(e)=>{dispatch(updateUser({id:user._id,user:newUser}));setPing(!ping);}}>Save</buttone>
            </div>
          </div>
          </div>
  )
}
// style={{ backgroundImage: `url(${user?.avatar})`,width:"200px",height:"200px" }}
export default Editprofile