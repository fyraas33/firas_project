import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import DeleteIcon from '@mui/icons-material/Delete';
import { deleteUser } from '../../JS/userSlice/userSlice';
import { map } from 'leaflet';
import Srvscard from '../Srvscard';

const Usercard = ({ el , refresh,setRefresh }) => {
    const [show, setShow] = useState(false);
    const post = useSelector(store => store.post?.post)
    const dispatch = useDispatch()
    return (
        <div onClick={()=>setShow(!show)}>
            <li className="userlist">
                <div>
                    {el?.username}
                </div>

                <div className='delbtn'>
                    <DeleteIcon onClick={(e) => {
                        dispatch(deleteUser({ id: el?._id })); 
                        setRefresh(!refresh)

                    }} />





                </div>
                 
            </li>  
             {
                        show ? <div>
                            <ul className='usersrvs'>
                                {post?.filter(p=>p?.user_id===el?._id).map((p,i)=><Srvscard el={p}/>)}
                            </ul>
                        
                        </div> : null
                    }

        </div>
    )
}

export default Usercard