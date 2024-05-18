import React, { useState } from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from 'framer-motion'; 

const Card = ({data, refrence}) => {


    

  return (
    
        <motion.div drag dragConstraints={refrence} whileDrag={{scale: 1.2}} className='relative w-60 h-72 rounded-[40px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden'>

            <FaRegFileAlt />
            <p className='text-sm mt-5 leading-tight'>{data.desc}</p>
            <div className='footer absolute bottom-0 w-full
             left-0'>
                <div className='flex items-center justify-between py-3 
                px-8 mb-6'>
                    <h5>{data.filesize}</h5>
                    <span className='w-8 h-8 bg-zinc-600 rounded-full flex items-center justify-center'>
                    {data.close ? <IoClose /> : <LuDownload size='.8em' color='#fff' /> }
                    
                    </span>
                </div>
                {data.tag.isOpen && (
                    <div className={`tag w-full p-4 bg-${data.tag.tagColor}-500 flex items-center justify-center`}>
                    <h3>{data.tag.tagTitle}</h3>
                    
                </div>

                )
                }
                
            </div>
        </motion.div>
    
  )
}

export default Card