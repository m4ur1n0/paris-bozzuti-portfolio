import React from 'react'
import projects from "@/data/projects.json"
import ProjectCard from '@/components/ProjectCard';

// so we don't have to maintain an up-to-date list of skills, just skills by proj
function getSkillsMap() {
    let skills = {};

    // since we're O(n) searching already, may as well do both at once
    for (let p in projects) {
        // console.log(p);
        for(let s of projects[p].skills) {

            if (!skills.hasOwnProperty(s)) {
                skills[s] = [p];
            } else {
                skills[s].push(p);
            }

        }
    }

    return skills;
}

export default async function page({searchParams}) {

    // skills map is of the nature {skill : [projId, projId, projId]}
    const skillsMap = getSkillsMap();
    // console.log(JSON.stringify(skillsMap))

    const {skill} = await searchParams;


  return (
    <main className='w-dvw px-[5%] h-full flex flex-col items-center lg:items-start pt-[16vh] lg:pt-[18vh] mb-4'>
        <div className='flex flex-col items-center lg:items-start justify-center gap-[5%] h-[20vh] '>
            <h1 className='font-antique !text-[2.5rem] md:!text-[3rem] lg:!text-[4rem] text-center lg:text-left mb-[5%] lg:mb-0'>
                Projects using: <span className='font-bold'>{skill}</span>
            </h1>
            <hr className=' w-[75px] border-2 m-0 block mt-4 lg:mb-8' />
        </div>

        <div className='flex flex-col items-center lg:flex-row lg:px-8 w-full h-[50vh] gap-18 md:gap-32 lg:gap-4 mb-4 lg:mb-0 py-4 overflow-y-scroll overflow-x-hidden lg:overflow-x-scroll pt-10 md:pt-16 lg:pt-0'>

            {skillsMap.hasOwnProperty(skill) ?
                skillsMap[skill].map((projId, i) => (
                    <div className='flex items-start justify-center overflow-none w-[170%] h-[170%] lg:w-auto lg:h-auto' key={i}>
                        <div className='scale-[1.7] lg:scale-[1]'>
                            <ProjectCard project={projects[projId]} projId={projId} />
                        </div>
                    </div>
                ))
                :
                <p className='text-[1.8rem] md:text-[2.2rem] lg:text-[2.5rem] text-center'>
                    Sorry, <span className='font-bold'>{skill}</span> isn't listed with any of my projects.
                </p>
            }

        </div>

    </main>
  )
}


