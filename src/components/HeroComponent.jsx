import React from 'react'
import { Canvas } from '@react-three/fiber';
import { EffectComposer } from '@react-three/postprocessing';
import { Fluid } from '@whatisjery/react-fluid-distortion';
import { Text as DreiText, Plane,Html } from '@react-three/drei';
import { motion } from 'framer-motion';
import parallaxImage from '../assets/images/theheck_parallax.svg';
import {  TextureLoader } from 'three';
import { useLoader } from '@react-three/fiber';


function ImagePlane({ image, position }) {
    const texture = useLoader(TextureLoader, image);
    return (
      <Plane args={[5, 5]} position={position}>
        <meshBasicMaterial attach="material" map={texture} transparent />
      </Plane>
    );
  }
const HeroComponent = () => {
  return (
    <div>
        
      <Canvas style={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: '100vh',
          width: '100vw',
          backgroundColor:'black'
        }}>
        <EffectComposer>
          {/* Fluid Effect */}
          <Fluid 
            radius={0.5}
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
            fontSize={'1.5'} // Smaller font size
            fontStyle="normal"
            font='/fonts/Franie-Regular.ttf'
        >
            theheck
        </DreiText>
        
        <DreiText position={[3.3, -1.2, 0]} letterSpacing={-0.07} fontSize={0.3} color={'gray'} fontWeight='bold' textAlign='right' anchorX="right" font='/fonts/Franie-Regular.ttf'>
            FOR ANYTHING{'\n'} DESIGN
        </DreiText>
        {/* Scrollable Content */}
        <Html fullscreen>
          <motion.div
            className="scroll-container absolute inset-0 overflow-y-scroll p-8 text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
          </motion.div>
        </Html>
      </Canvas>
    </div>
  )
}

export default HeroComponent