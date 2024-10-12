import React from 'react'

const ContactComponent = () => {
  return (
    <div className='w-full flex flex-col gap-10 my-52 justify-center items-center'>
        <span className='text-7xl'>Let’s Get started with your idea.</span>
        <div className='flex gap-24 my-32'>
            <input className='border border-white px-10 py-5 rounded-full text-white bg-black text-2xl ' placeholder='Enter your email' type="text" />
            <button className="relative z-10 px-8 py-5 cursor-pointer rounded-full text-black transition duration-200 bg-white  text-2xl ">Connect Now</button>
        </div>
    </div>
  )
}

export default ContactComponent