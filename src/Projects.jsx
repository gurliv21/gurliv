import React from 'react'
import SafariCard from './components/SafariCard'
import video1 from './images/video19.mov'
function Projects() {
    const projects=[
        {name:"Skateboard.com",title:"3D Ecommerce website",image:'',stack:['React','Gsap','three.js','TypeScript','Figma']}
    ]
  return (
    <SafariCard title={projects[0].name} corner={
        <div className='p-2 '>
            <p className='font-semibold'>{projects[0].title}</p>
            {projects[0].stack.map((s,index)=>(
                <p className='text-black text-sm'> - {s}</p>
            ))}
        </div>
    }>
        <div className='h-[350px] aspect-video'>
            <video
  src={video1}
  autoPlay
  loop
  muted
  playsInline
  className="w-full h-full object-cover"
/>


        </div>

    </SafariCard>
  )
}

export default Projects
