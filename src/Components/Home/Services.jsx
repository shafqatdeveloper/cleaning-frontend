import React from 'react';
import { Link } from 'react-router-dom';
import residentialCleaningPic from '../../assets/residentialCleaning.jpg';
import commercialCleaningPic from '../../assets/commercialCleaning.jpg';
import deepCleaningPic from '../../assets/deepCleaning.jpg';
import moveInOutCleaningPic from '../../assets/moveInOutCleaning.jpg';
import constructionCleaningPic from '../../assets/constructionCleaning.jpg';
import CarpetCleaningPic from '../../assets/CarpetCleaning.jpg';
import { FaUserTie, FaRegCalendarCheck, FaRegThumbsUp, FaLeaf } from "react-icons/fa6";

const servicesOffered = [
  { 
    title: "Wohnungsreinigung", 
    link: "/book-service?selectedService=wohnungsreinigung",
    pic: residentialCleaningPic, 
    description: "Allgemeine Reinigung von Wohnungen, einschließlich Staubwischen, Staubsaugen, Wischen und Aufräumen von Wohnbereichen, Schlafzimmern, Badezimmern und Küchen." 
  },
  { 
    title: "Gewerbliche Reinigung", 
    link: "/book-service?selectedService=gewerbliche-reinigung",
    pic: commercialCleaningPic, 
    description: "Reinigung von Büroräumen, einschließlich Schreibtischen, Böden, Pausenräumen, Toiletten und Gemeinschaftsbereichen, um ein professionelles Umfeld zu gewährleisten." 
  },
  { 
    title: "Tiefenreinigung", 
    link: "/book-service?selectedService=tiefenreinigung",
    pic: deepCleaningPic, 
    description: "Gründliche Reinigung des gesamten Objekts, einschließlich schwer zugänglicher Bereiche, Geräte, Fußleisten und Fugen." 
  },
  { 
    title: "Ein- & Auszugsreinigung", 
    link: "/book-service?selectedService=ein-auszugsreinigung",
    pic: moveInOutCleaningPic, 
    description: "Spezielle Reinigung für Wohnungen/Häuser, die bezogen oder verlassen werden, mit Fokus auf das Entfernen von Schmutz, Flecken und Rückständen." 
  },
  { 
    title: "Baureinigung", 
    link: "/book-service?selectedService=baureinigung",
    pic: constructionCleaningPic, 
    description: "Entfernung von Staub, Schutt und Baumaterialien nach Renovierungs- oder Neubauprojekten, um den Raum nutzbar zu machen." 
  },
  { 
    title: "Teppich- & Polsterreinigung", 
    link: "/book-service?selectedService=teppich-polsterreinigung",
    pic: CarpetCleaningPic, 
    description: "Tiefenreinigung und Fleckenentfernung von Teppichen, Vorlegern und Polstermöbeln mit Spezialgeräten." 
  },
];

const featuresData = [
  {
    icon: <FaUserTie size={40} className="text-white" />,
    title: "Professionelles Team",
    description: "Unsere geschulten, versicherten Reinigungskräfte sorgen für einen professionellen und vertrauenswürdigen Service mit einwandfreien Ergebnissen.",
  },
  {
    icon: <FaRegCalendarCheck size={40} className="text-white" />,
    title: "Pünktlicher Service",
    description: "Zuverlässiger, pünktlicher Service, der Ihren Zeitplan respektiert und Ihre Erwartungen übertrifft.",
  },
  {
    icon: <FaRegThumbsUp size={40} className="text-white" />,
    title: "Transparente Preise",
    description: "Erschwingliche, transparente Preise ohne versteckte Kosten — Qualitätsreinigung zum fairen Preis.",
  },
  {
    icon: <FaLeaf size={40} className="text-white" />,
    title: "Umweltfreundlich",
    description: "Wir verwenden ungiftige, umweltfreundliche Produkte für ein sicheres, gesundes und funkelndes Zuhause.",
  },
];

const Services = () => {
  return (
    <div className='w-full flex flex-col items-center mt-20 px-5 md:px-10'>
      <h1 className='bg-primary-blue w-max px-2.5 py-0.5 mt-5 lg:mt-0 rounded-full font-semibold text-white text-center'>UNSERE DIENSTLEISTUNGEN</h1>
      <h1 className='text-2xl font-semibold mt-5 sm:text-3xl lg:text-4xl text-gray-700'>Unsere Reinigungsdienste</h1>
      <p className='mt-5 text-gray-400 font-medium w-11/12 sm:w-3/4 md:w-2/4 text-center'>
        Ob schnelle Auffrischung oder gründliche Reinigung — unser Expertenteam bringt Ihr Zuhause oder Büro zum Strahlen.
      </p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-10 mt-10'>
        {servicesOffered.map((service, index) => (
          <div key={index} className=''>
            <Link to={service.link}>
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
