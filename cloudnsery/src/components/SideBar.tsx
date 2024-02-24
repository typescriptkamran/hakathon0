import Link from 'next/link'
import React from 'react'

function SideBar() {
  return (
    <div className='flex flex-col h-screen gap-5 bg-slate-500 py-4 px-4 items-center w-48'>
        <div>
            <Link href="/gallery">Gallery</Link>
        </div>
    </div>
  )
}

export default SideBar