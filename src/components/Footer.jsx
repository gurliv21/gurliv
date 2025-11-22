import {React,useState} from 'react'
import folder from '../images/folder.png'
import spotify from '../images/Spotify_icon.svg.png'
import bin from '../images/trash-icon-12.jpg.png'
import apple from '../images/apple-tv.png'
import { HiMiniSpeakerWave } from "react-icons/hi2";
import { LuSunMoon } from "react-icons/lu";
import finder from '../images/Finder_Icon_macOS_Big_Sur.png'
import { useTheme } from '../context/ThemeContext'
import { useUI } from "../context/UIContext";
import terminal from '../images/terminal-2021-06-03.png.webp'
import audio1 from '../images/key-404884.mp3'
import { HiMiniSpeakerXMark } from "react-icons/hi2";
import netflix from '../images/netflix.png'
function Footer() {
  const [audioPlay,setAudioPlay] = useState(true)
const playSound = () => {
  const audio = new Audio(audio1);
  audio.play().catch(err => console.log(err));
  setAudioPlay((prev)=>!prev)
};
  const {theme,toggleTheme} = useTheme()
  const{openApp} = useUI()
  const apps =[
    {name:'home',image:finder},
    {name:'projects',image:folder},
     {name:'skills', image:terminal},
    {name:'spotify',image:spotify},
    {name:'netflix',image:netflix},

    {name:'bin',image:bin}
  ]
  return (
    <div className='p-4 fixed bottom-0 left-0 w-full flex justify-center '>
      <div className='bg-black/20 p-1 rounded-xl group flex px-5 border border-gray-300'>
      <div className='flex gap-4 cursor-pointer'>
                      {apps.map((apple,index)=>(
                <div key={index} className='relative ' onClick={()=>openApp(apple.name)}>

                                <img src={apple.image} className=' peer h-[50px] w-[50px] inline-flex transform transition-transform duration-300 hover:scale-125'/>
                                      <p className={`opacity-0 peer-hover:opacity-100 transition-opacity duration-200 
                    bg-black/10 text-center rounded-xl px-2 p-1 absolute -top-12 right-2
                    text-[10px] border border-gray-300 ${theme==="light"?"text-black":"text-white"}`}>
        {apple.name}
      </p>
                </div>
              ))}


      </div>
      <div className={`border border-black/50 mx-2 `}></div>
            <LuSunMoon className={` my-auto mx-3  text-black/80 scale-150 cursor-pointer ${theme==="light"?"text-black":"text-white"}`} onClick={toggleTheme} />
            <div onClick={playSound} className={`my-auto `}>
              {audioPlay?                    <HiMiniSpeakerWave className={`text-4xl my-auto hover:scale-125 text-black/80 ${theme==="light"?"text-black":"text-white"}`}/>:<HiMiniSpeakerXMark className={`text-4xl my-auto hover:scale-125 text-black/80 ${theme==="light"?"text-black":"text-white"}`}/>
              
              }


            </div>






      </div>


        
      
    </div>
  )
}

export default Footer
