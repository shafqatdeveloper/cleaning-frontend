import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import { GoClock } from "react-icons/go";
import { IoLocationOutline, IoMailOutline } from "react-icons/io5";
import logoPng from '../assets/logo.png'

const Footer = () => {
  return (
    <div className='bg-dark-blue w-full text-white px-4 py-8 lg:py-16'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 sm:gap-5'>
        {/* Logo Side */}
        <div className='flex flex-col gap-4'>
          <Link>
            <img src={logoPng} alt="Rapid24" className='w-32' />
          </Link>
          <p className='text-sm font-medium text-gray-300'>
            Wir sind ein Team leidenschaftlicher Reinigungsexperten, das stolz darauf ist, den höchsten Servicestandard zu bieten. Mit jahrelanger Erfahrung haben wir unsere Reinigungsmethoden perfektioniert, um sicherzustellen, dass jeder Auftrag perfekt ausgeführt wird.
          </p>
          <div className='mt-2 flex items-center gap-5'>
            <Link to={'https://facebook.com'}><FaFacebookF size={20} /></Link>
            <Link to={'https://facebook.com'}><FaWhatsapp size={20} /></Link>
            <Link to={'https://facebook.com'}><FaInstagram size={20} /></Link>
            <Link to={'tel:+015569035175'}><FaPhoneAlt size={20} /></Link>
          </div>
        </div>
        <div>
          <h1 className='text-xl font-semibold to'>Unternehmen</h1>
          <div className='flex flex-col gap-3 mt-4'>
            <Link className='hover:underline transition-all duration-500' to={'/'}>Startseite</Link>
            <Link className='hover:underline transition-all duration-500' to={'/services'}>Unsere Dienstleistungen</Link>
            <Link className='hover:underline transition-all duration-500' to={'/projects'}>Projekte</Link>
            <Link className='hover:underline transition-all duration-500' to={'/about'}>Über uns</Link>
            <Link className='hover:underline transition-all duration-500' to={'/contact'}>Kontakt</Link>
          </div>
        </div>
        <div>
          <h1 className='text-xl font-semibold to'>Unsere Dienstleistungen</h1>
          <div className='flex flex-col gap-3 mt-4'>
            <Link className='hover:underline transition-all duration-500' to={`/book-service?selectedService=wohnungsreinigung`}>Wohnungsreinigung</Link>
            <Link className='hover:underline transition-all duration-500' to={`/book-service?selectedService=tiefenreinigung`}>Tiefenreinigung</Link>
            <Link className='hover:underline transition-all duration-500' to={`/book-service?selectedService=gewerbliche-reinigung`}>Gewerbliche Reinigung</Link>
            <Link className='hover:underline transition-all duration-500' to={`/book-service?selectedService=teppich-polsterreinigung`}>Teppich- & Polsterreinigung</Link>
            <Link className='hover:underline transition-all duration-500' to={`/book-service?selectedService=baureinigung`}>Baureinigung</Link>
            <Link className='hover:underline transition-all duration-500' to={`/book-service?selectedService=ein-auszugsreinigung`}>Ein- & Auszugsreinigung</Link>
          </div>
        </div>
        <div className='flex flex-col gap-6 sm:gap-10'>
          <div className='flex flex-col gap-1'>
            <span className='flex items-center gap-2'>
              <GoClock size={20} className='text-primary-yellow' />
              <span className='text-lg font-semibold'>Unsere Öffnungszeiten</span>
            </span>
            <span className='text-gray-300 font-medium'>Montag - Samstag 08:00 - 18:00</span>
          </div>
          <div className='flex flex-col gap-1'>
            <span className='flex items-center gap-2'>
              <IoLocationOutline size={20} className='text-primary-yellow' />
              <span className='text-lg font-semibold'>Bürostandort</span>
            </span>
            <span className='text-gray-300 font-medium'>Moosburger Street 6, 85456 Wartenberg</span>
          </div>
          <div className='flex flex-col gap-1'>
            <span className='flex items-center gap-2'>
              <IoMailOutline size={20} className='text-primary-yellow' />
              <span className='text-lg font-semibold'>Schreiben Sie uns</span>
            </span>
            <Link to={'mailto:rapid24@gmx.info'} className='text-gray-300 font-medium'>rapid24@gmx.info</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
