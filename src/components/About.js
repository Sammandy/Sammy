import React from 'react';
//countup
import CountUp from 'react-countup';
//intersection observer hook
import { useInView } from 'react-intersection-observer';
//motion 
import { fadeIn } from '../variants';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
//wiefh3oijf3
const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section className='section' id='about' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
          {/* Image */}
          <motion.div
            variants={fadeIn('left', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-darker bg-top'>
          </motion.div>
          {/* Text */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'>
            <h2 className='h2 text-accent'>About me.</h2>
            <h3 className='h3 mb-4 text-blue-900'>I'm a Freelance Full-stack Developer</h3>
            <p className='mb-6 text-blue-900'>
              I'm passionate about building scalable, accessible, and user-friendly interfaces. I'm always looking for new challenges and opportunities to grow as a developer.
            </p>
            <p className='mb-6 text-blue-900'>
              I am passionate about technology and problem-solving, and I thrive on tackling new challenges and learning continuously.
            </p>
            <br />
            {/* Stats */}
            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={1} duration={3} /> : null}+
                </div>
                <div className='font-primary text-sm tracking-[2px] text-blue-900'>
                  Years of<br />
                  Experience<br />
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={20} duration={3} /> : null}+
                </div>
                <div className='font-primary text-sm tracking-[2px] text-blue-900'>
                  Projects<br />
                  Completed
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={10} duration={3} /> : null}+
                </div>
                <div className='font-primary text-sm tracking-[2px] text-blue-900'>
                  Satisfied<br />
                  Clients
                </div>
              </div>
            </div>
            <div className='flex gap-x-8 items-center text-accent'>
            <ScrollLink to="contact" smooth={true} duration={500} className='text-gradient btn-link'>
                <button className='btn btn-lg text-white bg-blue-900'>Contact me</button>
              </ScrollLink>
              <a href='#' className='text-gradient btn-link'>My Portfolio</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;


