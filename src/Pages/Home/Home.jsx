import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../../Components/Home/Hero'
import About from '../../Components/Home/About'
import Services from '../../Components/Home/Services'
import Stats from '../../Components/Home/Stats'
import JoinTeam from '../../Components/Home/JoinTeam'

const Home = () => {
    return (
        <div className="h-full w-full">
            <div className="absolute inset-0 bg-[url('/cleaningBg.jpg')] bg-fixed bg-cover bg-center bg-no-repeat z-0"></div>
            <div className="absolute inset-0 bg-white opacity-80 z-10"></div>
            <Hero/>
            <About/>
            <Services/>
            <Stats/>
            <JoinTeam/>
        </div>
    )
}

export default Home