import Image from 'next/image'
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
              src="/assets/icons/arrow-right.svg"
              height={16}
              width={16}
              alt='arrow-right'
            />
           </p>

           <h1 className='head-text'>
             Unleash the Power <span className='text-primary'>Price</span>Hoot
           </h1>

           <p className='mt-6 '>
            PriceHoot, self-serve ecommerce platform, helps you track your product prices, get notified when they change, and save money on your shopping.
           </p>

           SearchBar
          </div>

          HeroCarousel
        </div>
      </section>

      <section className=''></section>
    </>
  )
}

export default Home