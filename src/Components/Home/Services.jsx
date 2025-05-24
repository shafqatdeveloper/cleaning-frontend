import React from 'react'
import residentialCleaningPic from '../../assets/residentialCleaning.jpg'
import commercialCleaningPic from '../../assets/commercialCleaning.jpg'
import deepCleaningPic from '../../assets/deepCleaning.jpg'
import moveInOutCleaningPic from '../../assets/moveInOutCleaning.jpg'
import constructionCleaningPic from '../../assets/constructionCleaning.jpg'
import CarpetCleaningPic from '../../assets/CarpetCleaning.jpg'
import { FaUserTie, FaRegCalendarCheck, FaRegThumbsUp, FaLeaf } from "react-icons/fa6";



const servicesOffered = [
    { title: "Residential Cleaning", pic: residentialCleaningPic, description: "General cleaning for homes, including dusting, vacuuming, mopping, and tidying up living areas, bedrooms, bathrooms, and kitchens." },
    { title: "Commercial Cleaning", pic: commercialCleaningPic, description: "Cleaning office spaces, including desks, floors, break rooms, restrooms, and common areas to maintain a professional environment." },
    { title: "Deep Cleaning", pic: deepCleaningPic, description: "A thorough cleaning of the entire property, including hard-to-reach areas, appliances, baseboards, and grout lines." },
    { title: "Move-In/Move-Out Cleaning", pic: moveInOutCleaningPic, description: "Specialized cleaning for properties being vacated or prepared for new occupants, focusing on removing dirt, stains, and residue." },
    { title: "Post-Construction Cleaning", pic: constructionCleaningPic, description: "Removing dust, debris, and construction materials after renovation or new construction projects, leaving the space ready for use." },
    { title: "Carpet and Upholstery Cleaning", pic: CarpetCleaningPic, description: "Deep cleaning and stain removal from carpets, rugs, and upholstered furniture using specialized equipment." },
]

const featuresData = [
    {
        icon: <FaUserTie size={40} className="text-white" />,
        title: "Professional Team",
        description: "Our trained, insured cleaners ensure professional, trusted service and impeccable results.",
    },
    {
        icon: <FaRegCalendarCheck size={40} className="text-white" />,
        title: "On Time Service",
        description: "Reliable, punctual service that respects your schedule and exceeds expectations.",
    },
    {
        icon: <FaRegThumbsUp size={40} className="text-white" />,
        title: "Transparent Pricing",
        description: "Affordable, upfront rates with no hidden costs — quality cleaning at the right price.",
    },
    {
        icon: <FaLeaf size={40} className="text-white" />,
        title: "Eco Friendly",
        description: "We use non-toxic, eco-friendly products for a safe, healthy, and sparkling environment.",
    },
];
const Services = () => {
    return (
        <div className='w-full flex flex-col items-center mt-20 px-5 md:px-10'>
            <h1 className='bg-primary-blue w-max px-2.5 py-0.5 mt-5 lg:mt-0 rounded-full font-semibold text-white text-center'>OUR SERVICES</h1>
            <h1 className='text-2xl font-semibold mt-5 sm:text-3xl lg:text-4xl text-gray-700'>Our Cleaning Services</h1>
            <p className='mt-5 text-gray-400 font-medium w-11/12 sm:w-3/4 md:w-2/4 text-center'>Whether it’s a quick refresh or a deep clean transformation, our expert touch leaves your home or office shining.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-10 mt-10'>
                {
                    servicesOffered.map((service, index) => {
                        return (
                            <div key={index} className=''>
                                <div className='overflow-hidden rounded-xl'>
                                    <img
                                        src={service?.pic}
                                        alt={service.title}
                                        className='cursor-pointer hover:scale-[115%] transition-all duration-500'
                                    />
                                </div>
                                <h1 className='mt-5 mb-3 text-2xl font-semibold text-gray-700'>{service.title}</h1>
                                <p className='text-gray-500'>{service.description}</p>
                            </div>
                        )
                    })
                }
            </div>
            <div className='py-20 my-24 grid grid-cols-1 sm:grid-cols-2 rounded-md lg:grid-cols-4 gapx-5 gap-y-10 bg-[#f4f4f4] px-2'>
                {
                    featuresData.map((feature, index) => {
                        return (
                            <div key={index} className='flex flex-col items-center'>
                                <div className="bg-secondary-blue rounded-lg p-4 mb-4 flex items-center justify-center w-16 h-16">
                                    {feature.icon}
                                </div>
                                <h3 className="text-lg font-bold mt-1 text-gray-900">{feature.title}</h3>
                                <p className="text-gray-500 mt-3 text-pretty">{feature.description}</p>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Services