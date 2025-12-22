"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  ButtonLink: () => ButtonLink_default2,
  Card: () => Card_default2,
  Footer: () => Footer_default2,
  Header: () => Header_default2,
  HeroscreenBlock: () => HeroscreenBlock_default2,
  HtmlContentBlock: () => HtmlContentBlock_default,
  PageLayout: () => PageLayout_default,
  ParallaxBlock: () => ParallaxBlock_default2,
  PostLayout: () => PostLayout_default,
  Text: () => Text_default2,
  TextBlock: () => TextBlock_default2,
  TextImageBlock: () => TextImageBlock_default2,
  TextImageDoubleBlock: () => TextImageDoubleBlock_default2,
  TextIntroBlock: () => TextIntroBlock_default2,
  ThemeImage: () => Image_default,
  colors: () => colors_default,
  spacing: () => spacing_default
});
module.exports = __toCommonJS(index_exports);

// src/components/ButtonLink/ButtonLink.module.css
var ButtonLink_default = {};

// src/components/ButtonLink/ButtonLink.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var ButtonLink = ({ href, label, blank = false }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", { href, target: blank ? "_blank" : "", className: `${ButtonLink_default.ButtonLink}`, children: label });
};
var ButtonLink_default2 = ButtonLink;

// src/components/Card/Card.module.css
var Card_default = {};

// src/components/Card/Card.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var Card = (props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: Card_default.Card, children: "Card" });
};
var Card_default2 = Card;

// src/components/Image/Image.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
var NextImage;
try {
  NextImage = require("next/image").default;
} catch (error) {
  NextImage = null;
}
var ThemeImage = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_jsx_runtime3.Fragment, {});
};
var Image_default = ThemeImage;

// src/components/Text/Text.module.css
var Text_default = {};

// src/components/Text/Text.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
var Text = (props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("section", { className: Text_default.Text, children: "Text" });
};
var Text_default2 = Text;

// src/blocks/HeroscreenBlock/HeroscreenBlock.module.css
var HeroscreenBlock_default = {};

// src/blocks/HeroscreenBlock/HeroscreenBlock.tsx
var import_image = __toESM(require("next/image"), 1);
var import_jsx_runtime5 = require("react/jsx-runtime");
var HeroscreenBlock = ({
  hero_image,
  className
}) => {
  var _a;
  if (!process.env.PAYLOAD_URL) {
    console.error("Payload URL not found");
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("figure", { className: `${HeroscreenBlock_default.HeroscreenBlock} ${className != null ? className : ""}`, children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    import_image.default,
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
var import_jsx_runtime6 = require("react/jsx-runtime");
var HtmlContentBlock = (props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { children: "HtmlContentBlock" });
};
var HtmlContentBlock_default = HtmlContentBlock;

// src/blocks/ParallaxBlock/ParallaxBlock.module.css
var ParallaxBlock_default = {};

// src/blocks/ParallaxBlock/ParallaxBlock.tsx
var import_jsx_runtime7 = require("react/jsx-runtime");
var ParallaxBlock = (props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: ParallaxBlock_default.ParallaxBlock, children: "ParallaxBlock" });
};
var ParallaxBlock_default2 = ParallaxBlock;

// src/blocks/TextBlock/TextBlock.module.css
var TextBlock_default = {};

// src/blocks/TextBlock/TextBlock.tsx
var import_jsx_runtime8 = require("react/jsx-runtime");
var TextBlock = (props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("section", { className: TextBlock_default.TextBlock, children: "TextBlock" });
};
var TextBlock_default2 = TextBlock;

// src/blocks/TextImageBlock/TextImageBlock.module.css
var TextImageBlock_default = {};

// src/blocks/TextImageBlock/TextImageBlock.tsx
var import_jsx_runtime9 = require("react/jsx-runtime");
var TextImageBlock = (props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("section", { className: TextImageBlock_default.TextImageBlock, children: "TextImageBlock" });
};
var TextImageBlock_default2 = TextImageBlock;

// src/blocks/TextImageDoubleBlock/TextImageDoubleBlock.module.css
var TextImageDoubleBlock_default = {};

// src/blocks/TextImageDoubleBlock/TextImageDoubleBlock.tsx
var import_jsx_runtime10 = require("react/jsx-runtime");
var TextImageDoubleBlock = (props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("section", { className: TextImageDoubleBlock_default.TextImageDoubleBlock, children: "TextImageDoubleBlock" });
};
var TextImageDoubleBlock_default2 = TextImageDoubleBlock;

// src/blocks/TextIntroBlock/TextIntroBlock.module.css
var TextIntroBlock_default = {};

// src/blocks/TextIntroBlock/TextIntroBlock.tsx
var import_jsx_runtime11 = require("react/jsx-runtime");
var TextIntroBlock = (props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("section", { className: TextIntroBlock_default.TextIntroBlock, children: "TextIntroBlock" });
};
var TextIntroBlock_default2 = TextIntroBlock;

// src/layouts/Footer/Footer.module.css
var Footer_default = {};

// src/layouts/Footer/Footer.tsx
var import_jsx_runtime12 = require("react/jsx-runtime");
var Footer = ({ children }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("footer", { className: Footer_default.Footer, children });
};
var Footer_default2 = Footer;

// src/layouts/Header/Header.module.css
var Header_default = {};

// src/layouts/Header/Header.tsx
var import_jsx_runtime13 = require("react/jsx-runtime");
var Header = ({ children }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("header", { className: Header_default.Header, children });
};
var Header_default2 = Header;

// src/components/Logo/Logo.tsx
var import_image2 = __toESM(require("next/image"), 1);
var import_jsx_runtime14 = require("react/jsx-runtime");
var Logo = ({ url, alt, width, height }) => {
  return process.env.PAYLOAD_URL && url ? /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
    import_image2.default,
    {
      src: process.env.PAYLOAD_URL + url,
      alt: alt != null ? alt : "",
      width,
      height,
      style: { objectFit: "contain" }
    }
  ) : /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_jsx_runtime14.Fragment, {});
};
var Logo_default = Logo;

// src/layouts/Navigation/Navigation.tsx
var import_link = __toESM(require("next/link"), 1);
var import_jsx_runtime15 = require("react/jsx-runtime");
var Navigation = ({ menus, menuId, locale }) => {
  const menu = menus.find((m) => m.menuId === menuId);
  if (!menu) {
    console.error(
      `Le menu avec l'ID ${menuId} n'a pas \xE9t\xE9 cr\xE9e dans le Back-Office`
    );
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("nav", { children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("ul", { children: menu.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("li", { children: [
    type == "page" && page && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_link.default, { href: locale ? `/${locale}/${page.slug}` : `/${page.slug}`, children: label }),
    type == "post" && post && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
      import_link.default,
      {
        href: locale ? `/${locale}/blog/${post.slug}` : `/blog/${post.slug}`,
        children: label
      }
    ),
    type == "external" && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
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
var import_jsx_runtime16 = require("react/jsx-runtime");
var PageLayout = ({
  locale,
  logo,
  menus,
  page
}) => {
  if (!page) return;
  console.log(page);
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(import_jsx_runtime16.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(Header_default2, { children: [
      logo && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Logo_default, { url: logo.url, alt: logo.alt, width: 0, height: 0 }),
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Navigation_default, { menus, menuId: "main-menu", locale })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("main", { children: page == null ? void 0 : page.content.layout.map((block, index) => {
      switch (block.blockType) {
        case "content":
          return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(TextBlock_default2, { contentLayout: block.contentLayout }, index);
        case "text-intro":
          return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(TextIntroBlock_default2, { contentLayout: block.contentLayout }, index);
        case "parallax":
          return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
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
          return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(TextImageBlock_default2, {}, index);
        case "text-double-image":
          return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(TextImageDoubleBlock_default2, {}, index);
        case "heroscreen":
          return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(HeroscreenBlock_default2, { hero_image: block.hero_image }, index);
        case "parallax":
          return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(ParallaxBlock_default2, { parallax_image: {
            url: block.parallax_image.url,
            alt: block.parallax_image.alt
          }, parallax_speed: block.parallax_speed }, index);
        case "html-content":
          return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(HtmlContentBlock_default, {}, index);
        default:
          return null;
      }
    }) }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Footer_default2, {})
  ] });
};
var PageLayout_default = PageLayout;

// src/layouts/PostLayout/PostLayout.tsx
var import_jsx_runtime17 = require("react/jsx-runtime");
var PostLayout = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(import_jsx_runtime17.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Header_default2, {}),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("main", {}),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Footer_default2, {})
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ButtonLink,
  Card,
  Footer,
  Header,
  HeroscreenBlock,
  HtmlContentBlock,
  PageLayout,
  ParallaxBlock,
  PostLayout,
  Text,
  TextBlock,
  TextImageBlock,
  TextImageDoubleBlock,
  TextIntroBlock,
  ThemeImage,
  colors,
  spacing
});
//# sourceMappingURL=index.cjs.map