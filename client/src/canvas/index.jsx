import { Canvas } from "@react-three/fiber";
import { Environment, Center } from "@react-three/drei";
import Backdrop from "./Backdrop";
import CameroRig from "./CameroRig";
import Shirt from "./Shirt";

const CanvasModel = () => {
  return (
    <Canvas>
      {" "}
      <ambientLight intensity={0.5} />
      <Environment preset="city" />
      <CameroRig>
        {/* <Backdrop /> */}
        <Center>
          <Shirt />
        </Center>
      </CameroRig>
    </Canvas>
  );
};

export default CanvasModel;
