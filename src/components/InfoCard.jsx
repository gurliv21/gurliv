import React from 'react'
import Trial from '../images/Trial'
import img from '../images/img.png'
import SafariCard from './SafariCard'
import svg1 from '../images/double-underline.svg'
import img2 from '../images/marker-sketch-blue-circle-free-png-704081694704939nqmpppsxqz.png'
import Contact from './Contact'

function InfoCard() {
      const circles=['#FF8F8F', '#FFF1CB','#C2E2FA','#B7A3E3']
      const info =[
        {name:"gurlivbajwa21@gmail.com",color:"#FFF1CB",link:""},
        {name:"Mail",color:"#C2E2FA",link:""}
      ]
  return (
   <SafariCard title={"gurlivbajwa.com"} className={"relative h-[380px] w-[400px]"}
>
      <div className='mt-6 flex gap-8'>
        <div>
                  <p className='text-2xl leading-10'>I'm a <span className='relative'><img src={img2 } className='h-[70px] w-[380px] absolute -top-4 right-0 -z-10'/>Software Engineer</span> <br/>who builds immersive and <br/>user -friendly <span className='relative '> 
Aplications <img src={svg1} className='w-[152px] absolute bottom-0 right-0'/></span><br/>that users love</p>
            <div className='mt-8 '>
              <p>Experience</p>
              <div className='flex gap-3 mt-3'>
                <div className='bg-[#1363DF] h-[42px] w-[42px] my-auto rounded-md'/>
                <div>
                  <div className='flex  gap-6'>
                    <p className='text-sm font-bold'>Urspayce</p>
                                    <p className='bg-gray-200 rounded-md text-[11px] inline-flex px-1 my-auto'>Jan 2025 - July 2025</p>

                  </div>
                                  
                <p className='text-sm text-black/70'>Software Engineer Intern</p>


                </div>




              </div>


            </div>


        </div>


       <div className='w-[160px] h-[120px] '>
        <div className='bg-blue-200 p-1'>
                    <img src={img} className=''/>

        </div>



       </div>
       <div className='absolute -bottom-32 -right-56'>
               <Contact/>

       </div>


      </div>

       
   </SafariCard>
  )
}

export default InfoCard
