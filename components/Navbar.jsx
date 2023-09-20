import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '@/public/book.png'

const Navbar = () => {
  return (
    <div className='bg-slate-200  shadow-xl flex justify-between mb-3'>
      <div>
        <Link href='/'>
          <Image src='/book.png' height={70} width={180} alt='logo' className='h-auto' />
        </Link>

      </div>
      <div className='flex items-center mr-10 gap-3'>
        <Link href='/about' className='hidden md:block' >About us</Link>
        <Link href='/contact' className='bg-green-500 p-2 rounded-lg '>  Get a Book</Link>
      </div>



    </div>
  )
}

export default Navbar