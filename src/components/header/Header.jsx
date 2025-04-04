import React from 'react'
import { CgMail } from "react-icons/cg";
import { IoMdTime } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import logo from '../../assets/logo.svg'

const Header = () => {
  return (
    <header>
        <div>
            {/* top-header */}
            <div className='container mx-auto flex items-center justify-center h-14 bg-white text-[16px] font-light text-black'>
                <ul className='flex items-center justify-center gap-16'>
                    <li className='cursor-pointer flex items-center gap-2.5'><CgMail className='text-[#3DB7EF] text-xl'/><span>speedyhiring.info@gmail.com</span></li>
                    <li className='cursor-default flex items-center gap-2.5'><IoMdTime className='text-[#3DB7EF] text-xl'/><span>Mon–Sat: 08:00–17:00</span></li>
                    <li className='cursor-pointer flex items-center gap-2.5'><FaPhoneAlt className='text-[#3DB7EF]'/><span>+16155383883</span></li>
                </ul>
            </div>

            {/* medium-header */}
            <div className='flex items-center justify-center py-3 bg-[#3DB7EF]'>
                <img src={logo} alt="logo image" />
            </div>

            {/* main-header */}
            <div className='bg-[#172646] h-[52px] flex items-center justify-center'>
                <ul className='flex items-center justify-center gap-7 text-white text-[16px] font-bold'>
                    <li>
                        <a href=""><span>Home</span></a>
                    </li>
                    <div className='text-gray-500'>|</div>
                    <li>
                        <a href=""><span>About Us</span></a>
                    </li>
                    <div className='text-gray-500'>|</div>
                    <li>
                        <a href=""><span>Our services</span></a>
                    </li>
                    <div className='text-gray-500'>|</div>
                    <li>
                        <a href=""><span>Why Us</span></a>
                    </li>
                    <div className='text-gray-500'>|</div>
                    <li>
                        <a href=""><span>News</span></a>
                    </li>
                    <div className='text-gray-500'>|</div>
                    <li>
                        <a href=""><span>Contacts</span></a>
                    </li>
                </ul>
            </div>
        </div>
    </header>
  )
}

export default Header