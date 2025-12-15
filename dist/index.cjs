"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  ButtonLink: () => ButtonLink_default,
  Card: () => Card_default,
  HeroscreenBlock: () => HeroscreenBlock_default,
  HtmlContentBlock: () => HtmlContentBlock_default,
  ParallaxBlock: () => ParallaxBlock_default,
  Text: () => Text_default,
  TextBlock: () => TextBlock_default,
  TextImageBlock: () => TextImageBlock_default,
  TextImageDoubleBlock: () => TextImageDoubleBlock_default,
  TextIntroBlock: () => TextIntroBlock_default,
  ThemeImage: () => Image_default,
  colors: () => colors_default,
  spacing: () => spacing_default,
  useTheme: () => useTheme
});
module.exports = __toCommonJS(src_exports);

// src/components/ButtonLink/ButtonLink.module.css
var _default = {};

// src/components/ButtonLink/ButtonLink.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var ButtonLink = ({ href, label, blank = false }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", { href, target: blank ? "_blank" : "", className: `${_default.ButtonLink}`, children: label });
};
var ButtonLink_default = ButtonLink;

// src/components/Card/Card.module.css
var _default2 = {};

// src/components/Card/Card.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var Card = (props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: _default2.Card, children: "Card" });
};
var Card_default = Card;

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
var _default3 = {};

// src/components/Text/Text.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
var Text = (props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("section", { className: _default3.Text, children: "Text" });
};
var Text_default = Text;

// src/layouts/HeroscreenBlock/HeroscreenBlock.module.css
var _default4 = {};

// src/layouts/HeroscreenBlock/HeroscreenBlock.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
var HeroscreenBlock = (props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("figure", { className: _default4.HeroscreenBlock });
};
var HeroscreenBlock_default = HeroscreenBlock;

// src/layouts/HtmlContentBlock/HtmlContentBlock.tsx
var import_jsx_runtime6 = require("react/jsx-runtime");
var HtmlContentBlock = (props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { children: "HtmlContentBlock" });
};
var HtmlContentBlock_default = HtmlContentBlock;

// src/layouts/ParallaxBlock/ParallaxBlock.module.css
var _default5 = {};

// src/layouts/ParallaxBlock/ParallaxBlock.tsx
var import_jsx_runtime7 = require("react/jsx-runtime");
var ParallaxBlock = (props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: _default5.ParallaxBlock, children: "ParallaxBlock" });
};
var ParallaxBlock_default = ParallaxBlock;

// src/layouts/TextBlock/TextBlock.module.css
var _default6 = {};

// src/layouts/TextBlock/TextBlock.tsx
var import_jsx_runtime8 = require("react/jsx-runtime");
var TextBlock = (props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("section", { className: _default6.TextBlock, children: "TextBlock" });
};
var TextBlock_default = TextBlock;

// src/layouts/TextImageBlock/TextImageBlock.module.css
var _default7 = {};

// src/layouts/TextImageBlock/TextImageBlock.tsx
var import_jsx_runtime9 = require("react/jsx-runtime");
var TextImageBlock = (props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("section", { className: _default7.TextImageBlock, children: "TextImageBlock" });
};
var TextImageBlock_default = TextImageBlock;

// src/layouts/TextImageDoubleBlock/TextImageDoubleBlock.module.css
var _default8 = {};

// src/layouts/TextImageDoubleBlock/TextImageDoubleBlock.tsx
var import_jsx_runtime10 = require("react/jsx-runtime");
var TextImageDoubleBlock = (props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("section", { className: _default8.TextImageDoubleBlock, children: "TextImageDoubleBlock" });
};
var TextImageDoubleBlock_default = TextImageDoubleBlock;

// src/layouts/TextIntroBlock/TextIntroBlock.module.css
var _default9 = {};

// src/layouts/TextIntroBlock/TextIntroBlock.tsx
var import_jsx_runtime11 = require("react/jsx-runtime");
var TextIntroBlock = (props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("section", { className: _default9.TextIntroBlock, children: "TextIntroBlock" });
};
var TextIntroBlock_default = TextIntroBlock;

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

// src/hooks/useTheme.ts
var import_react = require("react");
var useTheme = (defaultMode = "light") => {
  const [mode, setMode] = (0, import_react.useState)(defaultMode);
  (0, import_react.useEffect)(() => {
    const saved = localStorage.getItem("theme");
    if (saved)
      setMode(saved);
  }, []);
  const toggleTheme = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    localStorage.setItem("theme", newMode);
  };
  return { mode, toggleTheme };
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ButtonLink,
  Card,
  HeroscreenBlock,
  HtmlContentBlock,
  ParallaxBlock,
  Text,
  TextBlock,
  TextImageBlock,
  TextImageDoubleBlock,
  TextIntroBlock,
  ThemeImage,
  colors,
  spacing,
  useTheme
});
//# sourceMappingURL=index.cjs.map