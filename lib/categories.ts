export interface Category {
  id: number;
  name: string;
  icon: string;
}

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
