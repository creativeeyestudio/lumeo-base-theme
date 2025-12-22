var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});

// src/components/ButtonLink/ButtonLink.module.css
var ButtonLink_default = {};

// src/components/ButtonLink/ButtonLink.tsx
import { jsx } from "react/jsx-runtime";
var ButtonLink = ({ href, label, blank = false }) => {
  return /* @__PURE__ */ jsx("a", { href, target: blank ? "_blank" : "", className: `${ButtonLink_default.ButtonLink}`, children: label });
};
var ButtonLink_default2 = ButtonLink;

// src/components/Card/Card.module.css
var Card_default = {};

// src/components/Card/Card.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var Card = (props) => {
  return /* @__PURE__ */ jsx2("div", { className: Card_default.Card, children: "Card" });
};
var Card_default2 = Card;

// src/components/Image/Image.tsx
import { Fragment, jsx as jsx3 } from "react/jsx-runtime";
var NextImage;
try {
  NextImage = __require("next/image").default;
} catch (error) {
  NextImage = null;
}
var ThemeImage = () => {
  return /* @__PURE__ */ jsx3(Fragment, {});
};
var Image_default = ThemeImage;

// src/components/Text/Text.module.css
var Text_default = {};

// src/components/Text/Text.tsx
import { jsx as jsx4 } from "react/jsx-runtime";
var Text = (props) => {
  return /* @__PURE__ */ jsx4("section", { className: Text_default.Text, children: "Text" });
};
var Text_default2 = Text;

// src/blocks/HeroscreenBlock/HeroscreenBlock.module.css
var HeroscreenBlock_default = {};

// src/blocks/HeroscreenBlock/HeroscreenBlock.tsx
import Image from "next/image";
import { jsx as jsx5 } from "react/jsx-runtime";
var HeroscreenBlock = ({
  hero_image,
  className
}) => {
  var _a;
  if (!process.env.PAYLOAD_URL) {
    console.error("Payload URL not found");
    return null;
  }
  return /* @__PURE__ */ jsx5("figure", { className: `${HeroscreenBlock_default.HeroscreenBlock} ${className != null ? className : ""}`, children: /* @__PURE__ */ jsx5(
    Image,
    {
      src: process.env.PAYLOAD_URL + hero_image.url,
      alt: (_a = hero_image.alt) != null ? _a : "",
      fill: true,
      className: HeroscreenBlock_default.HeroscreenBlock__image,
      style: { objectFit: "cover", objectPosition: "center" },
      priority: true
    }
  ) });
};
var HeroscreenBlock_default2 = HeroscreenBlock;

// src/blocks/HtmlContentBlock/HtmlContentBlock.tsx
import { jsx as jsx6 } from "react/jsx-runtime";
var HtmlContentBlock = (props) => {
  return /* @__PURE__ */ jsx6("div", { children: "HtmlContentBlock" });
};
var HtmlContentBlock_default = HtmlContentBlock;

// src/blocks/ParallaxBlock/ParallaxBlock.module.css
var ParallaxBlock_default = {};

// src/blocks/ParallaxBlock/ParallaxBlock.tsx
import { jsx as jsx7 } from "react/jsx-runtime";
var ParallaxBlock = (props) => {
  return /* @__PURE__ */ jsx7("div", { className: ParallaxBlock_default.ParallaxBlock, children: "ParallaxBlock" });
};
var ParallaxBlock_default2 = ParallaxBlock;

// src/blocks/TextBlock/TextBlock.module.css
var TextBlock_default = {};

// src/blocks/TextBlock/TextBlock.tsx
import { jsx as jsx8 } from "react/jsx-runtime";
var TextBlock = (props) => {
  return /* @__PURE__ */ jsx8("section", { className: TextBlock_default.TextBlock, children: "TextBlock" });
};
var TextBlock_default2 = TextBlock;

// src/blocks/TextImageBlock/TextImageBlock.module.css
var TextImageBlock_default = {};

// src/blocks/TextImageBlock/TextImageBlock.tsx
import { jsx as jsx9 } from "react/jsx-runtime";
var TextImageBlock = (props) => {
  return /* @__PURE__ */ jsx9("section", { className: TextImageBlock_default.TextImageBlock, children: "TextImageBlock" });
};
var TextImageBlock_default2 = TextImageBlock;

// src/blocks/TextImageDoubleBlock/TextImageDoubleBlock.module.css
var TextImageDoubleBlock_default = {};

// src/blocks/TextImageDoubleBlock/TextImageDoubleBlock.tsx
import { jsx as jsx10 } from "react/jsx-runtime";
var TextImageDoubleBlock = (props) => {
  return /* @__PURE__ */ jsx10("section", { className: TextImageDoubleBlock_default.TextImageDoubleBlock, children: "TextImageDoubleBlock" });
};
var TextImageDoubleBlock_default2 = TextImageDoubleBlock;

// src/blocks/TextIntroBlock/TextIntroBlock.module.css
var TextIntroBlock_default = {};

// src/blocks/TextIntroBlock/TextIntroBlock.tsx
import { jsx as jsx11 } from "react/jsx-runtime";
var TextIntroBlock = (props) => {
  return /* @__PURE__ */ jsx11("section", { className: TextIntroBlock_default.TextIntroBlock, children: "TextIntroBlock" });
};
var TextIntroBlock_default2 = TextIntroBlock;

// src/layouts/Footer/Footer.module.css
var Footer_default = {};

// src/layouts/Footer/Footer.tsx
import { jsx as jsx12 } from "react/jsx-runtime";
var Footer = ({ children }) => {
  return /* @__PURE__ */ jsx12("footer", { className: Footer_default.Footer, children });
};
var Footer_default2 = Footer;

// src/layouts/Header/Header.module.css
var Header_default = {};

// src/layouts/Header/Header.tsx
import { jsx as jsx13 } from "react/jsx-runtime";
var Header = ({ children }) => {
  return /* @__PURE__ */ jsx13("header", { className: Header_default.Header, children });
};
var Header_default2 = Header;

// src/components/Logo/Logo.tsx
import Image2 from "next/image";
import { Fragment as Fragment2, jsx as jsx14 } from "react/jsx-runtime";
var Logo = ({ url, alt, width, height }) => {
  return process.env.PAYLOAD_URL && url ? /* @__PURE__ */ jsx14(
    Image2,
    {
      src: process.env.PAYLOAD_URL + url,
      alt: alt != null ? alt : "",
      width,
      height,
      style: { objectFit: "contain" }
    }
  ) : /* @__PURE__ */ jsx14(Fragment2, {});
};
var Logo_default = Logo;

// src/layouts/Navigation/Navigation.tsx
import Link from "next/link";
import { jsx as jsx15, jsxs } from "react/jsx-runtime";
var Navigation = ({ menus, menuId, locale }) => {
  const menu = menus.find((m) => m.menuId === menuId);
  if (!menu) {
    console.error(
      `Le menu avec l'ID ${menuId} n'a pas \xE9t\xE9 cr\xE9e dans le Back-Office`
    );
    return null;
  }
  return /* @__PURE__ */ jsx15("nav", { children: /* @__PURE__ */ jsx15("ul", { children: menu.items.map((item) => /* @__PURE__ */ jsx15(
    NavLink,
    {
      id: item.id,
      label: item.label,
      type: item.type,
      page: item.page,
      post: item.post,
      url: item.url,
      newTab: item.newTab,
      noFollowLink: item.noFollowLink,
      locale
    },
    item.id
  )) }) });
};
var Navigation_default = Navigation;
var NavLink = ({
  label,
  type,
  page,
  post,
  url,
  newTab,
  noFollowLink,
  locale
}) => {
  const relValues = [
    newTab && "noopener noreferrer",
    noFollowLink && "nofollow"
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsxs("li", { children: [
    type == "page" && page && /* @__PURE__ */ jsx15(Link, { href: locale ? `/${locale}/${page.slug}` : `/${page.slug}`, children: label }),
    type == "post" && post && /* @__PURE__ */ jsx15(
      Link,
      {
        href: locale ? `/${locale}/blog/${post.slug}` : `/blog/${post.slug}`,
        children: label
      }
    ),
    type == "external" && /* @__PURE__ */ jsx15(
      "a",
      {
        href: url ? url : "",
        target: newTab ? "_blank" : "_self",
        rel: relValues || void 0,
        children: label
      }
    )
  ] });
};

// src/layouts/PageLayout/PageLayout.tsx
import { Fragment as Fragment3, jsx as jsx16, jsxs as jsxs2 } from "react/jsx-runtime";
var PageLayout = ({
  locale,
  logo,
  menus,
  page
}) => {
  if (!page) return;
  console.log(page);
  return /* @__PURE__ */ jsxs2(Fragment3, { children: [
    /* @__PURE__ */ jsxs2(Header_default2, { children: [
      logo && /* @__PURE__ */ jsx16(Logo_default, { url: logo.url, alt: logo.alt, width: 0, height: 0 }),
      /* @__PURE__ */ jsx16(Navigation_default, { menus, menuId: "main-menu", locale })
    ] }),
    /* @__PURE__ */ jsx16("main", { children: page == null ? void 0 : page.content.layout.map((block, index) => {
      switch (block.blockType) {
        case "content":
          return /* @__PURE__ */ jsx16(TextBlock_default2, { contentLayout: block.contentLayout }, index);
        case "text-intro":
          return /* @__PURE__ */ jsx16(TextIntroBlock_default2, { contentLayout: block.contentLayout }, index);
        case "parallax":
          return /* @__PURE__ */ jsx16(
            ParallaxBlock_default2,
            {
              parallax_image: {
                url: block.parallax_image.url,
                alt: block.parallax_image.alt
              },
              parallax_speed: block.parallax_speed
            },
            index
          );
        case "text-image":
          return /* @__PURE__ */ jsx16(TextImageBlock_default2, {}, index);
        case "text-double-image":
          return /* @__PURE__ */ jsx16(TextImageDoubleBlock_default2, {}, index);
        case "heroscreen":
          return /* @__PURE__ */ jsx16(HeroscreenBlock_default2, { hero_image: block.hero_image }, index);
        case "parallax":
          return /* @__PURE__ */ jsx16(ParallaxBlock_default2, { parallax_image: {
            url: block.parallax_image.url,
            alt: block.parallax_image.alt
          }, parallax_speed: block.parallax_speed }, index);
        case "html-content":
          return /* @__PURE__ */ jsx16(HtmlContentBlock_default, {}, index);
        default:
          return null;
      }
    }) }),
    /* @__PURE__ */ jsx16(Footer_default2, {})
  ] });
};
var PageLayout_default = PageLayout;

// src/layouts/PostLayout/PostLayout.tsx
import { Fragment as Fragment4, jsx as jsx17, jsxs as jsxs3 } from "react/jsx-runtime";
var PostLayout = () => {
  return /* @__PURE__ */ jsxs3(Fragment4, { children: [
    /* @__PURE__ */ jsx17(Header_default2, {}),
    /* @__PURE__ */ jsx17("main", {}),
    /* @__PURE__ */ jsx17(Footer_default2, {})
  ] });
};
var PostLayout_default = PostLayout;

// src/tokens/colors.ts
var colors = {
  primary: "#2563eb",
  secondary: "#f43f5e",
  success: "#16a34a",
  warning: "#f59e0b",
  danger: "#dc2626",
  background: "#f9fafb",
  text: "#111827"
};
var colors_default = colors;

// src/tokens/spacing.ts
var spacing = {
  xs: "4px",
  sm: "8px",
  md: "16px",
  lg: "24px",
  xl: "32px"
};
var spacing_default = spacing;
export {
  ButtonLink_default2 as ButtonLink,
  Card_default2 as Card,
  Footer_default2 as Footer,
  Header_default2 as Header,
  HeroscreenBlock_default2 as HeroscreenBlock,
  HtmlContentBlock_default as HtmlContentBlock,
  PageLayout_default as PageLayout,
  ParallaxBlock_default2 as ParallaxBlock,
  PostLayout_default as PostLayout,
  Text_default2 as Text,
  TextBlock_default2 as TextBlock,
  TextImageBlock_default2 as TextImageBlock,
  TextImageDoubleBlock_default2 as TextImageDoubleBlock,
  TextIntroBlock_default2 as TextIntroBlock,
  Image_default as ThemeImage,
  colors_default as colors,
  spacing_default as spacing
};
//# sourceMappingURL=index.js.map