import React from 'react';
import { AiOutlineMenu, AiOutlineBell } from "react-icons/ai";
import logo from "../assets/logo.png";
import { CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import k from "../assets/k.png";

function Navbar() {
  return (
    <div className='flex justify-between px-6 py-2'>
        {/* Left Section */}
        <div className='flex items-center space-x-4'>
            <AiOutlineMenu className='text-xl cursor-pointer' />
            <img src={logo} alt="YouTube Logo" className="h-6 cursor-pointer" />
        </div>

        {/* Search Section */}
        <div className='flex items-center w-[35%]'>
            <div className='px-3 py-2 border rounded-l-full w-full'>
                <input type="text" placeholder='Search' className='w-full outline-none' />
            </div>
            <button className='hover:bg-gray-200 px-3 py-2.5 border rounded-r-full duration-200'>
                <CiSearch className='text-xl cursor-pointer' />
            </button>
            <IoMdMic 
                size={"42px"}
                className='ml-3 p-2 border rounded-full cursor-pointer'
            />
        </div>

        {/* Right Section */}
        <div className='flex items-center space-x-6'>
            <RiVideoAddLine className='text-xl cursor-pointer' />
            <AiOutlineBell className='text-xl cursor-pointer' />
            <img src={k} alt="Profile" className='rounded-full w-8 h-8 cursor-pointer' />
        </div>
    </div>
  );
}

export default Navbar;
