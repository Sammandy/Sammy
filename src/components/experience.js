import React from 'react';
//wiefh3oijf3
const experiences = [
  {
    role: "UI Designer",
    company: "Workzera",
    type: "Freelance",
    duration: "Feb 2023 - Jul 2023 • 6 mos",
    location: "Naya Raipur, Chhattisgarh, India • Remote",
    skills: "Figma • Team work • Adobe Photoshop • HTML5",
  },
  {
    role: "Web Dev Intern",
    company: "Socialion",
    type: "Part-time",
    duration: "Apr 2023 - Jul 2023 • 4 mos",
    location: "Mumbai, Maharashtra, India • Remote",
    skills: "Figma • User Interface Design • HTML/CSS • Adobe Illustrator ",
  },
  {
    role: "Mentee",
    company: "Winter Of Blockchain",
    type: "Mentee",
    duration: "Jan 2024 - Apr 2024 • 4 mos",
    location: "Remote",
    skills: "Blockchain • Web3 • Team work • Project Management",
  },
  {
    role: "Software Engineer Intern",
    company: "Knuct Technology",
    type: "Part-time",
    duration: "Mar 2024 - May 2024 • 3 mos",
    location: "Secunderäbād, Telangana, India • Hybrid",
    skills: "Web Development • JavaScript • MERN Stack • Tailwind CSS • Blockchain",
  },
  {
    role: "Contributor",
    company: "GirlScript Summer of Code",
    type: "Part-time",
    duration: "May 2024 - Aug 2024 • 4 mos",
    location: "Remote",
    skills: "Git • Team work • Web Development • JavaScript",
  }
];

const Experience = () => {
  return (
    <section className="experience-section py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-orange-600">Experience</h2>
        <div className="relative">
          <div className="border-l-4 border-dashed border-blue-500 absolute h-full left-1/2 transform -translate-x-1/2"></div>
          <div className="flex flex-col items-center">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row lg:items-center lg:gap-x-8 mb-12 ${
                  index % 2 === 0 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Experience Content */}
                <div
                  className={`w-full lg:w-1/2 mb-4 lg:mb-0 ${
                    index % 2 === 0 ? "lg:pl-12" : "lg:pr-12"
                  }`}
                >
                  <h3 className="text-xl font-bold text-blue-900">{exp.role}</h3>
                  <p className=" font-semibold text-orange-600">{exp.company} • {exp.type}</p>
                  <p className="text-blue-900">{exp.duration}</p>
                  <p className="text-blue-900 italic">{exp.location}</p>
                  <p className="text-blue-900">{exp.skills}</p>
                </div>
                {/* Timeline Dot */}
                <div className="relative w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center border-4 border-white z-10 lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2">
                  <span className="text-white font-bold">{index + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
