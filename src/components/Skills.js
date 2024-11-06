import React from 'react';
// Importing icons (You will need to import appropriate icons for each tool, I'll use placeholders for now)

//motion
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../variants';

// Icons import (you'll need to install icon libraries such as 'react-icons' or custom SVGs)
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGithub, FaGitAlt, FaFigma} from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiMongodb, SiVisualstudiocode, SiExpress, SiFirebase } from 'react-icons/si';

const skills = [
    { name: 'HTML', icon: <FaHtml5 className="text-orange-600" /> },
    { name: 'CSS', icon: <FaCss3Alt className="text-blue-500" /> },
    { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-500" /> },
    { name: 'React.js', icon: <FaReact className="text-blue-400" /> },
    { name: 'Next.js', icon: <SiNextdotjs className="text-black" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
    { name: 'Express.js', icon: <SiExpress className="text-gray-600" /> },
    { name: 'MongoDB',icon: <SiMongodb className="text-green-700" /> },
    { name: 'GitHub', icon: <FaGithub className="text-gray-700" /> },
    { name: 'Git', icon: <FaGitAlt className="text-orange-600" /> },
    { name: 'Visual Studio Code', icon: <SiVisualstudiocode className="text-blue-400" /> },
    // { name: 'Firebase', icon: <FaFirebase className="text-yellow-600" /> },
    // { name: 'Android (Java)', icon: <AiOutlineAndroid className="text-green-500" /> },
    // { name: 'Material UI', icon: <SiMaterialui className="text-blue-500" /> },
];

const Skills = () => {
    return (
        <motion.div variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }} className='flex-1 p-6'>
            {/* Added mt-8 to add space above the word "Skills" */}
            <h2 className='h2 text-accent text-left-center font-bold md:ml-8 mt-8'>Software/Tools</h2>
            
            {/* Grid Layout for skills */}
            <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:ml-8 mt-8'>
                {skills.map((skill, index) => (
                    <div key={index} className='flex flex-col items-center'>
                        <div className='text-4xl mb-2 text-blue-900'>
                            {skill.icon}
                        </div>
                        <p className='text-blue-950 text-sm'>{skill.name}</p>
                    </div>
                ))}
            </div>
        </motion.div>
    );
}

export default Skills;
