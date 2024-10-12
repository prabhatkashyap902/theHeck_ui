import React, { useEffect } from 'react'
import { Canvas } from '@react-three/fiber';
import { EffectComposer } from '@react-three/postprocessing';
import { Fluid } from '@whatisjery/react-fluid-distortion';
import { Text as DreiText, Plane,Html } from '@react-three/drei';
import { motion } from 'framer-motion';
import parallaxImage from '../assets/images/theheck_parallax.svg';
import {  TextureLoader } from 'three';
import { useLoader } from '@react-three/fiber';
import Marquee from 'react-fast-marquee';
import locomotiveScroll from 'locomotive-scroll';


function ImagePlane({ image, position }) {
    const texture = useLoader(TextureLoader, image);
    const imageSize = window.innerWidth <= 640 ? '2' : // Base font size
                    window.innerWidth <= 768 ? '3' : 
                    window.innerWidth <= 1024 ? '4' : 
                    window.innerWidth <= 1280 ? '5' : '5'; // Adjust accordingly
    return (
      <Plane args={[imageSize, imageSize]} position={position}>
        <meshBasicMaterial attach="material" map={texture} transparent />
      </Plane>
    );
  }
const HeroComponent = () => {
    const scrollRef = React.createRef();

    const fontSize = window.innerWidth <= 640 ? '0.5' : // Base font size
                    window.innerWidth <= 768 ? '0.75' : 
                    window.innerWidth <= 1024 ? '1' : 
                    window.innerWidth <= 1280 ? '1.5' : '1.5'; // Adjust accordingly

    useEffect(() => {
        const scroll = new locomotiveScroll({
            el: scrollRef.current,
            smooth: true
        });
    });


  return (
    <div data-scroll className='w-full h-full' ref={scrollRef}>
        
      <Canvas style={{
          
          top: 0,
          left: 0,
          height: '100vh',
          width: '100vw',
          backgroundColor:'black'
        }}>
        <EffectComposer>
          {/* Fluid Effect */}
          <Fluid 
            radius={0.9}
            curl={0}
            swirl={0}
            distortion={0.05}
            force={2}
            pressure={0.1}
            densityDissipation={0.97}
            velocityDissipation={0.5}
            intensity={0.3}
            rainbow={false}
            blend={-5}
            showBackground={false}
            fluidColor="red"
          />
        </EffectComposer>

        {/* 3D Image Plane */}
        <ImagePlane image={parallaxImage} position={[-0.2, -0.2, 0.1]} /> {/* Move back by setting z=-1 */}

        <DreiText
            position={[0, 2.8, 0]}
            letterSpacing={-0.07}
            fontSize={0.15} // Smaller font size
            fontStyle="normal"
            color={'#FF0303'}
            font='/fonts/Franie-Regular.ttf'
        >
            Your Brand Deserves Better. We're Here to Heck it Up (For Good).
        </DreiText>
        
        {/* "the" text part */}
        <DreiText
            position={[0, -0.2, 0]}
            letterSpacing={-0.07}
            fontSize={fontSize} // Smaller font size
            fontStyle="normal"
            font='/fonts/Franie-Regular.ttf'
        >
            theheck
        </DreiText>
        
        <DreiText position={[3.3, -1.2, 0]} letterSpacing={-0.07} fontSize={0.3} color={'gray'} fontWeight='bold' textAlign='right' anchorX="right" font='/fonts/Franie-Regular.ttf'>
            FOR ANYTHING{'\n'} DESIGN
        </DreiText>

        <>
            {/* White Text */}
            <DreiText
                position={[-0.7, -3.2, 0]}
                letterSpacing={-0.07}
                fontSize={0.15}
                color="white" // White color
                fontStyle="normal"
                font='/fonts/Franie-Regular.ttf'
                anchorX="center"
                anchorY="middle"
            >
                P. S. Not Your Regular
            </DreiText>

            {/* Red Text */}
            <DreiText
                position={[0.7, -3.2, 0]} // Adjust position if needed
                letterSpacing={-0.07}
                fontSize={0.15}
                color="red" // Red color for "Design Agency"
                fontStyle="normal"
                font='/fonts/Franie-Regular.ttf'
                anchorX="center"
                anchorY="middle"
            >
                Design Agency
            </DreiText>
        </>
        {/* Scrollable Content */}
        {/* <Html fullscreen>
          <motion.div
            className="scroll-container absolute inset-0 overflow-y-scroll p-8 text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
          </motion.div>
        </Html> */}
      </Canvas>
        <div className='w-full' data-scroll
          >
            <Marquee
                gradient={false}
                speed={50}
                direction="left"
                
            >
                &nbsp;Graphic Design  |  Branding |  Marketing animation  |  Landing Page  |  Website Design  |  Concept Developement  |  Illustrations  |  Graphic Design  |  Branding |  Marketing animation  |  Landing Page  |  Website Design  |  Concept Developement  |  Illustrations  |  

            </Marquee>
        </div>
    </div>
  )
}

export default HeroComponent