import React from "react";

import BuyNowSection from "@/components/bottomSection/BuyNowSection";
import AboutCasino from "@/components/bottomSection/AboutCasino";
import ProvidersNavigation from "@/components/bottomSection/ProvidersNavigation";

const BottomSection = () => {
  return (
    <section className="flex mt-2 gap-[15px] lg:gap-[30px] flex-col">
      <ProvidersNavigation />
      <BuyNowSection />
      <AboutCasino />
    </section>
  );
};

export default BottomSection;
