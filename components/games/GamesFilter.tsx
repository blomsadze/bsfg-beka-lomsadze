"use client";
import React from "react";
import Search from "../search/Search";
import CategoriesNavigation from "./CategoriesNavigation";
import GameSelectors from "./GameSelectors";

const GamesFilter = () => {
  return (
    <div className="flex flex-col gap-[15px]">
      <div className="flex row items-center gap-[10px]">
        <Search />
        <div className="hidden items-center lg:flex min-w-[380px] gap-[10px]">
          <GameSelectors />
        </div>
      </div>
      <CategoriesNavigation />
      <div className="lg:hidden items-center grid grid-cols-2 min-w-[380px] gap-[5px]">
        <GameSelectors />
      </div>
    </div>
  );
};

export default GamesFilter;
