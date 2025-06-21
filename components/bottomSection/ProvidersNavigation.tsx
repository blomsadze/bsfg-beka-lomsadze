import React from "react";
import Image from "next/image";
import NavigationButton from "../ui/navigation/NavigationButton";

import { providersList } from "@/utils/providerUtils";

const ProvidersNavigation = () => {
  return (
    <div>
      <div className="flex items-center justify-between lg:mb-[15px] mb-[10px]">
        <div className="flex items-center gap-3">
          <Image
            src="/icons/providers-navigation.svg"
            width={16}
            height={16}
            alt="providers nav icon"
          />
          <p className="font-medium">Providers</p>
        </div>
        <div className="flex items-center justify-center lg:gap-[5px] gap-[3px]">
          <NavigationButton disabled />
          <NavigationButton isNext />
        </div>
      </div>
      <ul className="flex flex-row items-center w-full gap-[15px] flex-nowrap overflow-x-auto">
        {providersList.map((provider) => (
          <li
            key={provider.id}
            className="bg-[#10202D] lg:w-[150px] w-[115px] h-[50px] lg:h-[60px] rounded-[5px] min-w-fit flex items-center justify-center"
          >
            <Image
              src={provider.src}
              className="w-full h-full object-cover"
              alt={`Provider ${provider.id}`}
              width={150}
              height={60}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProvidersNavigation;
