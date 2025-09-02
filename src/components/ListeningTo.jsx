"use client"
import React, { useEffect, useState } from 'react'

const ListeningTo = () => {

    const [albumData, setAlbumData] = useState(null);

    useEffect(() => {
      async function loadUp() {
        let a = await fetch("/api/top-tracks");
        let albs = await a.json();

        setAlbumData(albs);
      }
    
      loadUp();

    }, [])
    

  return (
    <div className='w-full px-6 py-4 bg-gray-200 rounded-xl flex flex-col h-[16dvh] md:h-[25dvh] lg:h-[32dvh] shadow-md md:shadow-lg lg:mb-10'>
        <p className='!font-[600] text-[1rem] md:text-[1.9rem] lg:text-[1.3rem]'>What I'm listening to...</p>
      
        <div className='flex justify-center gap-2'>
            {albumData &&
                albumData.map((alb, i) => (
                    <div className='h-full max-h-full rounded-md cursor-pointer hover:scale-[1.05] transition-all duration-200 ease-in' key={i}>
                        <a href={alb.url} target="_blank">
                            <img src={alb.images[1].url} alt={`Paris' recent album, ${alb.title}`} className="object-contain" />
                        </a>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default ListeningTo
