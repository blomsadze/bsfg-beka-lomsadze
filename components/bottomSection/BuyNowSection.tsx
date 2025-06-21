import React from "react";
import Image from "next/image";

import { buyNowItems } from "@/utils/bottomSectionUtils";
import Button from "../ui/button/Button";

const BuyNowSection = () => {
  return (
    <div className="bg-[#10202D] flex-wrap lg:flex-nowrap gap-[10px] lg:gap-[40px] p-[15px] lg:p-[25px] flex items-center justify-center lg:justify-between border-[#253241] border-1 rounded-[5px]">
      <h2 className="font-bold text-[20px] lg:text-nowrap text-center lg:text-left">
        You don’t have Crypto? <br /> No problem.
      </h2>
      <ul className="flex flex-wrap lg:flex-nowrap items-center lg:gap-[15px] justify-center">
        {buyNowItems.map((item) => (
          <li key={item.id}>
            <Image
              key={item.id}
              src={item.src}
              alt={`Buy Now Item ${item.id}`}
              width={80}
              height={55}
            />
          </li>
        ))}
      </ul>
      <Button className="lg:w-[175px] w-full">
        <span className="uppercase font-semibold">Buy Now</span>
      </Button>
    </div>
  );
};

export default BuyNowSection;
