import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import "../css/profile.css";
import { addPost } from '../JS/userSlice/postSlice';
import Imgup from './Imgup';
import Mapps from './Mapps';
function Addpost({ping,setPing}) {
  const user=useSelector(store=>store.user?.user)
  const [addpost, setaddpost] = useState({

  });
  const dispatch = useDispatch();



  return (
    <div>
      <div className="containerb">
        <h1 className="title">Add your profession</h1>
        <div className="grid">
          <div className="form-group a">
            <label htmlFor="name">Title</label>
            <input id="name" type="text" onChange={(e) => setaddpost({ ...addpost, postName: e.target.value })} />





          </div>
          <div className="form-group a">
            <label htmlFor="name">Phone number</label>
            <input type="tel" id="phone" name="phone" placeholder="123-45-678" pattern="[0-9]{8}" required onChange={(e) => setaddpost({ ...addpost, phoneNumber: e.target.value })} />

          </div>
          <label htmlFor="name">pic</label>
            <input id="name" type="text" onChange={(e) => setaddpost({ ...addpost, pic: e.target.value })} />

          <div className="form-group email-group">

            <label for="cars">Choose a Category:</label>
            <select name="cars" className='cate' onChange={(e) => setaddpost({ ...addpost, category: e.target.value })} >
              <option value="default"></option>
              <option value="Blacksmith">Blacksmith</option>
              <option value="Phone repairer">Phone repairer</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>

          </div>
        </div>
        <div className="form-group a">
          <label htmlFor="name">Description</label>
          <textarea id="w3review" name="w3review" rows="4" cols="50" onChange={(e) => setaddpost({ ...addpost, description: e.target.value })}></textarea>
          <Mapps annonce={addpost} setAnnonce={setaddpost} className="mapps"/>
        </div>


        <div className="buttone-containerb">
          <buttone className="buttone" onClick={(e) => {
            dispatch(addPost({...addpost,user_id:user?._id,}));setPing(!ping)

          }}>Add</buttone>
        </div>
      </div>
    </div>
  )
}

export default Addpost