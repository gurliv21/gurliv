import React, { useEffect, useRef,useState } from 'react'
import SafariCard from './SafariCard'
import video from '/fixed.mp4'
import img1 from '../images/32a849aaf205b143c1a2b78d4b8bcf4b.jpg'
import img2 from '../images/91861b749841221d52122f0c2933d8a6.jpg'
import img3 from '../images/ab66a07bd0aaea6c7f9a0c5a13aa966f.jpg'
import { MdWifiOff } from "react-icons/md";
function Netflix() {
  const videoRef = useRef(null)
  const [isFinished,setIsFinished] = useState(false)
  const [network ,setNetwork] = useState(false)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {});
    }
    return
  }, []);



  return (
    <SafariCard title="netflix.com">
        {isFinished?
        <div className='h-[300px] aspect-video bg-black flex  flex-col justify-center items-center text-white text-3xl'>
            {network?
            <div className='text-center items-center flex flex-col gap-2'>
                <MdWifiOff />
                <h1>No Network</h1>
                
                </div>:
                <div>
                    <h1 className='text-center'>Who is watching?</h1>
            <div className='flex gap-4 mt-6'>
                <img src={img1} className='h-[60px] cursor-pointer'onClick={()=>setNetwork(true)}/>
                <img src={img2} className='h-[60px] cursor-pointer'onClick={()=>setNetwork(true)}/>
                <img src={img3} className='h-[60px] cursor-pointer'onClick={()=>setNetwork(true)}/>
                <img src={img2} className='h-[60px] cursor-pointer'onClick={()=>setNetwork(true)}/>
            </div></div>}
            
        </div>:
        <div className="aspect-video h-[300px]">
        <video
          ref={videoRef}
          src={video}
          autoPlay
          muted
          playsInline
          width="100%"
          style={{ maxWidth: 800 }}
          onEnded={()=>setIsFinished(true)}
        />
      </div>}
              
    </SafariCard>



  )
}

export default Netflix
