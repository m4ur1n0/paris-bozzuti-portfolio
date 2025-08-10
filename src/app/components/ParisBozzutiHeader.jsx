import React from 'react'

const ParisBozzutiHeader = () => {
  return (
    <header className='paris-bozzuti-header flex justify-between items-center gap-24'>

        <div className='paragraph-content flex flex-col'>

            <div className='hi-i-am flex items-center justify-start gap-4 border'>
                <hr className='w-[50px] border-2' />
                <p className='border m-0'>Hi, I am</p> 
            </div>



        </div>

        <div className='paris-bozutti-headshot max-w-1/3 object-contain'>

            <img src="/images/paris-personality.png" className='' alt="Paris Bozzuti personality picture" />

        </div>
      
    </header>
  )
}

export default ParisBozzutiHeader
