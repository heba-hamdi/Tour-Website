import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-[90vh] relative'>
      <div className='bg-slate-300 absolute top-0 left-0 w-full h-full'></div>
      <img src="https://images.unsplash.com/photo-1580541631971-a0e8ce42e97f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1994&q=80" alt="/" className='w-full h-full object-cover mix-blend-multiply'/>
      <div className='max-w-[1140px] m-auto'>
        <div className='absolute top-[40%] md:top-[50%] max-w-[600px] h-full flex flex-col text-white p-4 '>
          <div className='bg-black-700 h-full w-full absolute '></div>
          <h1 className='font-bold text-4xl'>Find Your Special Trip</h1>
          <h2 className='font-bold text-4xl italic py-4'>With WeekAway</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, sed. Ut aliquam, obcaecati amet incidunt nisi laboriosam placeat voluptate nemo natus, alias officiis inventore est pariatur sapiente reiciendis consequatur deserunt?</p>
        </div>
      </div>
    </div>
  )
}

export default Hero
