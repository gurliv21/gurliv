import React from 'react'
import Daisy from './components/Daisy'
import InfoCard from './components/InfoCard'
import SafariCard from './components/SafariCard'
import Header from './components/Header'
import Footer from './components/Footer'
import folder from './images/folder.png'
import Projects from './Projects'
import { useUI } from "./context/UIContext";
import { AnimatePresence, motion } from "framer-motion";
import Spotify from './components/Spotify'
import Trash from './components/Trash'
import file from './images/pdf.png'
import text from './images/text-file.png'
import Skills from './components/Skills'
import Netflix from './components/Netflix'
import Folder from './components/Folder'
import Contact from './components/Contact'
function WorkBench() {
      const{openApp} = useUI()

  const renderActiveApp = () => {
    const {activeApp } = useUI();

    

    switch (activeApp) {
      case "home":
        return <InfoCard />;
      case "projects":
        return <Projects />;
      case "spotify":
        return <Spotify></Spotify>;
      case "skills":
        return <Skills/>;
      case "bin":
        return <Trash/>
      case "netflix":
        return <Netflix/>
      case "contact":
        return <Contact/>
      default:
        return <InfoCard />;
    }
  };
  return (
    <div className='relative h-screen' >
      <Header/>
            <div className='flex  gap-7 m-9 z-40'>
              <Folder image={folder} name="Projects" className="sm:absolute sm:right-12 sm:top-20 " onClick={()=>openApp("projects")}/>
      <Folder image={text} name="Skills.txt" className="sm:absolute sm:right-36 sm:top-40" onClick={()=>openApp("skills")}/>
       <Folder image={file} name="resume.pdf" className="sm:absolute sm:right-12 sm:top-64" link="https://drive.google.com/file/d/1jdM7gILSlKhGhE5ZS0TNAFys_3-ZpFfY/view?usp=share_link"/>
       <Folder image={folder} name="Contact Me" className="sm:absolute sm:right-12 sm:top-96" onClick={()=>openApp("contact")}/>

      </div>


        <div>
          <div className='absolute sm:top-[40vh] top-[44vh] left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 '>
            {renderActiveApp()}
          </div>


      </div>
      <div className='sm:absolute sm:left-16 sm:top-20 opacity-85 sm:opacity-100 fixed bottom-0 '>
              <Daisy/>

      </div>




        <div className='hidden sm:block'>
                <Footer/>

        </div>


         
      
    </div>
  )
}

export default WorkBench
