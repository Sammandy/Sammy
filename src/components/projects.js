import Slider from "react-slick";
import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import imgSonali from '../assets/b.jpg';
import imgS from '../assets/b1.jpg';
import imgSo from '../assets/b2.jpg';
import imgSon from '../assets/b3.jpg';
import imgSona from '../assets/b4.jpg';
import { Link as ScrollLink } from 'react-scroll';
//ergihieuogr
function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <div className='w-3/4 m-auto'>
        {/* <div className="container mx-auto"> */}
        <h2 className="text-3xl font-bold text-center mb-12 text-orange-600">Projects</h2>
      <div className="mt-20">
        
        <Slider {...settings} >
          {data.map((d) => (
            <div key={d.name} className="bg-white h-[450px] text-black rounded-xl">
              <div className='h-40 bg-blue-900 flex justify-center items-center rounded-t-xl'>
                <img src={d.img} alt={d.name} className="h-20 w-20 rounded-full"/>
              </div>

              <div className="flex flex-col items-center justify-center gap-4 p-4 ">
                <p className="text-xl font-semibold text-orange-600">{d.name}</p>
                <p className="text-center text-blue-900">{d.review}</p>
                {/* Link for "learn more" */}
                {d.link && d.url && (
                  <a href={d.url} className='text-orange-600 text-sm, target="_blank'>{d.link}</a>
                )}
              </div>
            </div>
            
          ))}
        </Slider>
      </div>
      
    </div>

  );
}

const data = [
  {
    name: 'Ecommerce',
    img: imgSon,
    review: 'ShopEase is a responsive e-commerce site built with React and Tailwind CSS, using Fake Store API for products and Context API for seamless state management.',
    link: 'learn more',
    url: 'https://github.com/Sammandy/Ecommerce-ai'
  },
  {
    name: 'FakeBuster',
    img: imgSo,
    review: 'A decentralized platform on Ethereum revolutionizes medical record management, ensuring security, accessibility, and seamless sharing for healthcare providers.',
    link: 'learn more',
    url: 'https://github.com/Sammandy/ProductDetectionApp'
  },
  {
    name: 'Fest-Managment-system',
    img: imgSona,
    review: 'A web app that streamlines festival and event organization, providing a unified platform for managing registrations, schedules, and logistics.',
    link: 'learn more',
    url: 'https://github.com/Sammandy/Fest-Managment-system'
  },
  {
    name: 'Algorithm Visualiser',
    img: imgS,
    review: 'Algorithm Visualiser is an immersive web app that helps you explore and understand algorithms through interactive visualizations and customization.',
    link: 'learn more',
    url: 'https://github.com/Sammandy/VisualAlgo'
  },
  {
    name: 'Newzi',
    img: imgSonali,
    review: 'Newzi is a dynamic web app providing real-time news updates with personalized feeds, category browsing, and breaking news alerts!',
    link: 'learn more',
    url: 'https://github.com/Sammandy/newzi'
  },
];

export default App;
