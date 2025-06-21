"use client";
import React, { useRef } from "react";
import Image from "next/image";
import classNames from "classnames";

import GameNavigation from "./GameNavigation";
import GameItem from "./GameItem";

import { CategoryEnum } from "@/enums";
import { IGame } from "@/types/GameTypes";
import { IPagination } from "@/types/RequestTypes";

interface GameSectionProps {
  item: {
    title?: string;
    category?: (typeof CategoryEnum)[keyof typeof CategoryEnum];
    games: IGame[];
    pagination: IPagination;
    categoryIcon?: string;
  };
}

const CategoryGamesSection = ({
  item: { title, category, games, categoryIcon, pagination },
}: GameSectionProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="mb-[25px] overflow-hidden">
      <div
        className={classNames("mb-[10px] lg:mb-4 flex items-center", {
          "justify-between": title,
          "justify-end": !title,
        })}
      >
        {title && categoryIcon && (
          <div className="flex items-center gap-[10px]">
            <Image src={categoryIcon} alt={title} width={20} height={20} />
            <p className="text-[12px] lg:text-base font-medium">{title}</p>
          </div>
        )}
        <GameNavigation
          category={category}
          pagination={pagination}
          containerRef={containerRef}
        />
      </div>
      <div
        ref={containerRef}
        className="flex h-[150px] w-full lg:h-[200px] flex-row gap-[15px] overflow-x-auto"
      >
        {games.map((game) => (
          <GameItem key={game.id} item={game} />
        ))}
      </div>
    </div>
  );
};

export default CategoryGamesSection;
