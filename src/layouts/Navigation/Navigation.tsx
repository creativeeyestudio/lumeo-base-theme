import React from "react";
import Link from "next/link";
import NavigationProps, { NavLinkProps } from "./Navigation.interface";

const Navigation: React.FC<NavigationProps> = ({ menus, menuId, locale }) => {
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
            page={item.page}
            post={item.post}
            url={item.url}
            newTab={item.newTab}
            noFollowLink={item.noFollowLink}
            locale={locale}
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
  page,
  post,
  url,
  newTab,
  noFollowLink,
  locale,
}) => {
  const relValues = [
    newTab && "noopener noreferrer",
    noFollowLink && "nofollow",
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <li>
      {type == "page" && page && (
        <Link href={locale ? `/${locale}/${page.slug}` : `/${page.slug}`}>
          {label}
        </Link>
      )}
      {type == "post" && post && (
        <Link
          href={locale ? `/${locale}/blog/${post.slug}` : `/blog/${post.slug}`}
        >
          {label}
        </Link>
      )}
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
