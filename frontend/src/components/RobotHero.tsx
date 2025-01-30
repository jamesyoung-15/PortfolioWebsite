import { useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
  useAnimations,
  useVideoTexture,
} from "@react-three/drei";
import {
  MirroredRepeatWrapping,
  RepeatWrapping,
} from "three";

const GLBModel = () => {
  // Load the GLB model and animations
  const model = useGLTF("/robot.glb");
  const { materials, animations } = model;

  // Access animations using the useAnimations hook
  const groupRef = useRef();
  const { actions } = useAnimations(animations, groupRef);

  // Create a video texture
  const videoTexture = useVideoTexture('/FaceTextures.mp4');

  // scale the video texture to fit the model
  videoTexture.wrapS = MirroredRepeatWrapping;
  videoTexture.wrapT = RepeatWrapping;
  videoTexture.rotation = (270 * Math.PI) / 180;
  videoTexture.repeat.set(5, 5);
  videoTexture.offset.set(0.61, 1);

  // Replace the material's texture map with the video texture for face
  useEffect(() => {
    if (materials.MatrixDisplay) {
    // @ts-ignore: Property 'map' does not exist on type 'Material'.
      materials.MatrixDisplay.map = videoTexture;

      materials.MatrixDisplay.needsUpdate = true;
    }
  }, [materials, videoTexture]);

  // Play and loop the first animation
  console.log(actions);
  useEffect(() => {
    if (actions) {
      actions[Object.keys(actions)[0]]?.play(); // robot body animation
      actions[Object.keys(actions)[1]]?.play(); // robot l arm animation
      actions[Object.keys(actions)[2]]?.play(); // robot r arm animation
    }
  }, [actions]);

  return (
    // @ts-ignore: Type 'MutableRefObject<undefined>' is not assignable to type 'Ref<Group<Object3DEventMap>>
    <group ref={groupRef} dispose={null}>
      <primitive object={model.scene} />
    </group>
  );
};

const RobotHero = () => {
  return (
    <section className="md:w-[100%] max-[500px]:mx-3 h-[50vh]">
      <Canvas camera={{ position: [0, 1.5, 5], fov: 40 }}>
        {/* Add lights */}
        <ambientLight intensity={2} />
        <directionalLight position={[0, 5, 10]} intensity={1} />

        {/* Load the 3D model */}
        <GLBModel />

        {/* Enable orbit controls and restrict angles */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          maxAzimuthAngle={Math.PI / 2}
        />
      </Canvas>
    </section>
  );
};

export default RobotHero;
