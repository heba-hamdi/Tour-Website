import React from 'react'

const Gallery = () => {

    return (
        <div id='gallery' className='max-w-[1140px] m-auto w-full px-4 py-16'>
            <h2 className='text-center text-gray-700 p-4'>Gallery</h2>
            <div className='grid sm:grid-cols-5 gap-4'>
                <div className='sm:col-span-3 col-span-2 row-span-2'>
                    <img src="https://images.unsplash.com/photo-1617859047452-8510bcf207fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
                </div>
                <div>
                    <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1582610116397-edb318620f90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
                </div>
                <div>
                    <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1571003123771-bd6a099dd83a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" />
                </div>
                <div>
                    <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1596178065887-1198b6148b2b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
                </div>
                <div>
                    <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1562805791-dbca2a22bba2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
                </div>
            </div>
        </div>
    )
}

export default Gallery
