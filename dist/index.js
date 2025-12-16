var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined")
    return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + x + '" is not supported');
});

// src/components/ButtonLink/ButtonLink.module.css
var _default = {};

// src/components/ButtonLink/ButtonLink.tsx
import { jsx } from "react/jsx-runtime";
var ButtonLink = ({ href, label, blank = false }) => {
  return /* @__PURE__ */ jsx("a", { href, target: blank ? "_blank" : "", className: `${_default.ButtonLink}`, children: label });
};
var ButtonLink_default = ButtonLink;

// src/components/Card/Card.module.css
var _default2 = {};

// src/components/Card/Card.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var Card = (props) => {
  return /* @__PURE__ */ jsx2("div", { className: _default2.Card, children: "Card" });
};
var Card_default = Card;

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
var _default3 = {};

// src/components/Text/Text.tsx
import { jsx as jsx4 } from "react/jsx-runtime";
var Text = (props) => {
  return /* @__PURE__ */ jsx4("section", { className: _default3.Text, children: "Text" });
};
var Text_default = Text;

// src/blocks/HeroscreenBlock/HeroscreenBlock.module.css
var _default4 = {};

// src/blocks/HeroscreenBlock/HeroscreenBlock.tsx
import { jsx as jsx5 } from "react/jsx-runtime";
var HeroscreenBlock = (props) => {
  return /* @__PURE__ */ jsx5("figure", { className: _default4.HeroscreenBlock });
};
var HeroscreenBlock_default = HeroscreenBlock;

// src/blocks/HtmlContentBlock/HtmlContentBlock.tsx
import { jsx as jsx6 } from "react/jsx-runtime";
var HtmlContentBlock = (props) => {
  return /* @__PURE__ */ jsx6("div", { children: "HtmlContentBlock" });
};
var HtmlContentBlock_default = HtmlContentBlock;

// src/blocks/ParallaxBlock/ParallaxBlock.module.css
var _default5 = {};

// src/blocks/ParallaxBlock/ParallaxBlock.tsx
import { jsx as jsx7 } from "react/jsx-runtime";
var ParallaxBlock = (props) => {
  return /* @__PURE__ */ jsx7("div", { className: _default5.ParallaxBlock, children: "ParallaxBlock" });
};
var ParallaxBlock_default = ParallaxBlock;

// src/blocks/TextBlock/TextBlock.module.css
var _default6 = {};

// src/blocks/TextBlock/TextBlock.tsx
import { jsx as jsx8 } from "react/jsx-runtime";
var TextBlock = (props) => {
  return /* @__PURE__ */ jsx8("section", { className: _default6.TextBlock, children: "TextBlock" });
};
var TextBlock_default = TextBlock;

// src/blocks/TextImageBlock/TextImageBlock.module.css
var _default7 = {};

// src/blocks/TextImageBlock/TextImageBlock.tsx
import { jsx as jsx9 } from "react/jsx-runtime";
var TextImageBlock = (props) => {
  return /* @__PURE__ */ jsx9("section", { className: _default7.TextImageBlock, children: "TextImageBlock" });
};
var TextImageBlock_default = TextImageBlock;

// src/blocks/TextImageDoubleBlock/TextImageDoubleBlock.module.css
var _default8 = {};

// src/blocks/TextImageDoubleBlock/TextImageDoubleBlock.tsx
import { jsx as jsx10 } from "react/jsx-runtime";
var TextImageDoubleBlock = (props) => {
  return /* @__PURE__ */ jsx10("section", { className: _default8.TextImageDoubleBlock, children: "TextImageDoubleBlock" });
};
var TextImageDoubleBlock_default = TextImageDoubleBlock;

// src/blocks/TextIntroBlock/TextIntroBlock.module.css
var _default9 = {};

// src/blocks/TextIntroBlock/TextIntroBlock.tsx
import { jsx as jsx11 } from "react/jsx-runtime";
var TextIntroBlock = (props) => {
  return /* @__PURE__ */ jsx11("section", { className: _default9.TextIntroBlock, children: "TextIntroBlock" });
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
import { useState, useEffect } from "react";
var useTheme = (defaultMode = "light") => {
  const [mode, setMode] = useState(defaultMode);
  useEffect(() => {
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
export {
  ButtonLink_default as ButtonLink,
  Card_default as Card,
  HeroscreenBlock_default as HeroscreenBlock,
  HtmlContentBlock_default as HtmlContentBlock,
  ParallaxBlock_default as ParallaxBlock,
  Text_default as Text,
  TextBlock_default as TextBlock,
  TextImageBlock_default as TextImageBlock,
  TextImageDoubleBlock_default as TextImageDoubleBlock,
  TextIntroBlock_default as TextIntroBlock,
  Image_default as ThemeImage,
  colors_default as colors,
  spacing_default as spacing,
  useTheme
};
//# sourceMappingURL=index.js.map