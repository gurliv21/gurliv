import React, { useState,useRef } from 'react'
import SafariCard from './SafariCard'
import cover1 from '../images/cover1.jpg'
import cd1 from '../images/6d083849b5fdaaede8e976095047773f.png'
import { IoPlaySkipForward,IoPlaySkipBackSharp } from "react-icons/io5";
import { TbPlayerPauseFilled } from "react-icons/tb";
import { FaPlay, FaPause } from "react-icons/fa";
import audioFile from '../images/music.mp3'
function Spotify() {
    const [isPlaying, setIsPlaying] = useState(false);

    const audioRef = useRef(new Audio(audioFile));


const togglePlay = () => {
    if (!isPlaying) {
      audioRef.current.play().catch((err) => console.log(err));
    } else {
      audioRef.current.pause();
    }

    setIsPlaying(!isPlaying);
  };

  return (

        <div className='relative'>
            <div className='relative '>
              
<img
  src={cd1}
  className={`
    h-[180px] w-auto absolute top-0 -z-10
    transition-all duration-500 ease-out
    ${isPlaying ? "-right-24 animate-spin" : "right-0"}
  `}
/>

            <img src={cover1} className='h-[180px] w-auto  '/>

            </div>

            <div className='flex text-4xl mt-8 justify-center gap-4'>
                <IoPlaySkipBackSharp className='text-gray-600'/>
                    <button
      onClick={togglePlay}
      className="text-3xl  "
    >
      {isPlaying ? <FaPause /> : <FaPlay />}
    </button>
                <IoPlaySkipForward className='text-gray-600'/>

            </div>
            <div className='h-[200px] aspect-square bg-[#D4BEE4] shadow-lg absolute -bottom-48 -right-52 p-2  '>
                    <div className='flex gap-4 '>
                    <img src={cover1} className='h-[60px] w-[60px]'/>
                    <div>
                        <p className='font-bold'>Excile</p>
                        <p className='text-sm'>Taylor Swift</p>

                    </div>

                </div>
                                    <p className='mt-4 px-3'>
                       I think I've seen this film before
And I didn't like the ending 
                    </p>


                
            </div>
        </div>

  )
}

export default Spotify
