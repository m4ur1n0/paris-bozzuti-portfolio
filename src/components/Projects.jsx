import React from 'react'
import ProjectCard from './ProjectCard'
import projects from "@/data/projects.json"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'

const Projects = () => {


    return (
        <section className='w-[90%] ml-[5%]'>

            <Carousel
                opts={{
                    loop : true,
                    // align: "start",
                }}
                className="p-10 h-full overflow-visible"
            >
                <CarouselContent className="overflow-visible">
                    {
                        Object.entries(projects).map((proj, i) => (
                            <CarouselItem className="flex-none h-auto" key={i}>
                                <ProjectCard project={proj[1]} projId={proj[0]} />
                            </CarouselItem>
                        ))
                    }
                </CarouselContent>

                <CarouselPrevious className="ml-[10%] md:ml-0" />
                <CarouselNext className="mr-[10%] md:mr-0" />
            </Carousel>

        </section>
    )
}

export default Projects
