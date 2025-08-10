"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Navbar = () => {

    const pathname = usePathname();


    const pages = [
        {
            path : '/about',
            title : "About"
        },
        {
            path : '/work',
            title : "Work"
        },
        {
            path : '/contact',
            title : "Contact"
        }
    ]

  return (
    <nav className='w-full relative md:h-[115px] flex justify-between items-center border p-10'>

        <Link href="/" className='home-link w-[50px] h-[50px] object-scale-down absolute top-[25px] left-[50px]'>
            <img src="/vectors/house.svg" alt="Home Link" className='' />
        </Link>
        

        <div className='site-links flex justify-center gap-24 w-full'>

            {
                pages.map((p, i) => (
                    <Link href={p.path} className='text-xl m-0 transition-all duration-400 ease-in-out ' key={i}
                        style={{
                            fontWeight : pathname === p.path ? "bold" : "normal"
                        }}
                    >
                        {p.title}
                    </Link>
                ))
            }

            
        </div>
      
    </nav>
  )
}

export default Navbar
