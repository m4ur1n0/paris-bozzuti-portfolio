import React from 'react'
import Marquee from 'react-fast-marquee'

const HomeSkills = () => {

    const skills = [ // in the future this could be incliude links or diff behaviors

        "Product Management",
        "Data Analysis & Viz",
        "Python",
        "React",
        "SQL",
        "R",
        "Figma",
        "Content Marketing",
        "Algorithms",

    ]

  return (
    <section className='home-skills-section w-full flex flex-col items-center px-24 mb-24'>

        <h3 className='font-antique w-full text-left !text-[1.7rem] mb-8'>Skills and Certifications</h3>

        <Marquee className="overflow-visible h-[75px] py-2"
            pauseOnHover={true}
            gradient={true}
            gradientColor="#ffffff"
            gradientWidth="50px"
        >

            {
                skills.map((skill, i) => (
                    <div className='px-4 py-2 bg-gray-100 border border-gray-200 shadow-sm hover:bg-gray-50 hover:border-gray-100 hover:scale-[1.05] transition-all duration-100 ease-linear mx-2 rounded-lg cursor-pointer no-select' key={i}>
                        {skill}
                    </div>
                ))
            }

        </Marquee>

      
    </section>
  )
}

export default HomeSkills
