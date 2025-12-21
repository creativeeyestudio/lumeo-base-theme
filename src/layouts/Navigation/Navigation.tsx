import React from "react";
import NavigationProps, { NavLinkProps } from "./Navigation.interface";

const Navigation: React.FC<NavigationProps> = ({ menus, menuId }) => {
  const menu = menus.find((m) => m.menuId === menuId);

  if (!menu) {
    console.error(
      `Le menu avec l'ID ${menuId} n'a pas été crée dans le Back-Office`
    );
    return null;
  }

  return (
    <nav>
      <ul>
        {menu.items.map((item) => (
          <NavLink
            key={item.id}
            id={item.id}
            label={item.label}
            type={item.type}
            url={item.url}
            newTab={item.newTab}
            noFollowLink={item.noFollowLink}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;

const NavLink: React.FC<NavLinkProps> = ({
  label,
  type,
  url,
  newTab,
  noFollowLink,
}) => {
  const relValues = [
    newTab && "noopener noreferrer",
    noFollowLink && "nofollow",
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <li>
      {type == "external" && (
        <a
          href={url ? url : ""}
          target={newTab ? "_blank" : "_self"}
          rel={relValues || undefined}
        >
          {label}
        </a>
      )}
    </li>
  );
};
