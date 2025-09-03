import Projects from '@/components/Projects'
import WorkExperience from '@/components/WorkExperience'
import React from 'react'

const page = () => {

    

  return (
    <main className='w-dvw px-[5%] h-full flex flex-col gap-[5%] pt-[16dvh] lg:pt-[18dvh]'>

        {/* WORK EXPERIENCE */}

        <h1 className='font-antique !text-[2.5rem] md:!text-[3rem] lg:!text-[4rem]'>
            Work Experience
        </h1>
        <hr className='w-[75px] border-2 m-0 block mt-4 mb-8' />
        <WorkExperience />



        {/* PROJECTS  */}

        <h1 className='font-antique !text-[2.5rem] md:!text-[3rem] lg:!text-[4rem]'>
            Projects
        </h1>
        <hr className='w-[75px] border-2 m-0 block mt-4 mb-8' />
        <Projects />

      
    </main>
  )
}

export default page
