/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import { Environment, Center } from "@react-three/drei";
import Backdrop from "./Backdrop";
import CameroRig from "./CameroRig";
import Shirt from "./Shirt";

const CanvasModel = () => {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 0], fov: 50 }}
      gl={{ preserveDrawingBuffer: true }}
      className="w-full max-w-full h-full transition-all ease-in"
    >
      {" "}
      <ambientLight intensity={0.5} />
      <Environment preset="city" />
      <CameroRig>
        <Backdrop />
        <Center>
          <Shirt />
        </Center>
      </CameroRig>
    </Canvas>
  );
};

export default CanvasModel;
