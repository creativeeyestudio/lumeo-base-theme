import React from "react";
import NavigationProps, { NavLinkProps } from "./Navigation.interface";

const Navigation: React.FC<NavigationProps> = ({ menus, menuId }) => {
  const menu = menus.find((m) => m.menuId === menuId);

  if (!menu) return null;

  console.log(menu);
  

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
          />
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;

const NavLink: React.FC<NavLinkProps> = ({ label, newTab, type, url }) => {
  return (
    <li>
      {type == "external" && (
        <a href={url ? url : ""} target={newTab ? "_blank" : "_self"}>
          {label}
        </a>
      )}
    </li>
  );
};
