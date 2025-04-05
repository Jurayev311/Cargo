import React from 'react';
import logo from '../../assets/logo.svg'
import { FaFacebookF, FaTwitter, FaPinterestP, FaVimeoV, FaGoogle, FaRss } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='flex flex-col items-center justify-center py-6 bg-gray-100 text-gray-600'>
      <img src={logo} alt='Town Cargo Logo' className='w-20 mb-4' />
      <div className='flex space-x-4 mb-4'>
        <FaFacebookF className='text-xl cursor-pointer hover:text-blue-600' />
        <FaTwitter className='text-xl cursor-pointer hover:text-blue-400' />
        <FaPinterestP className='text-xl cursor-pointer hover:text-red-600' />
        <FaVimeoV className='text-xl cursor-pointer hover:text-blue-500' />
        <FaGoogle className='text-xl cursor-pointer hover:text-red-500' />
        <FaRss className='text-xl cursor-pointer hover:text-orange-500' />
      </div>
      <p className='text-sm'>&copy; 2025 Town Cargo All rights reserved</p>
    </footer>
  );
};

export default Footer;