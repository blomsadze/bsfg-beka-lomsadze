import React from "react";
import Image from "next/image";
import classNames from "classnames";

import { asideItems } from "@/lib/asideItems";

type TProps = {
  isOpen: boolean;
};

const AsideMenu = ({ isOpen }: TProps) => {
  return (
    <nav
      className={classNames("flex-1 overflow-y-auto", {
        "px-5": isOpen,
      })}
    >
      {asideItems.map((section, index) => (
        <div
          key={index}
          className={classNames(
            "flex flex-col transition-all duration-200 space-y-2 mt-5 py-[10px] px-2",
            {
              "bg-[#1C2E3D] rounded-[5px]": isOpen,
            }
          )}
        >
          <div className="space-y-2">
            {section.items.map((item) => (
              <div
                key={item.id}
                className={classNames(
                  "flex items-center space-x-3 p-2 rounded cursor-pointer hover:bg-[#2A3B4C]",
                  {
                    "justify-start": isOpen,
                    "justify-center": !isOpen,
                  }
                )}
              >
                <Image
                  src={item.icon}
                  alt={item.name}
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
                {isOpen && (
                  <span className="text-white text-nowrap text-sm">
                    {item.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </nav>
  );
};

export default AsideMenu;
