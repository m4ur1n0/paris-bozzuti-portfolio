"use client"
import { getTopAlbums } from '@/lib/spotifyGet'
import React from 'react'

const ListeningTo = () => {

    async function testSpot() {

        const resp = await getTopAlbums("short", 5);

        console.log(JSON.stringify(resp));

    }

  return (
    <div className='w-full px-6 py-4 bg-gray-200 rounded-xl flex flex-col'>
        <p className='!font-[600] text-[1rem] md:text-[1.9rem] lg:text-[1.3rem]'>What I'm listening to...</p>
      
        <div className='flex justify-center'>
            <button onClick={testSpot}>Click</button>
        </div>
    </div>
  )
}

export default ListeningTo
