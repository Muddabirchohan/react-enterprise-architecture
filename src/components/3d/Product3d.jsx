import React, { useRef } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import { TextureLoader } from 'three';

const Product3D = ({ texture }) => {
  const mesh = useRef();

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.01; // Rotate the product
    }
  });

  return (
    <mesh ref={mesh}>
        {/* <planeBufferGeometry args={[5, 5]} /> */}
      <boxBufferGeometry args={[4,4,4]} />
      <meshStandardMaterial attach="material" map={texture} /> {/* Use the product image as a texture */}
    </mesh>
  );
};

const Product3DViewer = ({productImage}) => {

  const texture = new TextureLoader().load(productImage); // Replace '/path/to/product-image.jpg' with the actual path to your product image

  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Product3D texture={texture} />
    </Canvas>
  );
};

export default Product3DViewer;
