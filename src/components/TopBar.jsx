import React from 'react'
import { AiFillPhone, AiOutlineClockCircle } from 'react-icons/ai'
import { BsChatSquareDots } from 'react-icons/bs'

const TopBar = () => {
    return (
        <div className='flex justify-between items-center px-4 py-2'>
            <div className='flex items-center'>
                <BsChatSquareDots className='mr-2 text-[var(--primary-dark)]' size={30}/>
                <h1 className='text-xl font-bold text-gray-700'>WEEKAWAY</h1>
            </div>
            <div className='flex'>
                <div className='hidden md:flex items-center px-6'>
                    <AiOutlineClockCircle className='mr-2 text-[var(--primary-dark)]'/>
                    <p className='text-sm text-gray-700'>9AM - 5PM</p>
                </div>
                <div className='hidden md:flex items-center px-6'>
                    <AiFillPhone className='mr-2 text-[var(--primary-dark)]'/>
                    <p className='text-sm text-gray-700'>1-888-567-1542</p>
                </div>
                <button>Get a Free Quote</button>
            </div>
        </div>
    )
}

export default TopBar
