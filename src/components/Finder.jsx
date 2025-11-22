import React from 'react'
import { BsList } from "react-icons/bs";
import { PiDotsSixVerticalBold } from "react-icons/pi";
import { motion } from "framer-motion";
import { CiCloud } from "react-icons/ci";
import { IoMdHome } from "react-icons/io";
import { RiDeleteBin5Line } from "react-icons/ri";
import clsx from 'clsx';
function Finder({children,title,name,className}) {
    const circles=['bg-red-400', 'bg-yellow-400','bg-green-400']
  return (
<motion.div
    drag
    dragMomentum={false}
    dragElastic={0.12}
    className={clsx('flex bg-white rounded-xl    relative shadow-xl',className)}>
        <div className='bg-gray-100 p-2 px-3 rounded-xl w-[30%] '>
                        <div className='flex my-auto '>
                {circles.map((circle,index)=>(
                    <div className={`${circle} h-3 inline-flex w-3 rounded-full mr-2`} key={index}></div>
                ))}
            </div>
            <div className='text-[12px] mt-4 '>

            <p className='text-sm text-blue-500 mb-2'>Recent</p>
            <ul>
                <li className='inline-flex gap-2'><BsList />Desktop</li>
                <li className='inline-flex gap-2'><BsList />Application</li>
                <li className='inline-flex gap-2'><BsList />Application</li>
                <li className='inline-flex gap-2'><BsList />Documents</li>
                <li className='inline-flex gap-2'><BsList />Download</li>
            </ul>
            <p className='text-sm text-blue-500 my-2'>Location</p>
            <ul>
                <li className='inline-flex gap-2'><CiCloud />Drive</li>
                <li className='inline-flex gap-2'><IoMdHome />gurlivbajwa</li>
                <li className='inline-flex gap-2'><RiDeleteBin5Line />Bin</li>
            </ul>
            <ul>


            </ul>




            </div>


        </div>
        <div className='w-full rounded-xl '>
            <div className='bg-gray-50 rounded-xl  '>
                <div className='flex justify-between'>
                    <div className='p-2' >
                        <p className='font-semibold text-sm'>{title}</p>
            <p className='text-gray-500 text-sm'>{name}</p>

                    </div>

                    <div className='flex text-2xl my-auto'>
                                    <BsList />
            <PiDotsSixVerticalBold />

                    </div>
                </div>


            <hr/>


            </div>
                        <div>{children}</div>
                        


        </div>
      
    </motion.div>
  )
}

export default Finder
