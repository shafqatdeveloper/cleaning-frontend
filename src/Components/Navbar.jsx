import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaPhone } from 'react-icons/fa6';
import { RiMenu3Fill } from "react-icons/ri";


const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isNavOpen, setIsNavOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            setIsScrolled(window.scrollY > 16);
        };

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const navLinks = [
        { name: 'home' ,path:"/"},
        { name: 'services',path:"/services" },
        { name: 'about' ,path:"/about"},
        { name: 'projects' ,path:"/projects"},
        { name: 'contact' ,path:"/contact"},
    ];

    const location = useLocation()

    return (
        <div
            className={`flex items-center justify-between px-5 py-6 fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
                }`}
        >
            <Link>Logo</Link>
            {/* Desktop */}
            <div className='hidden lg:flex items-center gap-10'>
                {navLinks.map((navLink, i) => (
                    <Link
                        key={i}
                        className='text-gray-800 capitalize font-semibold'
                        to={`/${navLink.name}`}
                    >
                        {navLink.name}
                    </Link>
                ))}
            </div>
            <div className='hidden lg:flex items-center gap-5'>
                <div className='flex flex-col items-center'>
                    <Link to={'tel:03000293355'} className='flex items-center gap-2'>
                        <FaPhone size={20} className='text-secondary-blue' />
                        <span className='font-medium text-gray-800'>+1 5000 6000</span>
                    </Link>
                </div>
                <div>
                    <Link
                        className='bg-secondary-blue hover:bg-primary-blue mt-10 transition-all duration-200 rounded-full px-5 py-1.5 font-medium text-white hover:shadow-primary-blue hover:shadow-md'
                        to={'/book-service'}
                    >
                        Book Service Now
                    </Link>
                </div>
            </div>
            {/* Mobile */}
            <div className={`lg:hidden z-50 text-gray-700 p-1.5 ${isNavOpen && 'bg-primary-blue rounded-md px-2 py-1.5 text-white'}`}>
                <button onClick={()=>setIsNavOpen(!isNavOpen)}><RiMenu3Fill size={22}/></button>
            </div>
            {
                isNavOpen && <div className={isNavOpen ? "bg-black/10 fixed w-full z-10 top-20 right-0 h-screen duration-500 transition-all" : "bg-black/10 fixed w-full z-10 top-20 right-[-100%] h-screen duration-500 transition-all"}></div>
            }
            <div className={isNavOpen ? "fixed top-20 z-40 right-0 w-[300px] sm:w-[350px] md:w-[450px] h-screen bg-white duration-300 transition-all":"fixed top-20 z-40 right-[-100%] w-[300px] sm:w-[350px] md:w-[450px] h-screen bg-white duration-300 transition-all"}>
                <div className='flex flex-col py-5 px-2'>
                    {
                        navLinks.map((navLink)=>{
                            return(
                                <Link onClick={()=>setIsNavOpen(false)} className={`text-gray-600 ${location.pathname === navLink.path && "bg-[#d3ebfc] text-secondary-blue rounded-md"} capitalize font-medium px-3 py-2`} to={navLink.path}>{navLink.name}</Link>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;
