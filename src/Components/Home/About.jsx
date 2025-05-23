import React from 'react'
import { Link } from 'react-router-dom'
import cleanerone from "../../assets/cleanerone.jpg";
import cleanertwo from "../../assets/cleanertwo.jpg";
import cleanerthree from "../../assets/cleanerthree.jpg";
import cleanerfour from "../../assets/cleanerfour.jpg";

const About = () => {
  return (
    <div className='w-full h-full md:h-screen bg-primary-blue'>
        <div className='w-full h-full flex flex-col md:flex-row items-center justify-center px-4 sm:px-5 gap-5'>
            <div className='w-full md:w-2/4 text-white'>
                <h1 className='text-xs bg-secondary-blue w-max px-2.5 py-0.5 mt-5 lg:mt-0 rounded-full font-semibold '>ABOUT COMPANY</h1>
                <p className='my-5 lg:my-10 text-3xl sm:text-3xl lg:text-5xl font-semibold'>Bringing Clean, Comfort, and Care Together</p>
                <p className='text-gray-300 mb-10 text-sm lg:text-base'>We are a team of passionate cleaning experts who take pride in delivering the highest standard of service. With years of experience in the industry, we’ve perfected our cleaning methods to ensure every job is done right.</p>
                <div className='flex justify-center lg:justify-start'>
                    <Link
                className='bg-primary-yellow hover:bg-secondary-yellow mt-0 lg:mt-5 mb-5 lg:mb-0 transition-all duration-200 rounded-full px-5 py-1.5 font-medium text-black hover:shadow-primary-yellow hover:shadow-md'
                to={'/book-service'}
            >
                Book Service Now
            </Link>
                </div>
            </div>
            <div className='w-full md:w-2/4 grid grid-cols-1 md:grid-cols-2 gap-5 mb-10 md:mb-0'>
                <img src={cleanerone} alt="Cleaner Image One" className='rounded-lg object-cover md:object-center h-40 md:h-full w-full' />
                <img src={cleanertwo} alt="Cleaner Image Two" className='rounded-lg object-cover md:object-center h-40 md:h-full w-full' />
                <img src={cleanerthree} alt="Cleaner Image Three" className='rounded-lg object-cover md:object-center h-40 md:h-full w-full' />
                <img src={cleanerfour} alt="Cleaner Image Four" className='rounded-lg object-cover md:object-center h-40 md:h-full w-full' />
            </div>
        </div>
    </div>
  )
}

export default About