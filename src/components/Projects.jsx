import React from 'react'
import ProjectCard from './ProjectCard'
import projects from "@/data/projects.json"

const Projects = () => {


  return (
    <section className='flex flex-wrap justify-center gap-y-5 gap-[5%] md:gap-[2%] mb-[5%]'>

        {Object.entries(projects).map((proj, i) => (
            <ProjectCard project={proj[1]} projId={proj[0]} key={i} />
        ))}
      
    </section>
  )
}

export default Projects
