import Hero from "@/components/hero/Hero";
import CategoryGamesSection from "@/components/games/CategoryGamesSection";

import { getCategorySections } from "@/utils/getCategorySections";
import { fetchGames } from "@/actions/gameAction";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{
    providers?: string;
    categories?: string;
    search?: string;
    page?: string;
  }>;
}) {
  const resolvedParams = await searchParams;

  const filters = {
    providers: resolvedParams.providers?.split(",") || [],
    categories: resolvedParams.categories?.split(",") || [],
    search: resolvedParams.search || "",
    page: Number(resolvedParams.page) || 1,
  };

  const isFilteringOrSearching =
    filters.search.length >= 3 ||
    filters.providers.length > 0 ||
    filters.categories.length > 0 ||
    filters.page > 1;

  const data = await fetchGames(filters);
  const games = data.data || [];

  // get pagination from url of each category
  const perCategoryPages: Record<string, number> = {};
  Object.entries(resolvedParams).forEach(([key, value]) => {
    if (key.endsWith("-page") && value) {
      const category = key.replace("-page", "");
      perCategoryPages[category] = Number(value);
    }
  });

  const categorySections = await getCategorySections(perCategoryPages);

  return (
    <main className="lg:pl-[60px] xl:pl-0">
      <div className="max-width">
        <Hero />
        {isFilteringOrSearching ? (
          <ul>
            {games.map((game) => (
              <li key={game.id}>{game.name}</li>
            ))}
          </ul>
        ) : (
          categorySections.map((section) => (
            <CategoryGamesSection key={section.category} item={section} />
          ))
        )}
      </div>
    </main>
  );
}
