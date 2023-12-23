import React from 'react'

const Home = () => {
  return (
    <>
      <section className='px-6 md:px-20 py-24 border-2 border-red-500'>
        <div className='flex max-xl:flex-col gap-16'>
          <div className='flex flex-col justify-center'>
           <p className='smal-text'>
            Smart Shopping Begins Here
            <Image 
              src="/assets/icons/arrow-righ.svg"
              height={27}
              width={27}
              alt='logo'
            />
           </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home