"use client"

import React from 'react'
import SideButtons from './side-buttons'
import { AiFillPlusCircle } from 'react-icons/ai'
import { FaCompass } from 'react-icons/fa'
import { LiaDownloadSolid } from 'react-icons/lia'
import { usePathname } from 'next/navigation'



function SideBarNav() {

  const pathname = usePathname();

  return (
    <div className='px-2 flex flex-col gap-2 h-full items-center fixed '>
        <SideButtons title='Discord' classname={pathname === "/main" ? "bg-blue-500" : "bg-zinc-800 "} href='/main' icon={
         <svg viewBox="0 0.5 24 24" width={20} height={20} id="meteor-icon-kit__regular-discord" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g clipPath="url(#fffclip0_525_68)"> <path d="M20.317 4.54101C18.7873 3.82774 17.147 3.30224 15.4319 3.00126C15.4007 2.99545 15.3695 3.00997 15.3534 3.039C15.1424 3.4203 14.9087 3.91774 14.7451 4.30873C12.9004 4.02808 11.0652 4.02808 9.25832 4.30873C9.09465 3.90905 8.85248 3.4203 8.64057 3.039C8.62448 3.01094 8.59328 2.99642 8.56205 3.00126C6.84791 3.30128 5.20756 3.82678 3.67693 4.54101C3.66368 4.54681 3.65233 4.5565 3.64479 4.56907C0.533392 9.29283 -0.31895 13.9005 0.0991801 18.451C0.101072 18.4733 0.11337 18.4946 0.130398 18.5081C2.18321 20.0401 4.17171 20.9701 6.12328 21.5866C6.15451 21.5963 6.18761 21.5847 6.20748 21.5585C6.66913 20.9179 7.08064 20.2424 7.43348 19.532C7.4543 19.4904 7.43442 19.441 7.39186 19.4246C6.73913 19.173 6.1176 18.8662 5.51973 18.5178C5.47244 18.4897 5.46865 18.421 5.51216 18.3881C5.63797 18.2923 5.76382 18.1926 5.88396 18.0919C5.90569 18.0736 5.93598 18.0697 5.96153 18.0813C9.88928 19.9036 14.1415 19.9036 18.023 18.0813C18.0485 18.0687 18.0788 18.0726 18.1015 18.091C18.2216 18.1916 18.3475 18.2923 18.4742 18.3881C18.5177 18.421 18.5149 18.4897 18.4676 18.5178C17.8697 18.8729 17.2482 19.173 16.5945 19.4236C16.552 19.4401 16.533 19.4904 16.5538 19.532C16.9143 20.2414 17.3258 20.9169 17.7789 21.5576C17.7978 21.5847 17.8319 21.5963 17.8631 21.5866C19.8241 20.9701 21.8126 20.0401 23.8654 18.5081C23.8834 18.4946 23.8948 18.4742 23.8967 18.452C24.3971 13.1911 23.0585 8.6212 20.3482 4.57004C20.3416 4.5565 20.3303 4.54681 20.317 4.54101ZM8.02002 15.6802C6.8375 15.6802 5.86313 14.577 5.86313 13.222C5.86313 11.8671 6.8186 10.7639 8.02002 10.7639C9.23087 10.7639 10.1958 11.8768 10.1769 13.222C10.1769 14.577 9.22141 15.6802 8.02002 15.6802ZM15.9947 15.6802C14.8123 15.6802 13.8379 14.577 13.8379 13.222C13.8379 11.8671 14.7933 10.7639 15.9947 10.7639C17.2056 10.7639 18.1705 11.8768 18.1516 13.222C18.1516 14.577 17.2056 15.6802 15.9947 15.6802Z" fill="#fff"></path> </g> <defs> <clipPath id="clip0_525_68"> <rect width="24" height="24" fill="white"></rect> </clipPath> </defs> </g></svg>
        } />
        <hr className='h-1 text-zinc-800/90 w-9'/>
        {/**
        Динамичные ссылки
        */}

          {/* <SideButtons title='Create Server' href='/servers/create' /> */}


       {/**
        Статичные ссылки
        */}
        <SideButtons title='Create Server' classname={pathname.startsWith("/servers/create") ? "bg-blue-500" : "bg-zinc-800 "} href='/servers/create' icon={
          <AiFillPlusCircle className='text-white ' size={18}  />
        }/>
        <SideButtons title='Community' href='/community' classname={pathname.startsWith("/community") ? "bg-blue-500" : "bg-zinc-800 "} icon={
          <FaCompass size={18} className='text-white'/>
        }/>
        <SideButtons title='Download' href='/download' classname={pathname.startsWith("/download") ? "bg-blue-500" : "bg-zinc-800 "}  icon={
          <LiaDownloadSolid size={18} className='text-white'/>
        }/>
    </div>
  )
}

export default SideBarNav