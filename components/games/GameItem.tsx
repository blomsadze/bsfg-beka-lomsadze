"use client";
import React, { useState } from "react";
import Image from "next/image";
import classNames from "classnames";

import { IGame } from "@/types/GameTypes";

type TProps = {
  item: IGame;
};

const GameItem = ({ item }: TProps) => {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };
  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative lg:w-[150px] w-[112px] flex-shrink-0 cursor-pointer rounded-[5px]"
    >
      <div
        className={classNames(
          "absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black to-transparent transition-opacity duration-300 ease-in-out",
          { "opacity-100": hover, "opacity-0": !hover }
        )}
      >
        <div className="flex flex-col items-center gap-2">
          <p className="text-white text-lg text-center font-bold">
            {item?.name}
          </p>
          <p className="text-white text-base text-center font-semibold">
            {item?.provider}
          </p>
        </div>
      </div>
      <Image
        key={item.id}
        className="h-full w-full rounded-[5px] object-cover"
        src={item.image}
        alt={item.name}
        width={150}
        height={200}
      />
    </div>
  );
};

export default GameItem;
