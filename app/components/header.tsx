"use client"

import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'


function Header() {

  const pathname = usePathname();
  const [title, setTitle] = useState("Discord");

  useEffect(()=>{
      if(pathname.toLowerCase().includes("servers")){
        setTitle("Servers")
      }else if(pathname.toLowerCase().includes("settings")){
        setTitle("Settings")
      }else if(pathname.toLowerCase().includes("community")){
        setTitle("Community")
      }else{
        setTitle("Discord")
      }

  }, [pathname])


  return (
      <div className='w-full col-span-4 h-10 flex flex-row items-center justify-center bg-background text-white text-center'>{title}</div>
  )
}

export default Header