"use client";
import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import classNames from "classnames";

import LobbyIcon from "@/public/icons/lobby.svg";

import { categories, Category } from "@/lib/categories";
import { updateQueryParam } from "@/utils/filterUtils";

const CategoryItem = ({
  item: { icon, name },
  selected,
  onClick,
}: {
  item: Category;
  selected: boolean;
  onClick: () => void;
}) => {
  return (
    <li
      className={classNames(
        "flex items-center gap-2 border-1 min-w-fit cursor-pointer rounded-[5px] p-3 h-[40px]",
        {
          "bg-[#223444] border-[#273847] text-[#C1C9E5]": !selected,
          "bg-[#10202D] border-transparent text-white": selected,
        }
      )}
      onClick={onClick}
    >
      <Image src={icon} alt="Category Icon" width={20} height={20} />
      <span className="text-sm text-nowrap font-medium">{name}</span>
    </li>
  );
};

const CategoriesNavigation = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const selectedCategories = searchParams.get("category")?.split(",") || [
    "all",
  ];
  const [localCategory, setLocalCategory] =
    useState<string[]>(selectedCategories);

  const categoriesList = [
    {
      id: -1,
      name: "Lobby",
      icon: LobbyIcon,
      value: "all",
    },
    ...categories,
  ];

  const handleSelectCategory = (value: string) => {
    let updated;
    if (value === "all") {
      updated = ["all"];
    } else {
      updated = localCategory.includes(value)
        ? localCategory.filter((item) => item !== value)
        : [...localCategory.filter((val) => val !== "all"), value];
    }

    setLocalCategory(updated);
    const newParams = new URLSearchParams(searchParams.toString());
    const updatedQuery = updateQueryParam("category", value, newParams);
    router.replace(`?${updatedQuery}`, { scroll: false });
  };

  return (
    <ul className="flex flex-row items-center gap-[10px] overflow-x-auto flex-nowrap w-full">
      {categoriesList.map((item) => {
        const isSelected = localCategory.includes(item.value);

        return (
          <CategoryItem
            key={item.id}
            item={item}
            selected={isSelected}
            onClick={() => handleSelectCategory(item.value)}
          />
        );
      })}
    </ul>
  );
};

export default CategoriesNavigation;
