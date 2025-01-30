import React from "react";
import { TypeAnimation } from "react-type-animation";
import RobotHero from "./RobotHero";

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col items-center mt-25 text-white">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold">
          Hello, my name is James!
        </h1>
        <h2 className="text-3xl md:text-5xl mt-3">
          I am a{" "}
          <TypeAnimation
            sequence={[
              "developer.",
              2500,
              "tinkerer.",
              2500,
              "problem solver.",
              2500,
              "", // Empty string to loop back to the start
            ]}
            speed={50}
            wrapper="span"
            repeat={Infinity}
          />
        </h2>
      </div>
      {/* three js scene */}
      <RobotHero />
    </section>
  );
};

export default Hero;
