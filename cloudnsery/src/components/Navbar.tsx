import React from 'react'
import { MenubarDemo } from './MenubarDemo'
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

function Navbar() {
    return (
        <div>
            <nav className='flex px-5 py-5 bg-slate-600 text-slate-200 gap-5'>
                <MenubarDemo />
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>



            </nav>
        </div>
    )
}

export default Navbar