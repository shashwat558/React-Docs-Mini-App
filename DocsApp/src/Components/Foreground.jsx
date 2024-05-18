import React, { useRef } from 'react'
import Card from './Card'

const Foreground = () => {
    // const data = [icon, desc, filesize, closeOrDownlaod, tagDetails];

    const ref = useRef(null);

    const data = [
        {desc: "hey there i am teeku you are not teeku", 
        filesize: ".9mb",
        close: true, 
        tag: {isOpen:true, tagTitle: "Download Now", tagColor: "green"},
    },
    {desc: "hey there i am teeku you are not teeku", 
    filesize: ".9mb",
    close: true, 
    tag: {isOpen:true, tagTitle: "Download Now", tagColor: "green"}},
    {desc: "hey there i am teeku you are not teeku", 
    filesize: ".9mb",
    close: true, 
    tag: {isOpen:true, tagTitle: "Download Now", tagColor: "green"},
},
    ]
  return (
    
    <div>
         <div ref={ref} className='fixed z-[3] top-0 left-0 w-full h-full flex gap-10 flex-wrap'>
            {data.map((item, index) => (
                <Card data={item} refrence={ref}/>
            ))}
            
         </div>
    </div>
  )
}

export default Foreground