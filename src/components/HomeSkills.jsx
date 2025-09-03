import React from 'react'
import Marquee from 'react-fast-marquee'

const HomeSkills = () => {

    const skills = [

        "Product Management",
        "Data Analysis & Viz",
        "Python",
        "React",
        "SQL",
        "R",
        "POPM SAFe 6",
        "Figma",
        "Content Marketing",
        "Algorithms",

    ]

  return (
    <section className='home-skills-section w-full flex flex-col items-center px-[5%] mt-12 lg:mt-0 mb-24'>

        <h3 className='font-antique w-full text-center !text-[1.3rem] md:!text-[2.2rem] lg:text-left lg:!text-[1.7rem] mb-8'>Skills and Certifications</h3>

        <Marquee className="overflow-visible h-[75px] lg:py-2"
            pauseOnHover={true}
            gradient={true}
            gradientColor="#ffffff"
            gradientWidth="50px"
        >

            {
                skills.map((skill, i) => (
                    <div className='px-2 py-1 lg:px-4 lg:py-2 bg-gray-100 border border-gray-200 shadow-sm hover:bg-gray-50 hover:border-gray-100 hover:scale-[1.05] transition-all duration-100 ease-linear mx-2 rounded-lg cursor-pointer no-select' key={i}>
                        {skill}
                    </div>
                ))
            }

        </Marquee>

      
    </section>
  )
}

export default HomeSkills
