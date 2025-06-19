export interface IBottomTabItem {
  id: string;
  label: string;
  icon: string;
}

export const BottomTabItems: IBottomTabItem[] = [
  {
    id: "home",
    label: "Home",
    icon: "/icons/home.svg",
  },
  {
    id: "search",
    label: "Search",
    icon: "/icons/search.svg",
  },
  {
    id: "deposit",
    label: "Deposit",
    icon: "/icons/deposit-mobile.svg",
  },
  {
    id: "chat",
    label: "Chat",
    icon: "/icons/chat.svg",
  },
  {
    id: "menu",
    label: "Menu",
    icon: "/icons/menu.svg",
  },
];
