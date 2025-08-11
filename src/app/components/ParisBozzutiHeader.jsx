import React from 'react'

const ParisBozzutiHeader = () => {
  return (
    <header className='paris-bozzuti-header flex justify-center items-center w-full gap-32 mb-5 scale-[0.8]'>

        <div className='paragraph-content flex flex-col w-1/2'>

            {/* THE WHOLE DIV BELOW IS THE WEIRDEST MOST FUCKED UP LAYOUT I'VE EVER HAD TO DO. THIS IS NEITHER PROFESSIONAL NOR IDEAL */}
            <div className='hi-i-am flex items-center justify-start gap-4 mb-0 '>
                <div className='flex items-center p-0 h-full '>
                  <hr className='w-[75px] border-2 m-0 block' />

                </div>
                <p className=' mt-5 leading-none text-[1.7rem]'>Hi, I am</p> 

            </div>

            <h1 className='paris-bozzuti !text-[5.5rem] font-antique mb-4'>
              Paris Bozzuti
            </h1>


            <p className='text-[1.7rem]'>
              a senior at Northwestern, studying Data Science and Radio/Television/Film.
            </p>

            <hr className='w-[75px] border-2 m-0 block mt-4 mb-8' />

            <p className='text-[1.7rem]  '>
            With a passion for analytics and data as well as creative design, I work at the intersection of digital technology and media to generate data-backed creative solutions to business problems, whether in product development, marketing or analytics.
            </p>





        </div>

        <div className='paris-bozutti-headshot max-w-1/3 object-contain'>

            <img src="/images/paris-personality.png" className='' alt="Paris Bozzuti personality picture" />

        </div>
      
    </header>
  )
}

export default ParisBozzutiHeader
