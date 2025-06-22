import React from "react";
import Image from "next/image";
import { cryptoItems } from "@/utils/footerUtils";

const FooterCryptoItems = () => {
  return (
    <ul className="flex items-center flex-wrap lg:flex-nowrap justify-center gap-4">
      {cryptoItems.map((item) => (
        <li key={item.id}>
          <div className="w-[64px] h-[64px] flex items-end justify-center rounded-full px-[10px] py-2">
            <Image
              src={item.src}
              alt={`Crypto-icon-${item.id}`}
              className="w-full h-full object-contain"
              width={64}
              height={64}
            />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default FooterCryptoItems;
