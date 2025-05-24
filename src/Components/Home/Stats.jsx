import React from 'react'

const Stats = () => {
    const statistics = [
        {title:"Houses Cleaned",value:65250},
        {title:"Happy Customers",value:22000},
        {title:"Experienced Cleaners",value:100},
        {title:"Years of Experience",value:15},
    ]
  return (
    <div className='bg-primary-yellow rounded-lg'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-10 justify-center items-center py-10 mb-10'>
            {
                statistics.map((stat=>{
                    return(
                        <div className='flex flex-col items-center md:gap-1'>
                            <h1 className='text-2xl md:text-3xl font-bold'>{stat.value}+</h1>
                            <p className='text-gray-600 font-medium'>{stat.title}</p>
                        </div>
                    )
                }))
            }

        </div>
    </div>
  )
}

export default Stats