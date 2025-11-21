import React from 'react'
import mainImage from '../images/Daisy-AI-Collaborator.png';
import img1 from '../images/balloon-animal-3d.png'
import img2 from '../images/ghosty-1.png'
import img3 from '../images/sphere-1.png'
import img4 from '../images/daisy-doodle.png'
import {motion} from "framer-motion"
function Daisy() {
  const float = {
    y: [0, -40, 0], // up, down, back to start
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
  return (
    <div className='relative h-[380px] w-[400px] -rotate-12 ' >
        <img src={mainImage} className='h-[380px]' />
        <motion.img src={img1} className='h-[100px] absolute top-0' animate={float}/>
        <motion.img src={img2} className='h-[100px] absolute top-0 left-44' animate={float}/>
        <motion.img src={img3} className='h-[100px] absolute top-24 right-14' animate={float}/>
        <motion.img src={img4} className='h-[100px] absolute top-24 left-0' animate={float}/>
      
    </div>
  )
}

export default Daisy
