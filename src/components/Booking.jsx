import React from 'react'

const Booking = () => {
    return (
        <div id="booking" className='max-w-[1140px] w-full m-auto p-4'>
            <form className='lg:flex lg:justify-between items-center w-full'>
                <div className='flex flex-col my-2 py-2'>
                    <label>Destination</label>
                    <select className='lg:w-[300px] md:w-full border rounded-md mt-3'>
                        <option>Maldives</option>
                        <option>Key West</option>
                        <option>Cozmul</option>
                        <option>Grand Antigua</option>
                    </select>
                </div>
                <div>
                    <div className='flex flex-col w-full lg:max-w-[250px] my-2 p-2'>
                        <label>Check-In</label>
                        <input className='border rounded-md p-2' type="date" />
                    </div>
                    <div className='flex flex-col w-full lg:max-w-[250px] my-2 p-2'>
                        <label>Check-Out</label>
                        <input className='border rounded-md p-2' type="date" />
                    </div>
                </div>
                <div className='flex flex-col my-2 p-2'>
                    <label>Search</label>
                    <button className='w-full mt-4'>Rates & Availabilities</button>
                </div>
            </form>
        </div>
    )
}

export default Booking
