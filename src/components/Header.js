import React from 'react';
import Logo from '../assets/logo4.svg';
import { Link as ScrollLink } from 'react-scroll';
//ergihieuogr
const Header = () => {
  return (
    <header className='py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <span className='text-accent font-tertiary'>Sonali Banjare</span>
          {/* button */}
          <ScrollLink to="contact" smooth={true} duration={500} className='text-gradient btn-link mb-4'>
            <button className='btn btn-sm bg-blue-900 text-white'> Work with me</button>
          </ScrollLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
