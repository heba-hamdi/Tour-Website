import React from 'react'

const Contact = () => {
    return (
        <div id="contact" className='max-w-[1140px] m-auto w-full px-4 py-16'>
            <h2>Send Us a Message</h2>
            <p>We're standing by!</p>
            <div className='grid md:grid-cols-2'>
                <img src="https://images.unsplash.com/photo-1580541631971-a0e8ce42e97f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1994&q=80" className='w-full md:h-full max-h-[500px] object-cover p-2 h-[200px]' alt="" />
                <form>
                    <div className='grid grid-cols-2'>
                        <input className='border m-2 p-2' type="text" placeholder='First Name' />
                        <input className='border m-2 p-2' type="text" placeholder='Last Name' />
                        <input className='border m-2 p-2' type="email" placeholder='Email' />
                        <input className='border m-2 p-2' type="tel" placeholder='Phone' />
                        <input type="text" className='col-span-2 border m-2 p-2' placeholder='Address' />
                        <textarea className='col-span-2 border m-2 p-2' placeholder='Write a message' cols="30" rows="10"></textarea>
                        <button className='col-span-2 m-2'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact
