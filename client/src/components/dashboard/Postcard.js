import React from 'react'
import { useSelector } from 'react-redux'
import AppPostt from '../AppPostt'
import Srvscard from '../Srvscard'

const Postcard = () => {
  const posts=useSelector(store=>store.post?.post)
  return (
    <div>
       NEW POST DEMANDE
       {posts?.filter(el=>!el?.status)?.map((el,i)=> <AppPostt el={el}/>)}
    </div>
  )
}

export default Postcard