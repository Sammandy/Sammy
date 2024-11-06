import React from 'react';
//icons
import { BsArrowUpRight } from 'react-icons/bs';
//motion
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../variants';
//ergihieuogr
//services data
const services = [
  {
    name: 'CareChains',
    description:
      'A decentralized platform on Ethereum blockchain revolutionizing medical record management, ensuring security, accessibility, and seamless sharing among healthcare providers.',
    link: 'learn more',
    url: 'https://github.com/Sammandy/CareChains'
  },
  {
    name: 'Algorithm Visualiser',
    description:
      'Algorithm Visualiser, an immersive web application designed to help you explore and comprehend the captivating world of algorithms through interactive visualizations and user-friendly customization options.',
    link: 'learn more',
    url: 'https://github.com/Sammandy/VisualAlgo'
  },
  {
    name: 'Fest-Managment-system',
    description:
      'A web application designed to streamline festival and event organization, offering a unified platform for managing registrations, schedules, attendees, and other event logistics.',
    link: 'learn more',
    url: 'https://github.com/Sammandy/Fest-Managment-system'
  },
  {
    name: 'Covid-19-TriageSystem',
    description:
      'The admin enters the patient’s data and health status.It can be inserted and modified by management only.Dashboard for hospital administrators to the status of recovered, admitted, and deceased patients, and bed availability.',
    link: 'learn more',
    url: 'https://github.com/Sammandy/Covid-19-TriageSystem'
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* text and image */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0 mr-6 ml-0'
          >
            <h2 className='h2 text-accent mb-6'>My Projects</h2>
            <h3 className='h3 max-w-[455px] mb-16'>
              I'm a Freelancer Developer with over 1+ years of experience.
            </h3>
            <button className='btn btn-sm'>See my work</button>
          </motion.div>
          {/* services */}
          <motion.div
            variants={fadeIn('left', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'
          >
            {/* services list */}
            <div>
              {services.map((service, index) => {
                // destructure service
                const { name, description, link, url } = service;
                return (
                  <div className='border-b border-white/20 h-[146px] mb-[38px] flex' key={index}>
                    <div className='max-w-[467px]'>
                      <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6 text-accent'>{name}</h4>
                      <p className='font-secondary leading-tight text-blue-50'>{description}</p>
                    </div>
                    <div className='flex flex-col flex-1 items-end text-blue-50'>
                      <a href={url} className='btn w-9 h-9 mb-[42px] flex justify-center items-center'>
                        <BsArrowUpRight />
                      </a>
                      <a href={url} className='text-gradient text-sm'>{link}</a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
