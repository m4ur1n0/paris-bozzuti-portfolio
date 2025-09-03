import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {

    const projects = [
        {
            title : "Battery Finder App",
            description : [
                "As a product management intern at Publicis Sapient, I spent a summer leading a team of software engineers through the development and deployment of a mobile-first web app for a confidential client.",
                "After completing market and product research, I guided the team through feature development and implementation, worked on Figma UX designs, and tracked progress on tools like Jira and Confluence.",
                "Working in a SAFe Agile framework, we completed 6 1-week sprints and developed a mobile web app for users to find car batteries, utilizing OCR, OpenAI, various APIs, and deploying on Azure."
            ],
            thumbnail : "/vectors/no-image.svg",
            project_images : ["/vectors/no-image.svg", "/vectors/no-image.svg", "/vectors/no-image.svg",],
            skills : ["Product Design", "UX Design", "App Development"] 
        },
        {
            title : "Task Manager App",
            description : [
                "",
                "",
                ""
            ],
            thumbnail : "/vectors/no-image.svg",
            project_images : ["/vectors/no-image.svg", "/vectors/no-image.svg", "/vectors/no-image.svg",],
            skills : [] 
        },
        {
            title : "Interactive Data Viz",
            description : [
                "",
                "",
                ""
            ],
            thumbnail : "/vectors/no-image.svg",
            project_images : ["/vectors/no-image.svg", "/vectors/no-image.svg", "/vectors/no-image.svg",],
            skills : [] 
        },
    ]

  return (
    <section className='flex flex-wrap justify-center gap-y-5 gap-[5%] md:gap-[2%] mb-[5%]'>

        {projects.map((proj, i) => (
            <ProjectCard project={proj} key={i} />
        ))}
      
    </section>
  )
}

export default Projects
