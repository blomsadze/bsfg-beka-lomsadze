"use client";
import React from "react";
import Image from "next/image";
import classNames from "classnames";

import ArrowIcon from "@/public/icons/arrow.svg";
import { useRouter, useSearchParams } from "next/navigation";
import { CategoryEnum } from "@/enums";
import { IPagination } from "@/types/RequestTypes";

const NavigationButton = ({
  isNext,
  onClick,
  disabled,
}: {
  isNext?: boolean;
  onClick: () => void;
  disabled: boolean;
}) => {
  return (
    <button
      onClick={onClick}
      className={classNames(
        "lg:w-[35px] w-[28px] h-[28px] p-[7px] border-[2px] border-[#253241] flex items-center justify-center lg:h-[35px] rounded-[5px] bg-[#141F2B]",
        {
          "bg-[#182734] cursor-not-allowed opacity-50": disabled,
          "cursor-pointer": !disabled,
        }
      )}
      disabled={disabled}
    >
      <Image
        src={ArrowIcon}
        className={classNames("w-full h-full", {
          "rotate-180": isNext,
        })}
        alt="Arrow"
      />
    </button>
  );
};

const GameNavigation = ({
  category,
  pagination,
  containerRef,
}: {
  category: (typeof CategoryEnum)[keyof typeof CategoryEnum];
  pagination: IPagination;
  containerRef: React.RefObject<HTMLDivElement | null>;
}) => {
  const router = useRouter();
  const params = useSearchParams();

  const updatePage = (page: number) => {
    const current = new URLSearchParams(Array.from(params.entries()));
    current.set(`${category}-page`, page.toString());
    // router.push(`?${current.toString()}`);
    router.replace(`?${current.toString()}`, { scroll: false });
  };

  const scrollContainer = (isNext?: boolean) => {
    const container = containerRef.current;
    if (!container) return;

    const scrollAmount = container.offsetWidth;

    container.scrollBy({
      left: isNext ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });

    const currentScroll =
      container.scrollLeft + (isNext ? scrollAmount : -scrollAmount);
    const maxScroll = container.scrollWidth - container.clientWidth;

    const nearStart = currentScroll <= 0;
    const nearEnd = currentScroll + 10 >= maxScroll;

    if (!isNext && nearStart && pagination?.prev_page !== null) {
      updatePage(pagination.prev_page);
    }

    if (isNext && nearEnd && pagination?.next_page !== null) {
      updatePage(pagination.next_page);
    }
  };

  return (
    <div className="flex items-center justify-center lg:gap-[5px] gap-[3px]">
      <NavigationButton
        onClick={() => scrollContainer(false)}
        disabled={!pagination?.has_prev_page}
      />
      <NavigationButton
        onClick={() => scrollContainer(true)}
        disabled={!pagination?.has_next_page}
        isNext
      />
    </div>
  );
};

export default GameNavigation;
