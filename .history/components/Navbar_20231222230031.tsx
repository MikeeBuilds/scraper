import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const navIcons = [
  { src: '/assets/icons/search.svg', alt: 'search' ,}
  { src: ''}
]

const Navbar = () => {
  return (
    <header className='w-full'>
      <nav className='nav'>
        <Link href="/" className='flex items-center gap-1'>
         <Image
           src="/assets/icons/logo.svg"
           height={27}
           width={27}
           alt='logo'
         />

         <p className='nav-logo'>  
           Price<span className='text-primary'>Hoot</span>
         </p>
        </Link>

        <div className='flex items-center gap-5'>

        </div>
      </nav>
    </header>
  )
}

export default Navbar