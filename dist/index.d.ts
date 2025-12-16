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
    id: string | number;
    blockName: string | null;
    blockType: string;
    imageBlockField: {
        id: string;
        url: string;
        alt?: string | null;
    };
}

declare const ThemeImage: React.FC<ImageProps>;

interface TextProps {
    id: string | number;
    blockName: string | null;
    blockType: string;
    textBlockField: string;
}

declare const Text: React.FC<TextProps>;

interface HeroscreenBlockProps {
    id: string;
    alt: string | null;
    url: string;
}

declare const HeroscreenBlock: React.FC<HeroscreenBlockProps>;

interface HtmlContentBlockProps {
    id: string;
    htmlCode: string;
    blockType: string;
    blockName?: string | null;
}

declare const HtmlContentBlock: React.FC<HtmlContentBlockProps>;

interface ParallaxBlockProps {
    id: string;
    parallax_image: {
        id: string | number;
        url: string;
        alt?: string | null;
    };
    parallax_speed: number;
}

declare const ParallaxBlock: React.FC<ParallaxBlockProps>;

interface TextBlockProps {
    id: string | number;
}

declare const TextBlock: React.FC<TextBlockProps>;

interface TextImageProps {
}

declare const TextImageBlock: React.FC<TextImageProps>;

interface TextImageDoubleBlockProps {
}

declare const TextImageDoubleBlock: React.FC<TextImageDoubleBlockProps>;

interface TextIntroBlockProps {
    id: string;
    blockName?: string | null;
    blockType: string;
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

export { ButtonLink, Card, ColorTokens, HeroscreenBlock, HtmlContentBlock, ParallaxBlock, SpacingTokens, Text, TextBlock, TextImageBlock, TextImageDoubleBlock, TextIntroBlock, ThemeImage, colors, spacing };
