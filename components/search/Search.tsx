"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import Search2Icon from "@/public/icons/search-2.svg";

const Search = () => {
  const router = useRouter();

  const [query, setQuery] = useState("");

  const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      const params = new URLSearchParams(window.location.search);

      if (query.length >= 3) {
        params.set("search", query);
      } else {
        params.delete("search");
      }

      router.replace(`?${params.toString()}`, { scroll: false });
    }, 300);

    return () => clearTimeout(timeout);
  }, [query, router]);

  return (
    <div className="bg-[#10202D] w-full h-[40px] rounded-[3px] border-[#273344] border-[1.5px] relative flex items-center">
      <div className="absolute left-3 top-1/2 -translate-y-1/2">
        <Image src={Search2Icon} alt="Search" width={16} height={16} />
      </div>
      <input
        className="pl-[43px] w-full h-full focus:outline-none focus:ring-0 focus:border-transparent"
        placeholder="Search Your Game"
        type="text"
        onChange={handleChangeText}
        value={query}
      />
    </div>
  );
};

export default Search;
