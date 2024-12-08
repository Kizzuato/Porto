'use client'

import React from "react";
import Particles from "react-tsparticles";

const ParticlesBackground: React.FC = () => {
  return (
    <>
    <Particles
      id="tsparticles"
      options={{
        background: {
          color: "#0d47a1",
        },
        particles: {
          number: {
            value: 50,
          },
          color: {
            value: "#ffffff",
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.5,
          },
          size: {
            value: 3,
          },
          move: {
            enable: true,
            speed: 2,
          },
        },
      }}
    />
    </>
  );
};

export default ParticlesBackground;
