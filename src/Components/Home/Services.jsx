import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserTie, FaRegCalendarCheck, FaRegThumbsUp, FaLeaf } from "react-icons/fa6";
import hotelHousekeepingPic from '../../assets/hotelHousekeeping.jpg'
import dishwasherPic from '../../assets/dishwasher.jpg'
import ResidentialCleaning from '../Services/ResidentialCleaning';

const featuresData = [
  {
    icon: <FaUserTie size={40} className="text-white" />,
    title: "Professional Team",
    description: "Our trained and insured cleaning staff ensure a professional and reliable service with impeccable results.",
  },
  {
    icon: <FaRegCalendarCheck size={40} className="text-white" />,
    title: "Punctual Service",
    description: "Reliable, punctual service that respects your schedule and exceeds expectations.",
  },
  {
    icon: <FaRegThumbsUp size={40} className="text-white" />,
    title: "Transparent Pricing",
    description: "Affordable, transparent pricing with no hidden costs — quality cleaning at a fair price.",
  },
  {
    icon: <FaLeaf size={40} className="text-white" />,
    title: "Eco-Friendly",
    description: "We use non-toxic, eco-friendly products for a safe, healthy, and sparkling environment.",
  },
];

const mainServices = [
  {title:"Hotelreinigung (Housekeeping)",description:"Unsere Fachkräfte übernehmen die tägliche Reinigung von Hotelzimmern, öffentlichen Bereichen und Sanitäranlagen. Wir sorgen für Sauberkeit, Komfort und Hygiene, um die Zufriedenheit Ihrer Gäste sicherzustellen.",pic:hotelHousekeepingPic},
  {title:"Spülküche in Hotels",description:"Unser erfahrenes Personal übernimmt zuverlässig die Reinigung von Geschirr, Besteck und Küchenutensilien. Wir garantieren einen reibungslosen Ablauf in der Hotelküche und arbeiten effizient auch unter Zeitdruck.",pic:dishwasherPic}
]

const Services = () => {
  return (
    <div className='w-full flex flex-col items-center mt-20 px-5 md:px-10'>
<h1 className='mt-10 text-xl font-semibold text-gray-50 bg-primary-blue px-4 py-0.5 rounded-full'>Our main Services</h1>
      <p className='mt-5 text-gray-400 font-medium w-11/12 sm:w-3/4 md:w-2/4 text-center'>
        We are a professional cleaning company with extensive experience in the cleaning industry. Our staff is well-trained, reliable, and committed to meeting the highest standards in all areas of cleaning. We offer a wide range of services for residential, commercial, and industrial clients. Each service is performed with utmost care and professionalism.
      </p>
      
      <div className='flex items-center justify-center w-full'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-7 gap-y-10 mt-10'>
        {mainServices.map((service, index) => (
          <div key={index} className=''>
            <Link>
              <div className='overflow-hidden rounded-xl'>
                <img
                  src={service?.pic}
                  alt={service.title}
                  className='cursor-pointer hover:scale-[115%] transition-all duration-500'
                />
              </div>
            </Link>
            <h1 className='mt-5 mb-3 text-2xl font-semibold text-gray-700'>{service.title}</h1>
            <p className='text-gray-500 text-justify'>{service.description}</p>
          </div>
        ))}
      </div>
      </div>
      <ResidentialCleaning/>
      <div className='py-20 my-24 grid grid-cols-1 sm:grid-cols-2 rounded-md lg:grid-cols-4 gap-x-5 gap-y-10 bg-[#f4f4f4] px-2'>
        {featuresData.map((feature, index) => (
          <div key={index} className='flex flex-col items-center'>
            <div className="bg-secondary-blue rounded-lg p-4 mb-4 flex items-center justify-center w-16 h-16">
              {feature.icon}
            </div>
            <h3 className="text-lg font-bold mt-1 text-gray-900">{feature.title}</h3>
            <p className="text-gray-500 mt-3 text-pretty">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
