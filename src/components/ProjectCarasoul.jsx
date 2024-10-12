import React from 'react'
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { cards } from '../helper/ProjectListData';
import img from '../assets/images/theheck_project2_img.svg'
  
const Card = ({ card }) => {
    return (
    <div className={`flex justify-between  px-20 py-5 items-center h-[70vh] w-[100vh] text-white  mr-10 rounded-2xl ${card.bgColor}`}>
        <div className='relative w-[40%] flex flex-col'>
            <span className='absolute -mt-[25%] -ml-[10%] text-7xl'>{card.id}</span>
            <span className='text-sm'>{card.description}</span>
            <div className='mt-10'>
                <button className={`border border-white px-8 py-3 cursor-pointer rounded-full text-white transition duration-200 hover:bg-`} onClick={() => window.open(card.link)}>Click to view</button>
            </div>
        </div>
        <img src={img} className=" h-[60%] w-[40%] object-cover rounded-3xl" />
      
    </div>
    );
  };

const ProjectCarasoul = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: targetRef,
    });
  
    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-90%"]);
  
    return (
      <section ref={targetRef} className="relative h-[300vh] bg-neutral-900 rounded-3xl">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-4">
            {cards.map((card) => {
              return <Card card={card} key={card.id} />;
            })}
            <div className='flex justify-center items-center text-5xl'><span className='whitespace-nowrap'>and many more...</span></div>
          </motion.div>
        </div>
      </section>
    );
  };
  export default ProjectCarasoul
