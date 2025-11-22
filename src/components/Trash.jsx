import React from 'react'
import Finder from './Finder'
import file from '../images/pdf.png'
import text from '../images/text-file.png'
import img from '../images/cute-red-panda.jpg'
function Trash() {
  return (
    <Finder title={"Trash"} name={"I said Don't Look"} className={"w-[550px] h-[300px]"}>
        <div className='flex '>
                                <div className='mt-14 group cursor-pointer  flex flex-col items-center'>
                <img src={text} className='h-[60px] group-hover:bg-black/20 group-hover:border group-hover:border-gray-400 p-1'/>
                <p className='text-sm text-center text-black/70 group-hover:bg-blue-400 group-hover:text-white group-hover:px-2 group-hover:mt-2'>sorry_no_thanks.txt</p>
              </div>
                    <div className=' mt-4 group cursor-pointer flex flex-col items-center  '>
                      <img src={img} className='h-[60px] group-hover:bg-black/20 group-hover:border group-hover:border-gray-400 p-1'/>
                      <p className='text-sm text-center text-black/70 group-hover:bg-blue-400 group-hover:text-white group-hover:px-2 group-hover:mt-2'>cute.img</p>
                    </div>
                                <div className='group  mt-16 ml-10 cursor-pointer flex flex-col items-center  '>
                            <img src={file} className='h-[60px] group-hover:bg-black/20 group-hover:border group-hover:border-gray-400 p-1'/>
                            <p className='text-sm text-center text-black/70 group-hover:bg-blue-400 group-hover:text-white group-hover:px-2 group-hover:mt-2'>old_resume.pdf</p>
                          </div>

        </div>

        

    </Finder>
  )
}

export default Trash
