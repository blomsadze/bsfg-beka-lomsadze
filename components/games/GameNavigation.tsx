"use client";
import React from "react";

import { useRouter, useSearchParams } from "next/navigation";
import { CategoryEnum } from "@/enums";
import { IPagination } from "@/types/RequestTypes";
import NavigationButton from "../ui/navigation/NavigationButton";

const GameNavigation = ({
  category,
  pagination,
  containerRef,
}: {
  category?: (typeof CategoryEnum)[keyof typeof CategoryEnum];
  pagination: IPagination;
  containerRef: React.RefObject<HTMLDivElement | null>;
}) => {
  const router = useRouter();
  const params = useSearchParams();

  const updatePage = (page: number) => {
    const current = new URLSearchParams(Array.from(params.entries()));
    current.set(category ? `${category}-page` : "page", page.toString());
    router.replace(`?${current.toString()}`, { scroll: false });
  };

  const scrollContainer = (isNext?: boolean) => {
    const container = containerRef.current;
    if (!container) return;

    const scrollAmount = 320;

    const scrollBy = isNext ? scrollAmount : -scrollAmount;

    container.scrollBy({
      left: scrollBy,
      behavior: "smooth",
    });

    const currentScroll = container.scrollLeft + scrollBy;
    const maxScroll = container.scrollWidth - container.clientWidth;
    const nearEnd = currentScroll >= maxScroll;
    const nearStart = currentScroll <= 0;

    if (isNext && nearEnd && pagination?.next_page !== null) {
      updatePage(pagination.next_page);
      container.scrollLeft = 0;
    }

    if (!isNext && nearStart && pagination?.prev_page !== null) {
      updatePage(pagination.prev_page);
      container.scrollLeft = 0;
    }
  };

  return (
    <div className="flex items-center justify-center lg:gap-[5px] gap-[3px]">
      <NavigationButton
        onClick={() => scrollContainer(false)}
        // disabled={!pagination?.has_prev_page}
      />
      <NavigationButton
        onClick={() => scrollContainer(true)}
        // disabled={!pagination?.has_next_page}
        isNext
      />
    </div>
  );
};

export default GameNavigation;
