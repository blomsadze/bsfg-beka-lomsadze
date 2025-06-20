import { CategoryEnum } from "@/enums";
import FeaturedGamesIcon from "@/public/icons/featured-games.svg";
import NewReleasesIcon from "@/public/icons/new-releases.svg";
import HotGamesIcon from "@/public/icons/hot-games.svg";
import BonusBuyIcon from "@/public/icons/bonus-buy.svg";
import LiveGamesIcon from "@/public/icons/live-games.svg";

export interface Category {
  id: number;
  name: string;
  icon: string;
}

export const gameGridCategories = [
  {
    title: "Featured Games",
    key: CategoryEnum.FEATURED_GAMES,
    icon: FeaturedGamesIcon,
  },
  {
    title: "New Releases",
    key: CategoryEnum.NEW_RELEASES,
    icon: NewReleasesIcon,
  },
  { title: "Hot Games", key: CategoryEnum.HOT_GAMES, icon: HotGamesIcon },
  { title: "Bonus Buy", key: CategoryEnum.BONUS_BUY, icon: BonusBuyIcon },
  { title: "Live Games", key: CategoryEnum.LIVE, icon: LiveGamesIcon },
];

export const CATEGORIES: Category[] = [
  {
    id: 0,
    name: "Slots",
    icon: "/icons/categories/slots.svg",
  },
  {
    id: 1,
    name: "Blackjack",
    icon: "/icons/categories/blackjack.svg",
  },
  {
    id: 2,
    name: "Roulette",
    icon: "/icons/categories/roulette.svg",
  },
  {
    id: 3,
    name: "Live Dealer",
    icon: "/icons/categories/live.svg",
  },
  {
    id: 4,
    name: "Baccarat",
    icon: "/icons/categories/baccarat.svg",
  },
  {
    id: 5,
    name: "Crash",
    icon: "/icons/categories/crash.svg",
  },
  {
    id: 6,
    name: "Dice",
    icon: "/icons/categories/dice.svg",
  },
  {
    id: 7,
    name: "Video Poker",
    icon: "/icons/categories/video-poker.svg",
  },
];
