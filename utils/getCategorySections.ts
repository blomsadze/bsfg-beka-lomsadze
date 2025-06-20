import { fetchGames } from "@/actions/gameAction";
import { gameGridCategories } from "@/lib/categories";

export async function getCategorySections(
  perCategoryPages: Record<string, number>
) {
  const categoryData = await Promise.all(
    gameGridCategories.map((cfg) => {
      const page = perCategoryPages[cfg.key] || 1;
      return fetchGames({ categories: [cfg.key], page });
    })
  );

  return gameGridCategories.map((cfg, index) => ({
    title: cfg.title,
    category: cfg.key,
    games: categoryData[index].data,
    pagination: categoryData[index].pagination,
    categoryIcon: cfg.icon,
  }));
}
