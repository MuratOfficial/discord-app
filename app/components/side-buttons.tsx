
import Link from 'next/link'
import React from 'react'

interface SideButtonsProps {
    href:string;
    title: string;
    icon?: React.ReactNode;
    img?: string;
    classname?: string;
}

function SideButtons({href="/", title, icon, img, classname}:SideButtonsProps) {
  return (
    <Link href={href} className={'w-10 h-10 hover:bg-blue-500 transition delay-75 duration-200 rounded-lg flex flex-row items-center justify-center text-center '+ classname}>
        {icon ? icon : img ? <img src={img} alt={title} className=' object-fill w-full h-full'/>:<p className='text-base font-medium text-white'>{title[0].toUpperCase()}</p>}
   
    
    </Link>
  )
}

export default SideButtons