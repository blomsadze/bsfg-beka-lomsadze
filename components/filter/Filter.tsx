"use client";
import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Search from "../search/Search";
import Select from "../select/Select";

import CollectionsIcon from "@/public/icons/collections.svg";
import ProvidersIcon from "@/public/icons/providers.svg";

import {
  collectionOptions,
  providerOptions,
  updateQueryParam,
} from "@/utils/filterUtils";

const Filter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const collections = searchParams.get("collections")?.split(",") || [];
  const providers = searchParams.get("providers")?.split(",") || [];

  const handleSelectChange = (name: string, value: string) => {
    const newParams = new URLSearchParams(searchParams.toString());
    const updatedQuery = updateQueryParam(name, value, newParams);
    router.replace(`?${updatedQuery}`, { scroll: false });
  };

  return (
    <div className="flex row items-center gap-[10px]">
      <Search />
      <Select
        label="Collections"
        icon={CollectionsIcon}
        options={collectionOptions}
        onChange={(value) => handleSelectChange("collections", value)}
        value={collections}
      />
      <Select
        label="Providers"
        icon={ProvidersIcon}
        options={providerOptions}
        onChange={(value) => handleSelectChange("providers", value)}
        value={providers}
      />
    </div>
  );
};

export default Filter;
