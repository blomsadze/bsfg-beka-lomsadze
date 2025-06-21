"use client";
import React, { useState } from "react";
import Image from "next/image";
import classNames from "classnames";

import AsideMenu from "./AsideMenu";
import BurgerIcon from "@/public/icons/burger.svg";

const Aside = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleAside = () => {
    setExpanded(!expanded);
  };

  return (
    <aside
      className={classNames(
        "lg:fixed py-[11px] z-[99] transition-all duration-300 lg:flex flex-col justify-start hidden h-full border-[#273344] border-r-1 fixed bg-[#162231]",
        {
          "w-[200px]": expanded,
          "w-[60px]": !expanded,
        }
      )}
    >
      <div className="flex items-center justify-start">
        <div
          className={classNames({
            "px-6": expanded,
            "px-2": !expanded,
          })}
          onClick={toggleAside}
        >
          <Image
            src={BurgerIcon}
            alt="burger-icon"
            className="cursor-pointer"
          />
        </div>
      </div>
      <AsideMenu isOpen={expanded} />
    </aside>
  );
};

export default Aside;
