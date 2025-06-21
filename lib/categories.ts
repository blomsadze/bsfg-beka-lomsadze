import { CategoryEnum } from "@/enums";

export interface Category {
  id: number;
  name: string;
  icon: string;
  value: string;
}

export const gameGridCategories = [
  {
    title: "Featured Games",
    key: CategoryEnum.FEATURED_GAMES,
    icon: "/icons/featured-games.svg",
  },
  {
    title: "New Releases",
    key: CategoryEnum.NEW_RELEASES,
    icon: "/icons/new-releases.svg",
  },
  {
    title: "Hot Games",
    key: CategoryEnum.HOT_GAMES,
    icon: "/icons/hot-games.svg",
  },
  {
    title: "Bonus Buy",
    key: CategoryEnum.BONUS_BUY,
    icon: "/icons/bonus-buy.svg",
  },
  {
    title: "Live Games",
    key: CategoryEnum.LIVE,
    icon: "/icons/live-games.svg",
  },
];

export const categories: Category[] = [
  {
    id: 0,
    name: "Slots",
    icon: "/icons/categories/slots.svg",
    value: CategoryEnum.SLOTS,
  },
  {
    id: 1,
    name: "Blackjack",
    icon: "/icons/categories/blackjack.svg",
    value: CategoryEnum.BLACKJACK,
  },
  {
    id: 2,
    name: "Roulette",
    icon: "/icons/categories/roulette.svg",
    value: CategoryEnum.ROULETTE,
  },
  {
    id: 3,
    name: "Live Dealer",
    icon: "/icons/categories/live.svg",
    value: CategoryEnum.LIVE,
  },
  {
    id: 4,
    name: "Baccarat",
    icon: "/icons/categories/baccarat.svg",
    value: CategoryEnum.BACCARAT,
  },
  {
    id: 5,
    name: "Crash",
    icon: "/icons/categories/crash.svg",
    value: CategoryEnum.CRASH,
  },
  {
    id: 6,
    name: "Dice",
    icon: "/icons/categories/dice.svg",
    value: CategoryEnum.DICE,
  },
  {
    id: 7,
    name: "Video Poker",
    icon: "/icons/categories/video-poker.svg",
    value: CategoryEnum.VIDEO_POKER,
  },
  {
    id: 8,
    name: "Books",
    icon: "/icons/categories/books.svg",
    value: CategoryEnum.BOOKS,
  },
  {
    id: 9,
    name: "Bonus Buy",
    icon: "/icons/bonus-buy.svg",
    value: CategoryEnum.BONUS_BUY,
  },
  {
    id: 10,
    name: "Fruits",
    icon: "/icons/categories/fruits.svg",
    value: CategoryEnum.FRUITS,
  },
  {
    id: 11,
    name: "Hot",
    icon: "/icons/hot-games.svg",
    value: CategoryEnum.HOT,
  },
  {
    id: 12,
    name: "Featured Games",
    icon: "/icons/featured-games.svg",
    value: CategoryEnum.FEATURED_GAMES,
  },
  {
    id: 13,
    name: "New Releases",
    icon: "/icons/new-releases.svg",
    value: CategoryEnum.NEW_RELEASES,
  },
  {
    id: 14,
    name: "Hot Games",
    icon: "/icons/hot-games.svg",
    value: CategoryEnum.HOT_GAMES,
  },
];
