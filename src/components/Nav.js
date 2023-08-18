import React from 'react';

import { BiHomeAlt ,BiUser } from 'react-icons/bi'
import { BsClipboardData ,BsBriefcase, BsChatSquare } from 'react-icons/bs'

import { Link } from 'react-scroll';

const Nav = () => {
  return <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
    <div className="container mx-auto">
      <div className="w-full bg-black/20 backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between text-2xl text-white/50">
        <Link activeClass='active' smooth={true} spy={true} to='home' className='flex justify-center cursor-pointer items-center w-[60px] h-[60px]'>
         <BiHomeAlt />
        </Link>
        <Link activeClass='active' smooth={true} spy={true} to='about' className='flex justify-center cursor-pointer items-center w-[60px] h-[60px]'>
         <BiUser />
        </Link>
        <Link activeClass='active' smooth={true} spy={true} to='services' className='flex justify-center cursor-pointer items-center w-[60px] h-[60px]'>
         <BsClipboardData />
        </Link>
        <Link activeClass='active' smooth={true} spy={true} to='work' className='flex justify-center cursor-pointer items-center w-[60px] h-[60px]'>
         <BsChatSquare />
        </Link>
        <Link activeClass='active' smooth={true} spy={true} to='contact' className='flex justify-center cursor-pointer items-center w-[60px] h-[60px]'>
         <BsBriefcase />
        </Link>
      </div>
    </div>
  </nav>;
};

export default Nav;
