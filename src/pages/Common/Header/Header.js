import React from 'react';
import { HiHome } from 'react-icons/hi';
import { IoBookSharp } from 'react-icons/io5';
import { AiTwotoneContacts, AiFillProject } from 'react-icons/ai';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='px-5 md:px-10 xl:px-0 max-w-7xl mx-auto py-2 md:py-5 md:text-xl'>
            <div className='flex justify-between items-center'>
                <NavLink to='/home' className='flex flex-col justify-center items-center gap-1 hover:text-sky-300 scale-90 hover:scale-110 ease-in duration-200 cursor-pointer'>
                    <HiHome className='w-6 h-6 md:w-8 md:h-8'/>
                    <h3>Home</h3>
                </NavLink>
                <NavLink to='/projects' className='flex flex-col justify-center items-center gap-1 hover:text-sky-300 scale-90 hover:scale-110 ease-in duration-200 cursor-pointer'>
                    <AiFillProject className='w-6 h-6 md:w-8 md:h-8'/>
                    <h3>Projects</h3>
                </NavLink>
                <NavLink to='/blogs' className='flex flex-col justify-center items-center gap-1 hover:text-sky-300 scale-90 hover:scale-110 ease-in duration-200 cursor-pointer'>
                    <IoBookSharp className='w-6 h-6 md:w-8 md:h-8'/>
                    <h3>Blogs</h3>
                </NavLink>
                <NavLink to='/about' className='flex flex-col justify-center items-center gap-1 hover:text-sky-300 scale-90 hover:scale-110 ease-in duration-200 cursor-pointer'>
                    <BsFillInfoCircleFill className='w-6 h-6 md:w-8 md:h-8'/>
                    <h3>About Me</h3>
                </NavLink>
                <NavLink to='/Contact' className='flex flex-col justify-center items-center gap-1 hover:text-sky-300 scale-90 hover:scale-110 ease-in duration-200 cursor-pointer'>
                    <AiTwotoneContacts className='w-6 h-6 md:w-8 md:h-8'/>
                    <h3>Contact</h3>
                </NavLink>
            </div>
        </div>
    );
};

export default Header;