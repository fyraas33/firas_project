import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Card from './Card'

function Post() {
  const params=useParams()
  const posts=useSelector(store =>store.post?.post) || []
  return (
    <div>
      
    {posts?.filter(el=>el.category.toLowerCase() === params.category.toLocaleLowerCase()).filter(el=>el?.status).map((el,i)=><Card el={el}/>)}
    </div>
  )
}

export default Post