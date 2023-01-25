import React from 'react'
import { FaFacebookF, FaTwitter, FaGooglePlusG, FaInstagram, FaBars } from 'react-icons/fa'
import { useState } from 'react'

const Navbar = () => {

    const [Nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!Nav)
    }

    return (
        <div className='w-full min-h-[50px] flex justify-between items-center bg-gray-700/80 text-white z-10 absolute'>
            <ul className="hidden sm:flex px-4">
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="#booking">Booking</a>
                </li>
                <li>
                    <a href="#gallery">Gallery</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
            <div className='flex justify-between'>
                <FaFacebookF className='mx-4' />
                <FaTwitter className='mx-4' />
                <FaGooglePlusG className='mx-4' />
                <FaInstagram className='mx-4' />
            </div>
            <div className='sm:hidden z-10'>
                <FaBars size={20} className="mr-4 cursor-pointer" onClick={handleNav} />
            </div>
            <div className={Nav ? 'absolute text-white left-0 top-0 w-full bg-gray-700/90 px-4 py-7 flex flex-col' : 'absolute left-[-100%]'}>
                <ul className='w-full h-screen text-center pt-12'>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="#gallery">Gallery</a>
                    </li>
                    <li>
                        <a href="#deals">Deals</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                    <li>
                        <a href="#contact">Service</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
