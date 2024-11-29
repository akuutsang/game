import { OrbitControls } from "@react-three/drei";
import { CylinderCollider, RigidBody } from "@react-three/rapier";
import { Torii } from "./Torii";

export const Experience = () => {
  return (
    <>
      <OrbitControls />
      <ambientLight intensity={1} />
      <directionalLight
        position={[5, 5, 5]}
        intensity={0.8}
        castShadow
        color={"#9e69da"}
      />
      {/* BACKGROUND */}
      <Torii
        scale={[16, 16, 16]}
        position={[0, 0, -22]}
        rotation-y={1.25 * Math.PI}
      />
      <Torii
        scale={[10, 10, 10]}
        position={[-8, 0, -20]}
        rotation-y={1.24 * Math.PI}
      />
      <Torii scale={[10, 10, 10]} position={[8, 0, -20]} rotation-y={Math.PI} />
      <RigidBody colliders={false} type="fixed" position-y={-0.5}>
        <CylinderCollider args={[1 / 2, 5]} />
        <mesh scale={[5, 1, 5]} receiveShadow>
          <cylinderGeometry color="white" />
        </mesh>
      </RigidBody>
    </>
  );
};
