"use client"
import React, { useEffect, useState } from 'react'
import { ThreeDot } from 'react-loading-indicators';

const ListeningTo = () => {

    const [albumData, setAlbumData] = useState([]);

    useEffect(() => {
      async function loadUp() {
        let a = await fetch("/api/recent-tracks");
        let albs = await a.json();


        // console.log(albs);
        setAlbumData(albs);
      }
    
      loadUp();

    }, [])
    

  return (
    <div className='w-full px-6 py-4 bg-gray-200 rounded-xl flex flex-col h-[16dvh] md:h-[25dvh] lg:h-[32dvh] shadow-md md:shadow-lg lg:mb-10'>
        <p className='!font-[600] text-[1rem] md:text-[1.9rem] lg:text-[1.3rem]'>What I'm listening to...</p>
      
        <div className='flex justify-center gap-2 items-center h-full'>
            {Array.isArray(albumData) && albumData.length > 0 ?
                albumData.map((alb, i) => (
                    <div className='flex-1 rounded-md cursor-pointer hover:scale-[1.05] transition-all duration-200 ease-in' key={i}>
                        <a href={alb.url} target="_blank">
                            <img src={alb.images[1].url} alt={`Paris' recent album, ${alb.title}`} className="object-fill" />
                        </a>
                    </div>
                ))
                :
                <ThreeDot color="#6B7280" size="medium" text="" textColor="" />
            }
        </div>
    </div>
  )
}

export default ListeningTo
