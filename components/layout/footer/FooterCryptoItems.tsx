import React from "react";
import Image from "next/image";
import { cryptoItems } from "@/utils/footerUtils";

const FooterCryptoItems = () => {
  return (
    <ul className="flex items-center flex-wrap lg:flex-nowrap justify-center gap-4">
      {cryptoItems.map((item) => (
        <li key={item.id}>
          <div className="w-[45px] h-[45px] bg-fred-400 flex items-end justify-center rounded-full px-[10px] py-2">
            <Image
              src={item.src}
              alt={`Crypto-icon-${item.id}`}
              width={45}
              height={45}
            />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default FooterCryptoItems;
