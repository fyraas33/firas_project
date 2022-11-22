import React from 'react'
import ImageSlider, { Slide } from "react-auto-image-slider";


function Imgslide() {
  
  return (
    <ImageSlider effectDelay={500} autoPlayDelay={2000}>
      <Slide>
        <img alt="img2" src="https://cdn-afpnk.nitrocdn.com/BgEWMcOYKEoUiTnQXhfKSvRSdRITWbgr/assets/static/optimized/rev-e48f82d/wp-content/uploads/2021/08/Blacksmith-by-Jonny-Gios.png" />
      </Slide>
      <Slide>
        <img alt="img2" src="landscape2.JPG" />
      </Slide>
      <Slide>
        <img alt="img1" src="landscape.JPG" />
      </Slide>
    </ImageSlider>
  );
}


export default Imgslide