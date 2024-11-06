import React from 'react';
import { BiHomeAlt, BiUser , BiBarChartAlt2, BiCodeAlt} from 'react-icons/bi';
import { BsClipboardData, BsChatSquare } from 'react-icons/bs';
import { Link } from 'react-scroll';
//ergihieuogr
const Nav = () => {
  return (
    <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
      <div className='container mx-auto'>
        <div className='w-full bg-black/20 h-[60px] backdrop-blur-2xl rounded-full max-w-[400px] mx-auto px-16 flex justify-between text-xl text-blue-900 items-center'>
          <Link
            to='home'
            activeClass='active'
            smooth={true}
            spy={true}
            offset={-200}
            className='cursor-pointer w-[40px] h-[40px] flex items-center justify-center'
          >
            <BiHomeAlt />
          </Link>
          <Link
            to='about'
            activeClass='active'
            smooth={true}
            spy={true}
            className='cursor-pointer w-[40px] h-[40px] flex items-center justify-center'
          >
            <BiUser />
          </Link>
          {/* <Link
            to='experience'
            activeClass='active'
            smooth={true}
            spy={true}
            className='cursor-pointer w-[40px] h-[40px] flex items-center justify-center'
          >
            <BiBarChartAlt2 />
          </Link>
          <Link
            to='projects'
            activeClass='active'
            smooth={true}
            spy={true}
            className='cursor-pointer w-[40px] h-[40px] flex items-center justify-center'
          >
            <BsClipboardData />
          </Link>
          <Link
            to='Skills'
            activeClass='active'
            smooth={true}
            spy={true}
            className='cursor-pointer w-[40px] h-[40px] flex items-center justify-center'
          >
            <BiCodeAlt />
          </Link> */}
          <Link
            to='contact'
            activeClass='active'
            smooth={true}
            spy={true}
            className='cursor-pointer w-[40px] h-[40px] flex items-center justify-center'
          >
            <BsChatSquare />
          </Link>
          

        </div>
      </div>
    </nav>
  );
};

export default Nav;
