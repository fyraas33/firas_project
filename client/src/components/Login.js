import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import '../css/login.css' ;
import { userLogin, userRegister } from '../JS/userSlice/userSlice';

export default function Login() {

  const navigate=useNavigate()
   const [toggle,settoggle] = useState('sign-in')
   const [register, setregister] = useState({
    username:"",
    email:"",
    password:"",
   });
   const [login, setlogin] = useState({
    username:"",
    email:"",
    password:"",
   });
   const dispatch = useDispatch();
   
   
  
    return (
      <div>
        <div id="container4" className={`container4 ${toggle}`}>
  {/* FORM4 SECTION */}
  <div className="row4">
    {/* SIGN UP */}
    <div className="col4 align-items-center flex-col4 sign-up">
      <div className="form4-wrapper align-items-center">
        <div className="form4 sign-up">
          <div className="input-group">
            <i className="bx bxs-user" />
            <input type="text4" placeholder="User Name"
            onChange={(e)=> setregister({...register,username:e.target.value})}
            />
          </div>
          <div className="input-group">
            <i className="bx bx-mail-send" />
            <input type="email" placeholder="Email" 
            onChange={(e)=> setregister({...register,email:e.target.value})}
            />
          </div>
          <div className="input-group">
            <i className="bx bxs-lock-alt" />
            <input type="password" placeholder="Password"
            onChange={(e)=> setregister({...register,password:e.target.value})}
            />
          </div>
          <div className="input-group">
            <i className="bx bxs-lock-alt" />
            <input type="password" placeholder="Confirm password"
            onChange={(e)=> setregister({...register,password:e.target.value})}
            />
          </div>
          <button 
          onClick={()=>{
            dispatch(userRegister(register));
            setTimeout(() => {
              navigate("/profile")
            }, 1400);
            setTimeout(() => {
              window.location.reload();
            }, 1400);
          }}
          >Sign up</button>
          <p>
            <span>Already have an account?</span>
            <b onClick={()=>settoggle('sign-in')} className="pointer">
              Sign in here
            </b>
          </p>
        </div>
      </div>
      
    </div>
    {/* END SIGN UP */}
    {/* SIGN IN */}
   
    <div className="col4 align-items-center flex-col4 sign-in">
   
      <div className="form4-wrapper align-items-center">
        
        <div className="form4 sign-in">
          <div className="input-group">
            <i className="bx bxs-user" />
            <input type="text4" placeholder="Email/User Name"
             onChange={ (e)=> setlogin({...login,email:e.target.value})} />
          </div>
          <div className="input-group">
            <i className="bx bxs-lock-alt" />
            <input type="password" placeholder="Password"
             onChange={(e)=> setlogin({...login,password:e.target.value})} />
          </div>
          <button
          onClick={()=>{
            dispatch(userLogin(login));
              setTimeout(() => {
                navigate("/profile")
              }, 400);
              setTimeout(() => {
                window.location.reload();
              }, 400);
          }}>Sign in</button>
          <p>
            <b>Forgot password?</b>
          </p>
          <p>
            <span>Don't have an account?</span>
            <b onClick={()=>settoggle('sign-up')} className="pointer">
              Sign up here
            </b>
          </p>
        </div>
       
      </div>
      
      </div>
      
   
    {/* END SIGN IN */}
  </div>
  {/* END FORM4 SECTION */}
  {/* CONTENT SECTION */}
  <div className="row4 content-row4">
    {/* SIGN IN CONTENT */}
    <div className="col4 align-items-center flex-col4">
      <div className="text4 sign-in">
        <h2>Welcome back</h2>
        
      </div>
      
    </div>
    {/* END SIGN IN CONTENT */}
    {/* SIGN UP CONTENT */}
    <div className="col4 align-items-center flex-col4">
      
      <div className="text4 sign-up">
        <h2>Join with us</h2>
       
      </div>
    </div>
    {/* END SIGN UP CONTENT */}
  </div>
  {/* END CONTENT SECTION */}
</div>

      </div>
    );
  }