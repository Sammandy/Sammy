// icons
import { BsArrowUpRight } from 'react-icons/bs';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';

import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaPhoneAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Your emailjs serviceId, template ID, and public Key
    const serviceId = 'service_fwx8ihh';
    const templateId = 'template_myvduzk';
    const publicKey = 'zmBnSOgVYilC3Kb-E';

    // Create a new object that contains dynamic template params
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Web Wizard',
      message: message,
    };

    // Send the email using EmailJS
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        alert('Email Send Successfully!', response);
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.log('FAILED...', error);
      })
      ;
  };

  return (
    <section className='py-16 lg:section' id='contact'>
      <div className='container mx-auto '>
        <div className='flex flex-col lg:flex-row'>
          {/* text */}
          <motion.div
            variants={fadeIn('right', 0.6)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.7 }}
            className='flex-1 flex justify-start items-center'
          >
            <div>
              <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>
                Get in touch
              </h4>
              <h2 className='text-[45px] text-blue-900 lg:text-[90px] leading-none mb-12'>
                Let's work <br /> together!
              </h2>

              <span className='flex items-center mr-4 text-blue-900'>
                <FaPhoneAlt className='text-blue-900  mr-2' /> +91 9685521031
              </span>
              <span className='flex items-center email text-blue-900'>
                <SiGmail className=' text-blue-900 mr-2' /> sonalibanjare25@gmail.com
              </span>

            </div>
          </motion.div>
          {/* form */}
          <motion.form
            variants={fadeIn('left', 0.6)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.7 }}
            onSubmit={handleSubmit}
            className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start emailForm'
          >
            <input
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-blue-900  focus:border-accent  transition-all'
              type='text'
              value={name}
              placeholder='Your Name'
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-blue-900 focus:border-accent transition-all'
              type='email'
              value={email}
              placeholder='Your Email'
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <textarea
              className='bg-transparent border-b py-12 outline-none w-full placeholder:text-blue-900 focus:border-accent transition-all resize-none mb-12'
              value={message}
              placeholder='Your Message'
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
            <button className='btn btn-lg  text-white bg-blue-900' type='submit'>
              Send Message
            </button>
          </motion.form>
        </div>
       </div>
    </section>
  );
};

export default Contact;
