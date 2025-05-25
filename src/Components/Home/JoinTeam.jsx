import React from 'react';
import { Link } from 'react-router-dom';
import joinTeamPng from '../../assets/joinTeamPng.png';

const JoinTeam = () => {
  return (
    <div className='w-full h-full md:h-screen'>
      <div className='w-full h-full flex flex-col md:flex-row items-center justify-center px-4 sm:px-5 gap-5'>
        <div className='w-full md:w-2/4'>
          <h1 className='text-xs bg-secondary-blue text-white w-max px-2.5 py-0.5 mt-5 lg:mt-0 rounded-full font-semibold '>WERDEN SIE TEIL UNSERES TEAMS</h1>
          <p className='my-5 lg:my-10 text-2xl sm:text-3xl lg:text-4xl font-semibold'>Werden Sie Teil unseres professionellen Reinigungsteams</p>
          <p className='text-gray-500 mb-10 text-sm lg:text-base text-justify'>
            Wir sind ein Team leidenschaftlicher Reinigungsexperten, das stolz darauf ist, den höchsten Servicestandard zu bieten. Mit jahrelanger Erfahrung haben wir unsere Reinigungsmethoden perfektioniert, um sicherzustellen, dass jeder Auftrag perfekt ausgeführt wird.
          </p>
          <div className='flex justify-center lg:justify-start'>
            <Link
              className='bg-primary-blue text-white hover:bg-secondary-blue mt-0 lg:mt-5 mb-5 lg:mb-0 transition-all duration-200 rounded-full px-5 py-1.5 font-medium hover:shadow-secondary-blue hover:shadow-md'
              to={'/join-team'}
            >
              Jetzt Beitreten
            </Link>
          </div>
        </div>
        <div className='w-full md:w-2/4 flex items-center justify-center'>
          <img src={joinTeamPng} alt="Join Team Cleaner" className='w-3/5' />
        </div>
      </div>
    </div>
  );
};

export default JoinTeam;
