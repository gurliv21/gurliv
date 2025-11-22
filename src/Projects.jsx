import React, { useState, useRef, useEffect } from "react";
import SafariCard from "./components/SafariCard";
import video1 from "./images/Untitled design-12.mp4";
import img2 from "./images/screen.png";
import useScrollDirection from "./hooks/useScrollDirection";
import { motion, AnimatePresence } from "framer-motion";
import { FaRegHandPointer } from "react-icons/fa6";
import Finder from "./components/Finder";
import Folder from "./components/Folder";
import file from './images/folder.png'
import img3 from './images/desktop-1200px copy.png'
import img4 from './images/img3.png'
function Projects() {
  const [index, setIndex] = useState(0);


  const videoRef = useRef(null);

  useEffect(()=>{
     console.log(index)
  },[index])



  const projects = [
    { name: "Skateboard.com", title: "3D Website", image: video1, stack: ["React", "Gsap", "three.js", "TypeScript", "Figma"],link:"https://skateboards.vercel.app" },
    { name: "LandingPage.com", title: "Landing Page", image: img3, stack: ["React", "NextJs", "Tailwind Css", "Figma", "Framer Motion"],link:"https://github.com/gurliv21/Landing-page" },
    { name: "AI Sketch Solution", title: "AI Sketch Solution", image: img2, stack: ["React", "Gsap","Fast Api","Gemini Api","Canvas"],link:"https://github.com/gurliv21/NotesAi" },
    { name: "activealert.com", title: "Weaponry Detection System", image: img4, stack: ["Python", "Computer Vision","YOLO","Rest API"],link:"https://github.com/gurliv21/Active-Alert2" },
  ];

  const isVideo =
    projects[index].image?.endsWith(".mp4") ||
    projects[index].image?.endsWith(".mov") ||
    projects[index].image?.endsWith(".webm");

  return (
    <AnimatePresence mode="wait" className="relative">
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 40, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -40, scale: 0.9 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        <div className="absolute -bottom-44 -left-40">
                  <Finder className="z-50 w-[400px] " title="Projects" name="check out my latest Projects">
          
          <div className="flex gap-6 mx-3 my-3 flex-wrap ">
            {projects.map((c,i)=>(
              <Folder image={file} name={`Project ${i+1} `}  key={i} onClick={()=>setIndex(i)}/>

            ))}
            
          </div>
        </Finder>

        </div>

        <SafariCard
          title={projects[index].name}
          className="w-[550px] "
          corner={
            <div className="p-4 relative">
              <a className="gap-2 bg-gray-100 inline-flex rounded-lg p-1 px-6 text-sm shadow-md text-gray-700 h-7 font-bold absolute -top-6 -right-4 cursor-pointer"
              href={projects[index].link} target="_blank" rel="noopener noreferrer">
                Visit <FaRegHandPointer className="my-auto rotate-45" />
              </a>

              <p className="font-semibold mb-4">{projects[index].title}</p>

              {projects[index].stack.map((s, i) => (
                <p key={i} className="text-black text-sm">- {s}</p>
              ))}
            </div>
          }
        >
          <div className="w-[530px] aspect-video">
            
            {isVideo ? (
              <video
                ref={videoRef}
                src={projects[index].image}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            ) : (
              <img
                src={projects[index].image}
                className="w-full h-full object-cover"
              />
            )}

          </div>
        </SafariCard>
      </motion.div>
    </AnimatePresence>
  );
}

export default Projects;
