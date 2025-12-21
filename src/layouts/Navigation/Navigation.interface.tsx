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
  locale?: string;
}

export interface NavLinkProps {
  id: string;
  label: string;
  newTab: boolean;
  noFollowLink: boolean;
  type: "page" | "post" | "external";
  page?: {
    slug: string;
  }
  post?: {
    slug: string;
  }
  url?: string;
  locale?: string;
}
