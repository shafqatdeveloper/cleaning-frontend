import { Link } from 'react-router-dom';
import houseCleaningPic from '../../assets/Services/ResidentialCleaning/regularHouse.jpg'
import deepCleaningPic from '../../assets/Services/ResidentialCleaning/deepCleaning.jpg'
import moveInMoveOutCleaningPic from '../../assets/Services/ResidentialCleaning/moveInMoveOutCleaning.jpg'
import postConstructionCleaningPic from '../../assets/Services/ResidentialCleaning/postConstructionCleaning.jpg'
import carpetCleaningPic from '../../assets/Services/ResidentialCleaning/carpetCleaning.jpg'
import windowCleaningPic from '../../assets/Services/ResidentialCleaning/windowCleaning.jpg'
import kitchenCleaningPic from '../../assets/Services/ResidentialCleaning/kitchenCleaning.jpg'
import bathroomCleaningPic from '../../assets/Services/ResidentialCleaning/bathroomSanitization.jpg'
import wallCleaningPic from '../../assets/Services/ResidentialCleaning/wallCleaning.jpg'
import balconyCleaningPic from '../../assets/Services/ResidentialCleaning/balconyCleaning.jpg'


const residentialServices = [
  {title:" Regelmäßige Hausreinigung",description:"Wir bieten regelmäßige und zuverlässige Reinigung für Haushalte – inklusive Staubwischen, Staubsaugen, Wischen und Desinfizieren aller Wohnbereiche. .",pic:houseCleaningPic},
  {title:"Grundreinigung",description:"Gründliche Reinigung, die auch versteckten Schmutz beseitigt – ideal für den Frühjahrsputz oder besondere Anlässe.",pic:deepCleaningPic},
  {title:"Einzugs-/Auszugsreinigung",description:"Umfassende Reinigung vor dem Ein- oder Auszug – inklusive Wände, Geräte und aller Räume.",pic:moveInMoveOutCleaningPic},
  {title:"Bauendreinigung",description:"Reinigung nach Bauarbeiten – Staub, Bauschutt und Farbspritzer werden fachgerecht entfernt.",pic:postConstructionCleaningPic},
  {title:"Teppich- und Läuferreinigung",description:"Tiefenreinigung von Teppichen mit professionellen Geräten – entfernt Flecken, Staub und Allergene.",pic:carpetCleaningPic},
  {title:" Fensterreinigung (innen & außen)",description:"Streifenfreie Reinigung von Fenstern – innen und außen, einschließlich Rahmen und Fensterbänke.",pic:windowCleaningPic},
  {title:"Tiefenreinigung der Küche",description:"Hygienische Reinigung von Schränken, Arbeitsplatten, Geräten und Wänden.",pic:kitchenCleaningPic},
  {title:"Desinfektion des Badezimmers",description:"Desinfektion von WC, Waschbecken, Badewannen und Fliesen.",pic:bathroomCleaningPic},
  {title:"Wand- und Deckenreinigung",description:"Entfernung von Staub und Flecken auf Wänden und Decken – verbessert das Raumklima.",pic:wallCleaningPic},
  {title:"Balkon- und Terrassenreinigung",description:"Gründliche Reinigung von Außenflächen, Geländern und Möbeln.",pic:balconyCleaningPic},
]

const ResidentialCleaning = () => {
  return (
    <div className='w-full flex flex-col items-center mt-20 px-2 md:px-10'>
      <h1 className='mt-10 text-xl font-semibold text-gray-50 bg-primary-blue px-4 py-0.5 rounded-full'>Residential Cleaning Services</h1>
      <div className='flex items-center justify-center w-full'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-x-7 gap-y-10 mt-10'>
        {residentialServices.map((service, index) => (
          <div key={index} className=''>
            <Link>
              <div className='overflow-hidden rounded-xl'>
                <img
                  src={service?.pic}
                  alt={service.title}
                  className='cursor-pointer hover:scale-[115%] transition-all duration-500 h-52 w-full object-cover'
                />
              </div>
            </Link>
            <h1 className='mt-5 mb-3 text-2xl font-semibold text-gray-700'>{service.title}</h1>
            <p className='text-gray-500 text-'>{service.description}</p>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default ResidentialCleaning;
