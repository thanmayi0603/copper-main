import FooterBar from "@/components/footer-bar/FooterBar";
import NavigationBar from "@/components/navigation-bar/NavigationBar";
import React from "react";
import HeroBlock from "./blocks/hero-block/HeroBlock";
import FeaturesBlock from "./blocks/features-block/FeaturesBlock";

const RootPage = () => {
  return (
    <>
      <div className="sticky top-0 bg-base-100/50 container mx-auto py-6 backdrop-blur-xl z-50">
        <NavigationBar />
      </div>
      <div className="flex flex-col items-stretch">
        <div className="container mx-auto p-24">
          <HeroBlock />
        </div>
        <div className="container mx-auto p-24">
          <FeaturesBlock />
        </div>
        <FooterBar />
      </div>
    </>
  );
};

export default RootPage;
