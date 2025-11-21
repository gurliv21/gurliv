import React from 'react'
import Daisy from './components/Daisy'
import InfoCard from './components/InfoCard'
import SafariCard from './components/SafariCard'
import Header from './components/Header'
import Footer from './components/Footer'
import folder from './images/folder.png'
import Projects from './Projects'
function WorkBench() {
  return (
    <div className='relative h-screen' >
      <Header/>
      <div className='absolute  top-[40vh] left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 ' >
        <Projects/>
      </div>
      <div className='absolute left-16 top-20 '>
              <Daisy/>

      </div>
      <div className='absolute right-12 top-20 group cursor-pointer flex flex-col items-center  '>
        <img src={folder} className='h-[60px] group-hover:bg-black/20 group-hover:border group-hover:border-gray-400 p-1'/>
        <p className='text-sm text-center text-black/70 group-hover:bg-blue-400 group-hover:text-white group-hover:px-2 group-hover:mt-2'>project 1</p>
      </div>
            <div className='absolute right-36 top-40 group cursor-pointer  flex flex-col items-center'>
        <img src={folder} className='h-[60px] group-hover:bg-black/20 group-hover:border group-hover:border-gray-400 p-1'/>
        <p className='text-sm text-center text-black/70 group-hover:bg-blue-400 group-hover:text-white group-hover:px-2 group-hover:mt-2'>project 2</p>
      </div>

            <div className='absolute right-12 top-64 group cursor-pointer flex flex-col items-center  '>
        <img src={folder} className='h-[60px] group-hover:bg-black/20 group-hover:border group-hover:border-gray-400 p-1'/>
        <p className='text-sm text-center text-black/70 group-hover:bg-blue-400 group-hover:text-white group-hover:px-2 group-hover:mt-2'>project 3</p>
      </div>
                  <div className='absolute right-12 top-96 group cursor-pointer flex flex-col items-center'>
        <img src={folder} className='h-[60px] group-hover:bg-black/20 group-hover:border group-hover:border-gray-400 p-1 '/>
        <p className='text-sm text-center text-black/70 group-hover:bg-blue-400 group-hover:text-white group-hover:px-2 group-hover:mt-2'>Resume.pdf</p>
      </div>

      <Footer/>
         
      
    </div>
  )
}

export default WorkBench
