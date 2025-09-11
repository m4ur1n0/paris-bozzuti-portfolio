"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const ProjectCard = ({project, projId}) => {
    const router = useRouter();

    function navToProj() {
        router.push(`/work/${projId}`);
    }
  return (
    <div className='flex flex-col w-[35dvw] md:w-[23dvw] h-[15vh] lg:h-[30vh] lg:max-h-[200px] overflow-hidden items-center justify-center gap-[5%] px-[4%] pt-[3%] md:pt-[1%] my-4 border border-gray-200 bg-gray-100 rounded-lg shadow-lg cursor-pointer hover:scale-[1.05] transition-all duration-200 ease-in' onClick={navToProj}>

        <div className='h-[70%] w-full flex items-center justify-center bg-gray-200 overflow-hidden'>
            <img src={project.thumbnail} className={project.thumbnail === "/vectors/no-image.svg" ? "w-[20%]" : "object-scale-down w-full"} alt={`${project.title} Thumbnail`} /> 
        </div>

        <p className='!text-[0.8rem] md:!text-[1rem] lg:!text-[1.2rem] text-center'>
            {project.title}
        </p>
      
    </div>
  )
}

export default ProjectCard
