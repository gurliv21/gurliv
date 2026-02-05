import React from 'react'
import { motion } from "framer-motion";
import { FiCheck } from "react-icons/fi";
function Skills() {
        const circles=['bg-red-400', 'bg-yellow-400','bg-green-400']
const stacks = [
        {
      category: "Language",
      tech: ["TypeScript", "Python", "JavaScript"],
    },
    {
      category: "Frontend",
      tech: ["React.js", "React Native"],
    },
    {
      category: "Styling",
      tech: ["Tailwind CSS",  "CSS"],
    },
    {
      category: "Backend",
      tech: ["Node.js", "Express", "NestJS"],
    },
    {
      category: "Database",
      tech: ["MongoDB","PostgreSQL" ],
    },
    {
      category: "Cloud",
      tech: ["AWS"],
    },
  ];
  return (
<motion.div
        
        initial={{ opacity: 0, y: 40, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -40, scale: 0.9 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
    drag
    dragMomentum={false}
    dragElastic={0.12}
    className=' bg-white rounded-xl  min-w-[500px] min-h-[300px]   shadow-xl'>
        <div className='bg-gray-50 p-2 py-4 rounded-t-xl  flex'>
                                    <div className='flex my-auto '>
                {circles.map((circle,index)=>(
                    <div className={`${circle} h-3 inline-flex w-3 rounded-full mr-2`} key={index}></div>
                ))}
            </div>

            
        </div>
        <hr/>
        <div className='p-4'>
            <p className='font-mono'><span className='font-bold'>@gurliv%  </span>   show tech stack</p>
            <div className=" mt-6">
      <table className="w-full font-mono text-sm">
        <thead>
          <tr className="text-gray-600">
            <th className="text-left pb-2">Category</th>
            <th className="text-left pb-2">Technologies</th>
          </tr>
        </thead>

        <tbody>
          {stacks.map((item, index) => (
            <tr key={index} className="align-top">
              <td className="py-1 flex items-start gap-2 text-green-600 font-semibold">
                <FiCheck className="text-green-500 mt-1" />
                {item.category}
              </td>
              <td className="py-1 text-gray-700">
                {item.tech.join(", ")}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <hr className="border-t-2 border-dotted border-gray-500 mt-4 mb-3" />

      {/* Footer */}
      <p className="text-sm font-mono text-green-600">
        ✓ {stacks.length} of {stacks.length} stacks loaded successfully (100%)
      </p>

      <p className="text-xs font-mono text-gray-500 mt-1">
        ⚡ Render time: 6ms
      </p>
    </div>
        </div>
      
    </motion.div>
  )
}

export default Skills
