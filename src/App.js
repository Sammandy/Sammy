import React from 'react';

//ergihieuogr

// components
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
// import Services from './components/Services';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Experience from './components/experience';
import Projects from './components/projects';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link as ScrollLink, Element } from 'react-scroll';

const Home = () => (
  <>
    <Header />
    <Banner />
    <Nav />
    <About />
    <Experience />
    <Projects />
    {/* <Services /> */}
    <Skills />
    
    <Element name="contact">
      <Contact />
    </Element>
    <div className='h-[1200px]'></div>
  </>
);

function App() {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Header />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
