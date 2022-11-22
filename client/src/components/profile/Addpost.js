import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addPost, upImg } from '../../JS/userSlice/postSlice';
import FileBase64 from 'react-file-base64';
import Addmap from '../Addmap';
import AddFiles from '../Imgup';

const Addpost = ({ping,setPing})=> {
    const user = useSelector((store) => store.user?.user);
    const [addpost, setaddpost] = useState({

    });
    const [newUser, setNewUser] = useState({})
    const dispatch =useDispatch();
  return (
    <div>
       
                <div>
                  <h6 className="heading-small text-muted mb-4">User information</h6>
                  <div className="pl-lg-4">
                    <div className="row1">
                      <div className="col-lg-6">
                        <div className="form-group focused">
                          <label className="form-control-label" htmlFor="input-username">Title</label>
                          <input type="text" id="input-username" className="form-control form-control-alternative" onChange={(e) => setaddpost({ ...addpost, postName: e.target.value })}   />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label className="form-control-label" htmlFor="input-email">Add pic</label>
                          <AddFiles setPost={setaddpost} Post={addpost}/>
                        </div>
                      </div>
                    </div>
                    <div className="row1">
                      <div className="col-lg-6">
                        <div className="form-group focused">
                          <label className="form-control-label" htmlFor="input-first-name">Phone number</label>
                          <input type="text" id="input-first-name" className="form-control form-control-alternative" pattern="[0-9]{8}" required onChange={(e) => setaddpost({ ...addpost, phoneNumber: e.target.value })} />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group focused">
                          <label className="form-control-label" htmlFor="input-last-name">Category</label>
                          <select name="cars" className='cate' onChange={(e) => setaddpost({ ...addpost, category: e.target.value })} >
              <option value="default"></option>
              <option value="Blacksmith">Blacksmith</option>
              <option value="Phone repairer">Phone repairer</option>
              <option value="Plumber">Plumber</option>
              <option value="Mechanical">Mechanical</option>
            </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr className="my-4" />
                  {/* Address */}
                  <h6 className="heading-small text-muted mb-4">Contact information</h6>
                  <div className="pl-lg-4">
                    <div className="row1">
                      <div className="col-md-12">
                        <div className="form-group focused">
                        <label className="form-control-label" htmlFor="input-address">Address</label>
                          <input id="input-address" className="form-control form-control-alternative" onChange={(e) => setaddpost({ ...addpost, Adress: e.target.value })} type="text" />
                         
                          
                        </div>
                      </div>
                    </div>
                    <div className="row1">
                      <div className="col-lg-4">
                        <div className="form-group focused">
                          <label className="form-control-label" htmlFor="input-city">instagram</label>
                          <input type="text" id="input-city" className="form-control form-control-alternative" onChange={(e) => setaddpost({ ...addpost, instagram: e.target.value })} />
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="form-group focused">
                          <label className="form-control-label" htmlFor="input-country">facebook</label>
                          <input type="text" id="input-country" className="form-control form-control-alternative" onChange={(e) => setaddpost({ ...addpost, facebook: e.target.value })} />
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="form-group">
              
                        </div>
                      </div>
                    </div>
                  </div>
                        <Addmap annonce={addpost} setAnnonce={setaddpost} className="mapps"/>
                  <hr className="my-4" />
                  {/* Description */}
                  <h6 className="heading-small text-muted mb-4">Description</h6>
                  <div className="pl-lg-4">
                    <div className="form-group focused">
                      <label>Add a description</label>
                      <textarea row1s={4} className="form-control form-control-alternative" onChange={(e) => setaddpost({ ...addpost, description: e.target.value })} />
                    </div>
                    <a href="" className="btn btn-sm btn-primary" onClick={(e) => {
            dispatch(addPost({...addpost,user_id:user?._id,}));setPing(!ping)

          }}>ADD</a>
                  </div>
                </div>
            
    </div>
  )
}

export default Addpost