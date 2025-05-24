import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative h-screen z-20 text-center pt-20 flex flex-col items-center">
      <h1 className='bg-[#d3ebfc] mt-5 px-5 text-secondary-blue font-semibold py-1 rounded-full'>ZUVERLÄSSIGE REINIGUNG</h1>
      <h1 className='text-6xl mt-7 font-bold text-gray-700'>Rapid24</h1>
      <p className='w-full px-4 sm:w-3/4 md:w-2/4 mt-10 text-lg text-gray-600'>
        Genießen Sie einen makellosen Raum mit unserem professionellen Reinigungsteam. Erschwinglich, umweltfreundlich und auf Ihre Bedürfnisse zugeschnitten!
      </p>
      <Link
        className='bg-secondary-blue hover:bg-primary-blue mt-10 transition-all duration-200 rounded-full px-5 py-1.5 font-medium text-white hover:shadow-primary-blue hover:shadow-md'
        to={'/book-service'}
      >
        Jetzt Service buchen
      </Link>
    </div>
  );
};

export default Hero;
