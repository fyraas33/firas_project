import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../../JS/userSlice/userSlice';
import "../../css/dash.css";
import Usercard from './Usercard';
const Alluser = () => {
    const users = useSelector((store) => store.user?.users);
    const [refresh, setRefresh] = useState(false);
    const  dispatch=useDispatch()
    useEffect(() => {
        dispatch(getUser())
    }, [refresh]);
    console.log(users)
  return (
    <div className="right">
      <div>
      
        {users?.map((el,i)=><Usercard el={el} refresh={refresh} setRefresh={setRefresh} /> )}

        
    </div>
    </div>
  )
}

export default Alluser