import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";
import pic1 from "../assets/pic1.jpg"
import pic2 from "../assets/pic2.jpg"
import pic3 from "../assets/pic3.jpg"
const images=[{url:pic1},{url:pic2},{url:pic3}]
function ImageSlider() {
  return (
    <div style={{width:"100%", margin:"auto"}}>
      <SimpleImageSlider
        width={1370}
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </div>
  )
}

export default ImageSlider
