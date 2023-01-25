import React from 'react'
import { BsChatSquareDots } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='max-w-[1140px] w-full py-8 m-auto border-t-4'>
        <div className='flex items-center m-auto justify-center'>
        <BsChatSquareDots size={30} className="text-[var(--primary-dark)] mr-2"/>
        <h1 className='text-gray-700 text-xl font-bold' >WEEKAWAY</h1>
        </div>
        <p className='w-full text-center mt-3 text-sm'>&copy; 2023 Heba Elgamil</p>
    </div>
  )
}

export default Footer
