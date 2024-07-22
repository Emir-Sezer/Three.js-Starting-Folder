import { fragment, vertex } from "@/Shaders/Shaders";
import React from "react";

export const Model = () => {
  return (
    <mesh>
      <planeGeometry args={[2, 2, 20, 20]}/>
      <shaderMaterial vertexShader={vertex} fragmentShader={fragment} />
    </mesh>
  );
};
