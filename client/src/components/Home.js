import React from 'react'
import { useSelector } from 'react-redux'
import Card from './Card'
import HorizontalSlider from 'react-horizontal-slider'
import "../css/home.css"

import Search from './Search'

function Home() {
  const posts=useSelector(store =>store.post?.post) || []
  return (
    <div>
        <div>
        
        
        
        
        
          <img className='covrr' data-aos="fade-right" data-aos-duration="1000" src='cover1.jpg' />
      </div>
      <div className='homee'>
        <h2 className='cat1'>Phone Repairer</h2>
         <div className='cover-scroll-layout-talel'>
        {posts?.filter(el=>el.category === "Phone repairer").filter(el=>el?.status).map((el,i)=><Card el={el}/>)}
        </div>
        <h2 className='cat1'>Blacksmith</h2>
        <div className='cover-scroll-layout-talel'>
        {posts?.filter(el=>el.category === "Blacksmith").filter(el=>el?.status).map((el,i)=><Card el={el}/>)}
        </div>
        <h2 className='cat1'>Plumber</h2>
        <div className='cover-scroll-layout-talel'>
        {posts?.filter(el=>el.category === "Plumber").filter(el=>el?.status).map((el,i)=><Card el={el}/>)}
        </div>
      </div>
      
         

       
    </div>
  )
}

export default Home