import React from 'react'
import LeftSideLinks from './left-side-links'
import { BsPersonArmsUp } from 'react-icons/bs'
import { GoRocket } from 'react-icons/go'
import { GiShop } from 'react-icons/gi'
import Link from 'next/link'

function LeftSideBar() {
  return (
    <div className=' flex flex-col w-full h-full h-min-screen pl-16'>
      <div className='w-full py-2 px-3  border rounded-tl-lg border-t-zinc-800/90 border-l-zinc-800/90 border-b-zinc-800/90'>
        <div className='bg-bg-secondary px-4 py-2 w-full text-center  rounded-md text-zinc-200 '>
        <p className=' text-xs font-semibold tracking-wide'>Find or start conversation</p>
      </div>
      </div>
      <div className='border border-l-zinc-800/90 h-full flex flex-col gap-1 justify-start p-2'>
      <LeftSideLinks title='Friends' href='/main/friends' icon={<BsPersonArmsUp size={18} className='text-zinc-400 group-hover:text-zinc-100' />}/>
      <LeftSideLinks title='Nitro' href='/main/nitro' icon={<GoRocket  size={18} className='text-zinc-400 group-hover:text-zinc-100'/>}/>
      <LeftSideLinks title='Shop' href='/main/shop' icon={<GiShop  size={18} className='text-zinc-400 group-hover:text-zinc-100'/>}/>
      
      <div className='w-full px-1 mt-2'>
          <hr className=' w-full h-1 text-zinc-800/90' />
      </div>
      <div className='w-full flex flex-row justify-between group items-center px-3 mt-2'>
        <p className='text-zinc-400/95 font-medium text-sm group-hover:text-zinc-100 group-hover:font-semibold'>Direct Messages</p>
        <Link href={`/main/create`} className='text-zinc-400/95 font-medium text-xl '>+</Link>
      </div>

      {/* Список чатов */}


      </div>
      
      
      

    </div>
  )
}

export default LeftSideBar