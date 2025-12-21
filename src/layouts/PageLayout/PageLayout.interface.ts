import { LogoProps } from "@/src/components/Logo/Logo.interface";
import HeroscreenBlockProps from "@/src/blocks/HeroscreenBlock/HeroscreenBlock.interface";
import ParallaxBlockProps from "../../blocks/ParallaxBlock/ParallaxBlock.interface";
import HtmlContentBlockProps from "@/src/blocks/HtmlContentBlock/HtmlContentBlock.interface";
import TextBlockProps from "../../blocks/TextBlock/TextBlock.interface";
import TextIntroBlockProps from "../../blocks/TextIntroBlock/TextIntroBlock.interface";
import TextImageProps from "@/src/blocks/TextImageBlock/TextImage.interface";
import TextImageDoubleBlockProps from "@/src/blocks/TextImageDoubleBlock/TextImageDoubleBlock.interface";

type BlockProps =
  | HeroscreenBlockProps
  | ParallaxBlockProps
  | HtmlContentBlockProps
  | TextBlockProps
  | TextIntroBlockProps
  | TextImageProps
  | TextImageDoubleBlockProps;

interface PageContentProps {
  layout: BlockProps[];
}

export interface PageLayoutProps {
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