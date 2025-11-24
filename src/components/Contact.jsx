import React from 'react'
import Finder from './Finder'
import github from '../images/github.png'
import linkedin from '../images/linkedin.png'
import mail from '../images/gmail.png'
import Folder from './Folder'
function Contact() {
  return (
    <Finder title={"Contact Me"} name={"Best way to reach out"} className={"sm:w-[420px] w-[380px]"} >
        <div className='flex gap-6 mx-4 mt-4'>        
            <Folder image={mail} name={"Mail"} link="mailto:gurlivbajwa21@gmail.com" />
        <Folder image={linkedin} name={"Linkedin"}  link="https://www.linkedin.com/in/gurlivbajwa/"/>
        <Folder image={github} name={"Github"} link="https://github.com/gurliv21/" /></div>


    </Finder>
  )
}

export default Contact
