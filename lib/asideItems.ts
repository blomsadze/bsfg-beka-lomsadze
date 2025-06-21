import { categories } from "./categories";

export interface IAsideItem {
  id: string | number;
  icon: string;
  name: string;
}

export interface IAsideSection {
  section: string;
  items: IAsideItem[];
}

export const asideItems: IAsideSection[] = [
  {
    section: "Main",
    items: [
      {
        id: "promotions",
        icon: "/icons/aside-items/promotions.svg",
        name: "Promotions",
      },
      {
        id: "vipClub",
        icon: "/icons/aside-items/vip.svg",
        name: "VIP Club",
      },
      {
        id: "tournaments",
        icon: "/icons/aside-items/tournaments.svg",
        name: "Tournaments",
      },
    ],
  },
  {
    section: "Games",
    items: [...categories].slice(0, 8),
  },
  {
    section: "Library",
    items: [
      {
        icon: "/icons/aside-items/favorites.svg",
        name: "Favorites",
        id: "favorites",
      },
      { icon: "/icons/aside-items/recent.svg", name: "Recent", id: "recent" },
      {
        icon: "/icons/aside-items/collections.svg",
        name: "Collections",
        id: "collections",
      },
      {
        icon: "/icons/aside-items/providers.svg",
        name: "Providers",
        id: "providers",
      },
    ],
  },
  {
    section: "Settings",
    items: [
      {
        icon: "/icons/aside-items/support.svg",
        name: "Support",
        id: "support",
      },
      {
        icon: "/icons/aside-items/language.svg",
        name: "English",
        id: "language",
      },
    ],
  },
];
