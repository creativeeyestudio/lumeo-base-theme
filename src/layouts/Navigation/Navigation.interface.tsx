export interface Menu {
  id: number;
  menuId: string;
  items: NavLinkProps[];
  createdAt: string;
  updatedAt: string;
}

export default interface NavigationProps {
  menus: Menu[];
  menuId: string;
}

export interface NavLinkProps {
  id: string; // ⚠️ dans tes données c’est une string, pas un number
  label: string;
  newTab: boolean;
  noFollowLink: boolean;
  type: "page" | "post" | "external";
  url?: string;
}
