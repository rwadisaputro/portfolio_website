/*
    Auto-generated by: https://github.com/pmndrs/gltfjsx
    Command: npx gltfjsx@6.5.0 react.glb -T
    Author: xenadus (https://sketchfab.com/xenadus)
    License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
    Source: https://sketchfab.com/3d-models/react-logo-76174ceeba96487f9863f974636f641e
*/

import { Float, useGLTF } from '@react-three/drei';

const Infinity = (props) => {
  const { nodes, materials } = useGLTF('models/infinity_loop.glb');

  return (
    <Float floatIntensity={1}>
      <group position={[8, 8, 0]} scale={0.0125} {...props} dispose={null}>
        <mesh
          geometry={nodes.Object_2.geometry}
          material={materials.material_0}
          position={[100, 220, 100]}
          rotation={[0, 0, Math.PI]}
          scale={[0.392, 0.392, 0.527]}
        />
      </group>
    </Float>
  );
};

useGLTF.preload('models/infinity_loop.glb');

export default Infinity;