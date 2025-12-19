import { LogoProps } from "@/src/components/Logo/Logo.interface";
import HeroscreenBlockProps from "../../blocks/HeroscreenBlock/HeroscreenBlock.interface";
import HtmlContentBlockProps from "../../blocks/HtmlContentBlock/HtmlContentBlock.interface";
import ParallaxBlockProps from "../../blocks/ParallaxBlock/ParallaxBlock.interface";
import TextBlockProps from "../../blocks/TextBlock/TextBlock.interface";
import TextImageProps from "../../blocks/TextImageBlock/TextImage.interface";
import TextImageDoubleBlockProps from "../../blocks/TextImageDoubleBlock/TextImageDoubleBlock.interface";
import TextIntroBlockProps from "../../blocks/TextIntroBlock/TextIntroBlock.interface";

export interface PageLayoutProps {
  logo: LogoProps;
  page: {
    id: number;
    title: string;
    slug: string;
    content: {
      layout: Array<
        | HeroscreenBlockProps
        | HtmlContentBlockProps
        | ParallaxBlockProps
        | TextBlockProps
        | TextImageProps
        | TextImageDoubleBlockProps
        | TextIntroBlockProps
      >;
    };
    config: {
      published: boolean;
    };
    meta: {
      title?: string | null;
      description?: string | null;
    };  
  }
}
