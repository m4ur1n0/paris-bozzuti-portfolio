
import React from 'react'
import projects from "@/data/projects.json"
import { notFound } from 'next/navigation';
import IndividualSkill from '@/components/IndividualSkill';

export async function generateStaticParams() {
    return Object.keys(projects).map((id) => ({id}));
}

export default async function page({params}) {

    // const [project, setProject] = useState(projects["diamond_bid_creator"]);
    const {id} = await params;
    const project = projects[id]
    

    if (!project) notFound();

  return (
    <main className='flex flex-col items-center w-dvw px-[5%] h-full pt-[16dvh] lg:pt-[18dvh] mb-[5%]'>

        <section className='desktop-view hidden lg:flex justify-between w-full'>
            <div className='flex flex-col gap-5 w-[55%]'>
                <h1 className='font-antique !text-[5.5rem]'>
                    {project.title}
                </h1>
                <hr className='w-[75px] border-2 m-0 block mt-4 mb-8' />

                {
                    project.description.map((d, i) => {
                            return d.startsWith("http") ?
                            (
                                <a href={d} target={"_blank"} className="text-gray-700 text-2xl underline" key={i}>View Project.</a>
                            )
                            :
                            (
                                <p className='text-[1.4rem]' key={i}>
                                    {d}
                                </p>
                            )
                            
                    })
                }

                <hr className='w-[75px] border-2 m-0 block mt-4 mb-8' />

                <div className='flex gap-3 flex-wrap'>
                    {
                        project.skills.map((s, i) => (
                            <IndividualSkill skill={s} key={i} />
                        ))
                    }
                </div>




            </div>

            {/* <div className='images flex flex-wrap gap-2 gap-y-2 w-[40%] border overflow-hidden'>
                {
                    project.project_images.map((im, i) => (
                        <img className='object-scale-down' src={im} alt={`${project.title} Image`} key={i} />
                    ))
                }
            </div> */}

            {/* for now -- hard code 3 versions for the 3 possible number of images  */}

            {project.project_images.length === 1 ?
                
                <div className='flex justify-center items-center w-[35%] overflow-hidden'>
                    {
                        project.project_images.map((im, i) => (
                            <img className='object-contain' src={im} alt={`${project.title} Image`} key={i} />
                        ))
                    }
                </div>

                :

                (project.project_images.length === 2) ?
                    <div className='flex flex-col justify-center gap-2 w-[35%] overflow-hidden'>
                        {
                            project.project_images.map((im, i) => (
                                <img className='object-contain' src={im} alt={`${project.title} Image`} key={i} />
                            ))
                        }
                    </div>

                :
                // else 3
                <div className='flex flex-col gap-2 justify-center items-center w-[40%] overflow-hidden'>
                    {/* first two */}
                    <div className='flex gap-2 justify-center items-center w-full overflow-hidden'>
                        <img className='object-contain max-w-[49%]' src={project.project_images[0]} alt={`${project.title} Image`} />

                        <img className='object-contain max-w-[49%]' src={project.project_images[1]} alt={`${project.title} Image`} />
                    </div>

                    {/* last  */}
                    <img className='object-contain' src={project.project_images[2]} alt={`${project.title} Image`} />
                    
                </div>
            
            }

        </section>


      
    </main>
  )
}
