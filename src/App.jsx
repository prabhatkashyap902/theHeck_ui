import './App.css'
import { Canvas } from '@react-three/fiber';
import { EffectComposer } from '@react-three/postprocessing';
import { Html } from '@react-three/drei'; // Import Html from drei
import { Fluid } from '@whatisjery/react-fluid-distortion';
import { Text as DreiText } from '@react-three/drei';


function App() {

  return (
    <>
    <div className="text-9xl flex justify-center items-center h-[100vh] bg-white">
      <Canvas
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: '100vh',
          width: '100vw',
          backgroundColor:'black'
        }}
      >
        
        <EffectComposer>
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
            // backgroundColor='yellow'
            fluidColor='red'
          />
          <DreiText
          letterSpacing={-0.07}
          fontSize={0.94}
          position-y={0.8}
          color='white'
        >
          REACT POST
        </DreiText>
          
          {/* <Html>
              <span>Hello</span>
          </Html> */}
          
        </EffectComposer>
        
        
      </Canvas>
    </div>

    </>
  )
}

export default App
