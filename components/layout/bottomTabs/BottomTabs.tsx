import React from "react";
import Image from "next/image";
import classNames from "classnames";

import { BottomTabItems } from "@/lib/bottomTabItems";

const BottomTabs = () => {
  return (
    <div className="lg:hidden rounded-t-[5px] border-t-1 border-[#273344] fixed bottom-0 flex flex-row w-full gap-[28px] justify-center h-[60px] bg-[#10212E] items-center">
      {BottomTabItems.map(({ id, label, icon }) => (
        <div
          key={id}
          className={classNames("flex flex-col items-center justify-center", {
            "rounded-full w-[50px] h-[50px] bg-[#0F70DC]": id === "deposit",
          })}
        >
          <Image src={icon} alt={label} width={24} height={24} />
          {id !== "deposit" && (
            <span className="text-[10px] text-white mt-1">{label}</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default BottomTabs;
