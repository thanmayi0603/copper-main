import React from "react";
import HeroText from "./components/hero-text/HeroText";
import HeroCode from "./components/hero-code/HeroCode";

const HeroBlock = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-row items-center">
        <div className="w-1/2">
          <HeroText />
        </div>
        <div className="w-1/2">
          <HeroCode />
        </div>
      </div>
    </div>
  );
};

export default HeroBlock;
