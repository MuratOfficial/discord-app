import Link from 'next/link'
import React from 'react'

interface LeftSideBarProps {
    title:string;
    href: string;
    icon?: React.ReactNode;
    img?:string;
}

function LeftSideLinks({
    title, href, icon, img
}:LeftSideBarProps) {
  return (
    <Link href={href ?? "/"} className='py-2 px-4  w-full rounded-lg  group hover:bg-bg-secondary items-center transition delay-75 duration-150 gap-3 flex flex-row justify-start'>
        
        {icon ? icon:""}
        {img && <img src={img} alt={title}/>}
        <span className='text-zinc-400 font-medium group-hover:text-zinc-100 group-hover:font-semibold'>{title}</span>
        
        </Link>
  )
}

export default LeftSideLinks

