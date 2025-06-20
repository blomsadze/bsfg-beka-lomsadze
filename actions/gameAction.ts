import { IGameResponse } from "@/types/GameTypes";
import { CategoryEnum } from "@/enums";

type GameFilters = {
  providers?: string[];
  categories?: (typeof CategoryEnum)[keyof typeof CategoryEnum][];
  search?: string;
  page?: number;
};

export async function fetchGames(
  filters: GameFilters = {}
): Promise<IGameResponse> {
  const params = new URLSearchParams();

  if (filters.providers && filters.providers.length) {
    params.set("provider", filters.providers.join(","));
  }

  if (filters.categories && filters.categories.length) {
    params.set("category", filters.categories.join(","));
  }

  if (filters.search) {
    params.append("search", filters.search);
  }

  if (filters.page) {
    params.append("page", filters.page.toString());
  }

  const url = `https://api.remailer.eu/games/list.php?${params.toString()}`;

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to fetch games");
  }

  return res.json();
}
