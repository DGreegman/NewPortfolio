import Image from 'next/image'
import React from 'react'

const Button = ({text, icon}: {text:string, icon:string}) => {
  return (
    <div>
        <button className={` bg-background rounded-sm py-2 px-3 flex gap-2 w-[160px] hover:scale-105 duration-150 text-base font-medium`}>

            {text}
            <Image src={icon} width={24} height={24} alt={text}/>    
            
        </button>
    </div>
  )
}

export default Button