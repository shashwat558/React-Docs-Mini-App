import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";

const Card = () => {
  return (
    <div>
        <div className='relative w-60 h-72 rounded-[40px] bg-zinc-900/90 text-white px-5 py-10 overflow-hidden'>

            <FaRegFileAlt />
            <p className='text-sm mt-5 leading-tight'>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
            <div className='footer absolute bottom-0 px-8 w-full h-14
            py-3 left-0'>
                <div className='flex items-center justify-between mb-6'>
                    <h5>.4mb</h5>
                    <span className='w-8 h-8 bg-zinc-600 rounded-full flex items-center justify-center'>
                    <LuDownload size='.8em' color='#fff' />
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card