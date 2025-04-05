import React, { useState } from 'react';
import { CgMail } from "react-icons/cg";
import { IoMdTime } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from '../../assets/logo.svg';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header id='main'>
        <div>
            <div className='hidden md:flex container mx-auto flex items-center justify-center h-14 bg-white text-[16px] font-light text-black'>
                <ul className='flex items-center justify-center gap-16'>
                    <li className='cursor-pointer flex items-center gap-2.5'>
                        <CgMail className='text-[#3DB7EF] text-xl'/>
                        <span>speedyhiring.info@gmail.com</span>
                    </li>
                    <li className='cursor-default flex items-center gap-2.5'>
                        <IoMdTime className='text-[#3DB7EF] text-xl'/>
                        <span>Mon–Sat: 08:00–17:00</span>
                    </li>
                    <li className='cursor-pointer flex items-center gap-2.5'>
                        <FaPhoneAlt className='text-[#3DB7EF]'/>
                        <span>+16155383883</span>
                    </li>
                </ul>
            </div>

            <div className='hidden md:flex flex items-center justify-center py-3 bg-[#3DB7EF]'>
                <img src={logo} alt="logo image" />
            </div>

            <div className='bg-[#172646] h-[52px] flex items-center md:justify-center justify-between px-4 md:px-12'>
                <ul className='hidden md:flex items-center justify-center gap-7 text-white text-[16px] font-bold'>
                    <li><a href="#main"><span>Home</span></a></li>
                    <div className='text-gray-500'>|</div>
                    <li><a href="#about"><span>About Us</span></a></li>
                    <div className='text-gray-500'>|</div>
                    <li><a href="#services"><span>Our services</span></a></li>
                    <div className='text-gray-500'>|</div>
                    <li><a href="#why"><span>Why Us</span></a></li>
                    <div className='text-gray-500'>|</div>
                    <li><a href="#news"><span>News</span></a></li>
                    <div className='text-gray-500'>|</div>
                    <li><a href="#contact"><span>Contacts</span></a></li>
                </ul>

                <div className='md:hidden'>
                    <GiHamburgerMenu className='text-white text-2xl cursor-pointer' onClick={toggleMobileMenu} />
                </div>
            </div>

            {isMobileMenuOpen && (
                <div className='md:hidden bg-[#172646]'>
                    <ul className='flex flex-col items-center text-white text-[16px] font-bold py-4'>
                        <li><a href="#main"><span>Home</span></a></li>
                        <li><a href="#about"><span>About Us</span></a></li>
                        <li><a href="#services"><span>Our services</span></a></li>
                        <li><a href="#why"><span>Why Us</span></a></li>
                        <li><a href="#news"><span>News</span></a></li>
                        <li><a href="#contact"><span>Contacts</span></a></li>
                    </ul>
                </div>
            )}
        </div>
    </header>
  );
}

export default Header;
