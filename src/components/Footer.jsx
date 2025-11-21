import React from 'react'
import folder from '../images/folder.png'
import spotify from '../images/spotify.png'
import bin from '../images/trash-icon-12.jpg.png'
import apple from '../images/apple-tv.png'
import { HiMiniSpeakerWave } from "react-icons/hi2";
import { LuSunMoon } from "react-icons/lu";
import finder from '../images/Finder_Icon_macOS_Big_Sur.png'
function Footer() {
  const apps =[
    {name:'home',image:finder},
    {name:'projects',image:folder},
    {name:'spotify',image:spotify},
    {name:'apple Tv', image:apple},
    {name:'bin',image:bin}
  ]
  return (
    <div className='p-4 fixed bottom-0 left-0 w-full flex justify-center '>
      <div className='bg-black/20 p-1 rounded-xl group flex px-5 border border-gray-300'>
      <div className='flex gap-4 cursor-pointer'>
                      {apps.map((apple,index)=>(
                <div key={index} className='relative '>

                                <img src={apple.image} className=' peer h-[50px] w-[50px] inline-flex transform transition-transform duration-300 hover:scale-125'/>
                                      <p className="opacity-0 peer-hover:opacity-100 transition-opacity duration-200 
                    bg-black/10 text-center rounded-xl px-2 p-1 absolute -top-12 right-2
                    text-[10px] border border-gray-300">
        {apple.name}
      </p>
                </div>
              ))}


      </div>
      <div className='border border-black/50 mx-2'></div>
            <LuSunMoon className='text-4xl my-auto mr-3 hover:scale-125 text-black/80' />
      <HiMiniSpeakerWave className='text-4xl my-auto hover:scale-125 text-black/80' />




      </div>


        
      
    </div>
  )
}

export default Footer
