import Hero from "@/components/hero/Hero";
import GamesSection from "@/components/games/GamesSection";
import GamesFilter from "@/components/games/GamesFilter";
import BottomSection from "@/components/bottomSection/BottomSection";

import { getCategorySections } from "@/utils/getCategorySections";
import { fetchGames } from "@/actions/gameAction";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{
    providers?: string;
    collections?: string;
    category?: string;
    search?: string;
    page?: string;
  }>;
}) {
  const resolvedParams = await searchParams;

  const filters = {
    providers: resolvedParams.providers?.split(",") || [],
    collections: resolvedParams.collections?.split(",") || [],
    category: resolvedParams.category?.split(",") || [],
    search: resolvedParams.search || "",
    page: Number(resolvedParams.page) || 1,
  };

  const isFilteringOrSearching =
    filters.search.length >= 3 ||
    filters.providers.length > 0 ||
    filters.collections.length > 0 ||
    filters.category.length > 0 ||
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
        <div className="flex mt-[15px] flex-col gap-[15px] mb-[25px]">
          <GamesFilter />
        </div>
        {isFilteringOrSearching ? (
          <GamesSection
            item={{
              games,
              pagination: data?.pagination,
            }}
          />
        ) : (
          categorySections.map((section) => (
            <GamesSection key={section.category} item={section} />
          ))
        )}
        <BottomSection />
      </div>
    </main>
  );
}
