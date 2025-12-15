import React from 'react';

interface ButtonLinkProps {
    href: string;
    label: string;
    blank?: boolean;
}

declare const ButtonLink: React.FC<ButtonLinkProps>;

interface CardProps {
}

declare const Card: React.FC<CardProps>;

interface ImageProps {
    src: string;
    alt: string;
    width: number;
    height: number;
}

declare const ThemeImage: React.FC<ImageProps>;

interface TextProps {
}

declare const Text: React.FC<TextProps>;

interface HeroscreenBlockProps {
}

declare const HeroscreenBlock: React.FC<HeroscreenBlockProps>;

interface HtmlContentBlockProps {
}

declare const HtmlContentBlock: React.FC<HtmlContentBlockProps>;

interface ParallaxBlockProps {
}

declare const ParallaxBlock: React.FC<ParallaxBlockProps>;

interface TextBlockProps {
}

declare const TextBlock: React.FC<TextBlockProps>;

interface TextImageProps {
}

declare const TextImageBlock: React.FC<TextImageProps>;

interface TextImageDoubleBlockProps {
}

declare const TextImageDoubleBlock: React.FC<TextImageDoubleBlockProps>;

interface TextIntroBlockProps {
}

declare const TextIntroBlock: React.FC<TextIntroBlockProps>;

declare const colors: {
    readonly primary: "#2563eb";
    readonly secondary: "#f43f5e";
    readonly success: "#16a34a";
    readonly warning: "#f59e0b";
    readonly danger: "#dc2626";
    readonly background: "#f9fafb";
    readonly text: "#111827";
};
type ColorTokens = typeof colors;

declare const spacing: {
    readonly xs: "4px";
    readonly sm: "8px";
    readonly md: "16px";
    readonly lg: "24px";
    readonly xl: "32px";
};
type SpacingTokens = typeof spacing;

type ThemeMode = 'light' | 'dark';
declare const useTheme: (defaultMode?: ThemeMode) => {
    mode: ThemeMode;
    toggleTheme: () => void;
};

export { ButtonLink, Card, ColorTokens, HeroscreenBlock, HtmlContentBlock, ParallaxBlock, SpacingTokens, Text, TextBlock, TextImageBlock, TextImageDoubleBlock, TextIntroBlock, ThemeImage, ThemeMode, colors, spacing, useTheme };
