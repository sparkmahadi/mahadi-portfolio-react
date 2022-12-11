import React from 'react';
import { HiHome } from 'react-icons/hi';
import { IoBookSharp } from 'react-icons/io5';
import { AiTwotoneContacts, AiFillProject } from 'react-icons/ai';

const Header = () => {
    return (
        <div className='px-10 md:px-10 max-w-7xl mx-auto py-2 md:py-5 md:text-xl'>
            <div className='flex justify-between items-center'>
                <div className='flex flex-col justify-center items-center gap-1 hover:text-sky-300 scale-90 hover:scale-110 ease-in duration-100'>
                    <HiHome className='w-6 h-6 md:w-8 md:h-8'/>
                    <h3>Home</h3>
                </div>
                <div className='flex flex-col justify-center items-center gap-1 hover:text-sky-300 scale-90 hover:scale-110 ease-in duration-100'>
                    <AiFillProject className='w-6 h-6 md:w-8 md:h-8'/>
                    <h3>Projects</h3>
                </div>
                <div className='flex flex-col justify-center items-center gap-1 hover:text-sky-300 scale-90 hover:scale-110 ease-in duration-100'>
                    <IoBookSharp className='w-6 h-6 md:w-8 md:h-8'/>
                    <h3>Blogs</h3>
                </div>
                <div className='flex flex-col justify-center items-center gap-1 hover:text-sky-300 scale-90 hover:scale-110 ease-in duration-100'>
                    <AiTwotoneContacts className='w-6 h-6 md:w-8 md:h-8'/>
                    <h3>Contact</h3>
                </div>
            </div>
        </div>
    );
};

export default Header;