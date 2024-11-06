import React from 'react';
import Image from '../assets/SonaliP.png';
import { FaGithub, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from "../variants";
import { Link as ScrollLink } from 'react-scroll';
//wiefh3oijf3
const Banner = () => {
  return (
    <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-20'>
          <div className='flex-1 text-center font-secondary lg:text-left lg:gap-x-12'>
            <motion.h1
              variants={fadeIn('up', 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              className="text-[40px] text-blue-900 font-bold leading-[0.8] lg:text-[50px]"
            >
              Sonali <span>Banjare</span>
            </motion.h1>
            <motion.div
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              className='mb-6 text-[36px] lg:text-[45px] font-secondary font-semibold uppercase leading-[1]'
            >
              <span className='text-blue-900 mr-2'> I am a</span>
              <TypeAnimation sequence={['Developer', 2000, 'Freelancer', 2000]} speed={50} className='text-orange-600' wrapper='span' repeat={Infinity} />
            </motion.div>
            <motion.p
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              className='mb-8 max-w-lg mx-auto lg:mx-0 text-blue-900'
            >
              Hi, I'm Sonali Banjare, currently in my fourth year pursuing a B.Tech degree in Computer Science Engineering at IIIT Naya Raipur.
            </motion.p>
            <motion.div
              variants={fadeIn('up', 0.6)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'
            >
              <ScrollLink to="contact" smooth={true} duration={500} className='text-gradient btn-link'>
                <button className='btn btn-lg text-white bg-blue-900'>Contact me</button>
              </ScrollLink>
              <div className='flex items-center'>
                <a href='#' className='text-gradient btn-link'>My Portfolio</a>
              </div>
            </motion.div>
            <motion.div
              variants={fadeIn('up', 0.7)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              className='flex text-[25px] gap-x-6 max-w-max mx-auto lg:mx-0 items-center text-blue-900'
            >
              <a href='https://www.linkedin.com/in/sonali0525/' target="_blank"><FaLinkedinIn /></a>
              <a href='https://github.com/Sammandy' target="_blank"><FaGithub /></a>
              <a href='https://x.com/Sandy_2325' target="_blank"><FaTwitter /></a>
              <a href='https://www.instagram.com/_sammandy25/' target="_blank"><FaInstagram /></a>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn('down', 0.5)}
            initial="hidden"
            whileInView="show"
            className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'
          >
            <img src={Image} alt='Sonali Banjare' />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
