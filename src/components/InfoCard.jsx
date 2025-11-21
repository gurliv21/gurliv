import React from 'react'
import Trial from '../images/Trial'
import img from '../images/img.png'
import SafariCard from './SafariCard'
import svg1 from '../images/double-underline.svg'
function InfoCard() {
      const circles=['#FF8F8F', '#FFF1CB','#C2E2FA','#B7A3E3']
  return (
   <SafariCard title={"gurlivbajwa.com"}>
      <div className='mt-10 '>

      <p className='text-2xl leading-10'>I'm a <span>Software Engineer</span> <br/>who builds immersive and <br/>user -friendly <span className='relative '> 
Aplications <img src={svg1} className='w-[152px] absolute bottom-0 right-0'/></span><br/>that users love</p>
            <div className='flex mt-4'>
                {circles.map((circle,index)=>(
                    <div className={` h-4 inline-flex w-4 rounded-full mr-2`} key={index} style={{ backgroundColor: circle }}></div>
                ))}
            </div>
       <div className='w-[120px] h-[120px] '>

       </div>

      </div>

       
   </SafariCard>
  )
}

export default InfoCard
