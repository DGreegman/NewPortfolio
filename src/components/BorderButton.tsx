import Image from 'next/image'
import React from 'react'

const BorderButton = ({ icon, text, bg}: {icon:string, text:string, bg?: boolean}) => {
  return (
    <div>
        <button className={`${bg ? 'bg-background': ''} border border-white rounded-sm py-2 px-10 flex gap-2 w-[200px] hover:bg-textSecondary hover:scale-105 duration-150`}>

            <Image src={icon} width={24} height={24} alt={text}/>    
            {text}
            
        </button>
    </div>
  )
}

export default BorderButton