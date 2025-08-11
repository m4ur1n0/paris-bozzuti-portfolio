"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import {motion, useScroll, useTransform} from 'framer-motion'

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
    ];

    // track our y scroll
    const {scrollY } = useScroll();

    const navHeight = useTransform(scrollY, [0, 200], ['115px', '60px']);
    const navWidth = useTransform(scrollY, [0, 200], ['100%', '40%']);
    const navBorderRadius = useTransform(scrollY, [0, 200], ['0px', '15px']);
    const navBorderColor = useTransform(scrollY, [0, 200], ["#374151", "#9CA3AF"]);
    const navPosition = useTransform(scrollY, [0, 200], ['static', 'fixed']);
    const navTop = useTransform(scrollY, [0, 200], ['0px', '25px'])
    const navBoxShadow = useTransform(
        scrollY,
        [0, 200],
        ['0px 0px 0px rgba(0,0,0,0)', '0px 4px 10px rgba(0,0,0,0.2)']
    );
    const navPadding = useTransform(scrollY, [0, 200], ["40px", "24px"]);


    // for the home icon
    const houseDim = useTransform(scrollY, [0, 200], ['50px', '40px']);
    const houseTop = useTransform(scrollY, [0, 200], ['32px', '8px']);
    const houseLeft = useTransform(scrollY, [0, 200], ['50px', '15px']);


  return (
    <motion.nav className='flex justify-between items-center p-10'
        style={{
            height : navHeight,
            width : navWidth,
            borderRadius: navBorderRadius,
            position : navPosition,
            padding : navPadding,
            top : navTop,
            left : '50%',
            transform : 'translateX(-50%)',
            boxShadow : navBoxShadow,
            backgroundColor : '#ffffff',
            border : `1px solid #ddd`,
            zIndex : 50
        }}
        transition={{type : "spring", stiffness: 200, damping : 30}}
    
    >

        <motion.div className='home-icon absolute'
            style={{
                width : houseDim,
                height : houseDim,
                top : houseTop,
                left : houseLeft
            }}
            transition={{type : "spring", stiffness: 200, damping : 30}}


        >
            <Link href="/" className='home-link w-full h-full object-scale-down'>
                <img src="/vectors/house.svg" alt="Home Link" className='' />
            </Link>
        </motion.div>
        

        <div className='site-links flex justify-center gap-24 w-full'>

            {
                pages.map((p, i) => (
                    <Link href={p.path} className='text-xl m-0 transition-all duration-300 ease-in-out hover:scale-[1.05]' key={i}
                        style={{
                            fontWeight : pathname === p.path ? "bold" : "normal"
                        }}
                    >
                        {p.title}
                    </Link>
                ))
            }

            
        </div>
      
    </motion.nav>
  )
}

export default Navbar
