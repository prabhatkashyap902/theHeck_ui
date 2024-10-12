import React from 'react'
import { motion } from 'framer-motion';
import theHeckLimited from '../assets/images/theheck_Limited_mark.svg'

const Header = () => {
  return (
    <motion.div
        className="absolute top-0 left-0 w-full text-white z-20 p-8 flex justify-between items-center "
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        
        <div ><span className='text-xl'>the</span><span className='italic underline text-2xl'>heck</span></div>
        <div className='absolute left-0 right-0 flex justify-center '><img src={theHeckLimited}/></div>
        <div className="buttons flex space-x-4">
          <motion.button className="relative z-10 border border-white px-8 py-2 cursor-pointer rounded-full text-white transition duration-200"
            whileHover={{ color: 'white', backgroundColor: '#FF0303' }}>
            work
          </motion.button>
          <motion.button className="relative z-10 border border-white px-8 py-2 cursor-pointer rounded-full text-white transition duration-200"
            whileHover={{ color: 'white', backgroundColor: '#FF0303' }}>
            Contact us
          </motion.button>
        </div>
    </motion.div>

  )
}

export default Header