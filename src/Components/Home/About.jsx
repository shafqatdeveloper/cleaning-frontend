import React from 'react';
import { Link } from 'react-router-dom';
import cleanerone from "../../assets/cleanerone.jpg";
import cleanerthree from "../../assets/cleanerthree.jpg";
import cleanerfour from "../../assets/cleanerfour.jpg";
import cleanertwo from '../../assets/Services/ResidentialCleaning/postConstructionCleaning.jpg'

const About = () => {
  return (
    <div className='w-full h-full md:h-screen bg-primary-blue'>
      <div className='w-full h-full flex flex-col md:flex-row items-center justify-center px-4 sm:px-5 gap-5'>
        <div className='w-full md:w-2/4 text-white'>
          <h1 className='text-xs bg-secondary-blue w-max px-2.5 py-0.5 mt-5 lg:mt-0 rounded-full font-semibold '>ÜBER RAPID24</h1>
          <p className='my-5 lg:my-10 text-3xl sm:text-3xl lg:text-5xl font-semibold'>Sauberkeit, Komfort und Fürsorge vereint</p>
          <p className='text-gray-300 mb-10 text-sm lg:text-base text-justify'>
            Wir sind ein Team leidenschaftlicher Reinigungsexperten, das stolz darauf ist, den höchsten Servicestandard zu bieten.
            Mit jahrelanger Branchenerfahrung haben wir unsere Reinigungsmethoden perfektioniert, um sicherzustellen, dass jeder Auftrag perfekt ausgeführt wird.
          </p>
          <div className='flex justify-center lg:justify-start'>
            <Link
              className='bg-primary-yellow hover:bg-secondary-yellow mt-0 lg:mt-5 mb-5 lg:mb-0 transition-all duration-200 rounded-full px-5 py-1.5 font-medium text-black hover:shadow-primary-yellow hover:shadow-md'
              to={'/book-service'}
            >
              Jetzt Service buchen
            </Link>
          </div>
        </div>
        <div className='w-full md:w-2/4 grid grid-cols-1 md:grid-cols-2 gap-5 mb-10 md:mb-0'>
          <img src={cleanerone} alt="Reiniger Bild Eins" className='rounded-lg object-cover md:object-center h-40 md:h-52 w-full' />
          <img src={cleanertwo} alt="Reiniger Bild Zwei" className='rounded-lg object-cover md:object-center h-40 md:h-52 w-full' />
          <img src={cleanerthree} alt="Reiniger Bild Drei" className='rounded-lg object-cover md:object-center h-40 md:h-52 w-full' />
          <img src={cleanerfour} alt="Reiniger Bild Vier" className='rounded-lg object-cover md:object-center h-40 md:h-52 w-full' />
        </div>
      </div>
    </div>
  );
};

export default About;
