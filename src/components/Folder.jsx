import React from 'react'
import clsx from 'clsx'
import { motion } from 'framer-motion'

function Folder({ image, name, className, link,...props }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <motion.div
        drag
        dragMomentum={false}
        dragElastic={0.12}
        className={clsx(
          'group cursor-pointer flex flex-col items-center',
          className
        )}
        {...props}
        
      >
        <img
          src={image}
          className="h-[60px] group-hover:bg-black/20 group-hover:border group-hover:border-gray-400 p-1"
        />
        <p className="text-sm text-center text-black/70 group-hover:bg-blue-400 group-hover:text-white group-hover:px-2 group-hover:mt-2">
          {name}
        </p>
      </motion.div>
    </a>
  )
}

export default Folder
