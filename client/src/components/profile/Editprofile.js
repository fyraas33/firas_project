import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../JS/userSlice/userSlice';

const Test1 = ({ping,setPing})=> {
    const user = useSelector((store) => store.user?.user);
    const [newUser, setNewUser] = useState({})
    const dispatch =useDispatch();
  return (
    <div>
       
                <form data-aos="fade-up" data-aos-duration="1000">
                  <h6 className="heading-small text-muted mb-4">User information</h6>
                  <div className="pl-lg-4">
                    <div className="row1">
                      <div className="col-lg-6">
                        <div className="form-group focused">
                          <label className="form-control-label" htmlFor="input-username">Username</label>
                          <input type="text" id="input-username" className="form-control form-control-alternative" onChange={(e)=>setNewUser({...newUser,username: e?.target?.value})} defaultValue={`${user?.username}`}   />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label className="form-control-label" htmlFor="input-email">Email address</label>
                          <input type="email" id="input-email" className="form-control form-control-alternative" onChange={(e)=>setNewUser({...newUser,email: e?.target?.value})} defaultValue={`${user?.email}`} />
                        </div>
                      </div>
                    </div>
                    <div className="row1">
                      <div className="col-lg-6">
                        <div className="form-group focused">
                          <label className="form-control-label" htmlFor="input-first-name">Phone number</label>
                          <input type="text" id="input-first-name" className="form-control form-control-alternative" pattern="[0-9]{8}" required onChange={(e)=>setNewUser({...newUser,phone: e?.target?.value})} defaultValue={`${user?.phone}`} />
                        </div>
                      </div>
                      <div className="col-lg-6">
                       
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
                          <input id="input-address" className="form-control form-control-alternative" onChange={(e)=>setNewUser({...newUser,adress: e?.target?.value})} defaultValue={`${user?.adress}`} type="text" />
                        </div>
                      </div>
                    </div>
                    <div className="row1">
                      <div className="col-lg-4">
                        <div className="form-group focused">
                         
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="form-group focused">
                         
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="form-group">
                         
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr className="my-4" />
                  {/* Description */}
                  <h6 className="heading-small text-muted mb-4">About me</h6>
                  <div className="pl-lg-4">
                    <div className="form-group focused">
                      <label>About Me</label>
                      <textarea row1s={4} className="form-control form-control-alternative" onChange={(e)=>setNewUser({...newUser,aboutme: e?.target?.value})} defaultValue={`${user?.aboutme}`} />
                    </div>
                    <a href="" className="btn btn-sm btn-primary" onClick={(e)=>{dispatch(updateUser({id:user._id,user:newUser}));setPing(!ping);}}>SAVE</a>
                  </div>
                </form>
            
    </div>
  )
}

export default Test1