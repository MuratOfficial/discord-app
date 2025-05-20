import React from 'react'
import RightSideBar from '../../components/sidebar/right-side-bar';
import LeftSideBar from '@/components/sidebar/left-side-bar';

function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="w-full min-h-screen grid grid-cols-4">
      <LeftSideBar/>

      <div className=" col-span-2 bg-bg-secondary">

        {children}
      </div>
      <RightSideBar/>
    </main>
  )
}

export default MainLayout