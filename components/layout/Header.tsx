import React from "react";
import Image from "next/image";

import RingIcon from "@/public/icons/ring.svg";
import UserIcon from "@/public/icons/user.svg";
import UsdIcon from "@/public/icons/usd.svg";

const Header = () => {
  return (
    <header className="bg-[#152535] h-[3.75rem]">
      <div className="max-width flex h-full justify-between items-center">
        <div className="bg-[#253241] rounded-[5px] w-[75px] h-[40px]" />
        <div className="flex items-center gap-[10px]">
          <div className="border-[#273344] p-2 pr-0 rounded-[5px] overflow-hidden h-[40px] border-1">
            <div className="flex items-center justify-between gap-[10px] h-full">
              <div className="rounded-full w-6 h-6 px-2 py-[6px] flex items-center justify-center bg-[#192C40]">
                <Image
                  src={UsdIcon}
                  alt="User Avatar"
                  className="w-full h-full"
                />
              </div>
              <p className="font-medium text-sm">10,566.12</p>
              <button className="uppercase bg-[#0F70DC] py-[12px] px-[21px] font-medium text-sm">
                deposit
              </button>
            </div>
          </div>
          <div className="flex items-center gap-[5px]">
            <div className="w-[40px] h-[40px] bg-[#1C2E3D] p-[10px] flex items-center rounded-[5px] border-1 border-[#273344]">
              <Image src={RingIcon} alt="Ring Icon" className="w-full h-full" />
            </div>
            <div className="w-[40px] h-[40px] bg-[#1C2E3D] p-[10px] flex items-center rounded-[5px] border-1 border-[#273344]">
              <Image src={UserIcon} alt="Ring Icon" className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
