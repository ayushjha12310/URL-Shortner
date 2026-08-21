import React from 'react'
import Link from 'next/link'
import logo from "../assets/logo.png"
const Navbar = () => {
  return (
    <nav className='h-[8vh] bg-purple-500 flex items-center justify-between md:justify-around fixed w-full'>
        <div className="logo flex items-center justify-center gap-2">
            <img className='object-cover' src={logo.src} width={60} height={60} alt="" />
            <h1 className='font-bold text-2xl text-white hidden md:block'><Link href="/"><li>SnapLink</li></Link></h1>
        </div>
      <ul className='flex items-center justify-center gap-2 text-[12px] md:text-[17px] md:gap-5 text-white'>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/generate">Shorten</Link></li>
        <li><Link href="/contact">Contact</Link></li>
        <li className='flex gap-5'>
             <button className='cursor-pointer bg-purple-400 shadow-lg py-0.5 rounded-lg px-2.5 font-medium hidden md:block'><Link href="/generate"><p>Try Now</p></Link></button>
             <Link href="/"><button className='cursor-pointer bg-purple-400 shadow-lg py-0.5 rounded-lg px-2.5 font-medium hidden md:block'>GitHub</button></Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
