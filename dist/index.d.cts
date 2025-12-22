import React$1 from 'react';

interface ButtonLinkProps {
    href: string;
    label: string;
    blank?: boolean;
}

declare const ButtonLink: React$1.FC<ButtonLinkProps>;

interface CardProps {
}

declare const Card: React$1.FC<CardProps>;

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

declare const ThemeImage: React$1.FC<ImageProps>;

interface TextProps {
    id: string | number;
    blockName: string | null;
    blockType: string;
    textBlockField: string;
}

declare const Text: React$1.FC<TextProps>;

interface HeroscreenBlockProps {
    blockType?: 'heroscreen';
    className?: string;
    hero_image: {
        url: string;
        alt: string;
        width: number;
        height: number;
    };
}

declare const HeroscreenBlock: React$1.FC<HeroscreenBlockProps>;

interface HtmlContentBlockProps {
    blockType?: 'html-content';
}

declare const HtmlContentBlock: React$1.FC<HtmlContentBlockProps>;

interface ParallaxBlockProps {
    blockType?: 'parallax';
    parallax_image: {
        url: string;
        alt?: string | null;
    };
    parallax_speed: number;
}

declare const ParallaxBlock: React$1.FC<ParallaxBlockProps>;

interface TextBlockProps {
    blockType?: 'content';
    contentLayout?: any[];
}

declare const TextBlock: React$1.FC<TextBlockProps>;

interface TextImageProps {
    blockType?: 'text-image';
}

declare const TextImageBlock: React$1.FC<TextImageProps>;

interface TextImageDoubleBlockProps {
    blockType?: 'text-double-image';
}

declare const TextImageDoubleBlock: React$1.FC<TextImageDoubleBlockProps>;

interface TextIntroBlockProps {
    blockType?: 'text-intro';
    contentLayout: any[];
}

declare const TextIntroBlock: React$1.FC<TextIntroBlockProps>;

interface FooterProps {
    children?: React$1.ReactNode;
}

declare const Footer: React$1.FC<FooterProps>;

interface HeaderProps {
    children?: React.ReactNode;
}

declare const Header: React$1.FC<HeaderProps>;

interface LogoProps {
    url: string;
    alt: string;
    width: number;
    height: number;
}

type BlockProps = HeroscreenBlockProps | ParallaxBlockProps | HtmlContentBlockProps | TextBlockProps | TextIntroBlockProps | TextImageProps | TextImageDoubleBlockProps;
interface PageContentProps {
    layout: BlockProps[];
}
interface PageLayoutProps {
    locale?: string;
    logo?: LogoProps;
    menus: any[];
    page?: {
        id: number;
        title: string;
        slug: string;
        content: PageContentProps;
        config: {
            published: boolean;
        };
        meta: {
            title?: string | null;
            description?: string | null;
        };
    };
}

declare const PageLayout: React$1.FC<PageLayoutProps>;

interface PostLayoutProps {
    id: number;
    title: string;
    slug: string;
    excerpt?: string;
    content: Array<HeroscreenBlockProps | HtmlContentBlockProps | ParallaxBlockProps | TextBlockProps | TextImageProps | TextImageDoubleBlockProps | TextIntroBlockProps>;
    config: {
        published: number;
    };
    meta: {
        title: string;
        description: string;
    };
}

declare const PostLayout: React$1.FC<PostLayoutProps>;

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

export { ButtonLink, Card, type ColorTokens, Footer, Header, HeroscreenBlock, HtmlContentBlock, PageLayout, ParallaxBlock, PostLayout, type SpacingTokens, Text, TextBlock, TextImageBlock, TextImageDoubleBlock, TextIntroBlock, ThemeImage, colors, spacing };
