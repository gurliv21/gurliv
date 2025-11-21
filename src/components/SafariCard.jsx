import React, { Children } from 'react'
import { CgSoftwareUpload } from "react-icons/cg";
import { GoPlus } from "react-icons/go";
import { useMotionValue,useTransform,motion } from 'framer-motion';
function SafariCard({children,title,corner}) {
    const x = useMotionValue(0)
    const y = useMotionValue(0)
    const rotateX = useTransform(y,[-100,100],[30,-30])
    const rotateY = useTransform(x,[-100,100],[-30,30])
    const circles=['bg-red-400', 'bg-yellow-400','bg-green-400']

//     const handleMouseMove = (e) => {
//     const rect = e.currentTarget.getBoundingClientRect();

//     // Get mouse position relative to center
//     const centerX = rect.left + rect.width / 2;
//     const centerY = rect.top + rect.height / 2;

//     const offsetX = e.clientX - centerX;
//     const offsetY = e.clientY - centerY;

//     x.set(offsetX);
//     y.set(offsetY);
//   };

//   const handleMouseLeave = () => {
//     x.set(0);
//     y.set(0);
//   };

  return (
    <div style={{perspective:2000}}>
            <motion.div style={{x,y,rotateX,rotateY,z:100}}
            drag
            dragElastic={0.18}
            dragConstraints={{top:0,bottom:0,right:0,left:0}}
            whileTap={{cursor:'grabbing'}}
            className='bg-white rounded-xl  min-w-[500px]  relative shadow-xl '  

>

        <div className='flex justify-between border-b p-2 px-3 bg-slate-50 rounded-t-xl shadow-sm'>
            <div className='flex my-auto'>
                {circles.map((circle,index)=>(
                    <div className={`${circle} h-3 inline-flex w-3 rounded-full mr-2`} key={index}></div>
                ))}
            </div>
            <div className='w-[240px] border rounded-md text-center p-1'>
                {title}

            </div>
            <div className='flex my-auto gap-3 '>
                <CgSoftwareUpload className='text-2xl'/>
                <GoPlus  className='text-2xl'/>

            </div>
        </div>
        {corner &&(
                    <motion.div 
        style={{x,y,rotateX,rotateY,z:10000}}
        className='bg-[#C2E2FA] h-[200px] w-[200px] absolute right-[-60px] bottom-[-60px] shadow-md'>
            {corner}

        </motion.div>

        )}

        <div className='px-3 p-2'>
            {children}
        </div>


        
      
    </motion.div>

    </div>

  )
}

export default SafariCard
