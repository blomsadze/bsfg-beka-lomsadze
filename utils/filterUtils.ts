export const providerOptions = [
  { label: "All Providers", value: "all" },
  {
    label: "Bgaming",
    value: "bgaming",
  },
  {
    label: "GameBeat",
    value: "gamebeat",
  },
  {
    label: "Pragmatic Play",
    value: "pragmaticplay",
  },
  {
    label: "NetEnt",
    value: "netent",
  },
  {
    label: "PlayTech",
    value: "playtech",
  },
];

export const collectionOptions = [
  { label: "All Collections", value: "all" },
  {
    label: "All Games",
    value: "all-games",
  },
  {
    label: "Jackpot Games",
    value: "jackpot",
  },
  {
    label: "Megaways",
    value: "megaways",
  },
  {
    label: "Bonus Buy",
    value: "bonus-buy-games",
  },
  {
    label: "Drops & Wins",
    value: "drops-wins",
  },
  {
    label: "Table Games",
    value: "table-games",
  },
  {
    label: "Slots",
    value: "slots",
  },
  {
    label: "Blackjack",
    value: "blackjack",
  },
  {
    label: "Roulette",
    value: "roulette",
  },
  {
    label: "Live Casino",
    value: "live",
  },
  {
    label: "Baccarat",
    value: "baccarat",
  },
  {
    label: "Crash Games",
    value: "crash",
  },
  {
    label: "Dice Games",
    value: "dice",
  },
  {
    label: "Video Poker",
    value: "video-poker",
  },
  {
    label: "Books & Table Games",
    value: "books",
  },
  {
    label: "Bonus Buy Games",
    value: "bonus-buy",
  },
  {
    label: "Fruits & Hot Games",
    value: "fruits-hot",
  },
  {
    label: "Featured Games",
    value: "featured-games",
  },
  {
    label: "New Releases",
    value: "new-releases",
  },
  {
    label: "Hot Games",
    value: "hot-games",
  },
];

export const updateQueryParam = (
  key: string,
  value: string,
  currentParams: URLSearchParams
): string => {
  if (value === "all") {
    currentParams.delete(key);
    return currentParams.toString();
  }

  const currentValues = currentParams.get(key)?.split(",") || [];
  const updatedValues = currentValues.includes(value)
    ? currentValues.filter((item) => item !== value)
    : [...currentValues, value];

  if (updatedValues.length > 0) {
    currentParams.set(key, updatedValues.join(","));
  } else {
    currentParams.delete(key);
  }

  return currentParams.toString();
};
