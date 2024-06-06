import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function Model() {
  const { scene } = useGLTF('/models/1505973.gltf');
  return <primitive object={scene} />;
}

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Model />
        <OrbitControls />
        <h2>hello</h2>
      </Canvas>
      
    </div>
  );
}

export default App;
