import React from "react";
import { PageLayoutProps } from "./PageLayout.interface";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Logo from "@/src/components/Logo/Logo";
import Navigation from "../Navigation/Navigation";
import {
  HeroscreenBlock,
  HtmlContentBlock,
  ParallaxBlock,
  TextBlock,
  TextImageBlock,
  TextImageDoubleBlock,
  TextIntroBlock,
} from "@/src/blocks";

const PageLayout: React.FC<PageLayoutProps> = ({
  locale,
  logo,
  menus,
  page,
}: PageLayoutProps) => {
  if (!page) return;

  console.log(page);

  return (
    <>
      <Header>
        {logo && <Logo url={logo.url} alt={logo.alt} width={0} height={0} />}
        <Navigation menus={menus} menuId={"main-menu"} locale={locale} />
      </Header>
      <main>
        {page?.content.layout.map((block, index) => {
          switch (block.blockType) {
            case "content":
              return <TextBlock key={index} contentLayout={block.contentLayout} />;
            case "text-intro":
              return <TextIntroBlock key={index} contentLayout={block.contentLayout} />;
            case "parallax":
              return (
                <ParallaxBlock
                  key={index}
                  parallax_image={{
                    url: block.parallax_image.url,
                    alt: block.parallax_image.alt,
                  }}
                  parallax_speed={block.parallax_speed}
                />
              );
            case 'text-image':
              return <TextImageBlock key={index} />
            case 'text-double-image':
              return <TextImageDoubleBlock key={index} />
            case 'heroscreen':
              return <HeroscreenBlock key={index} />
            case 'parallax':
              return <ParallaxBlock key={index} parallax_image={{
                url: block.parallax_image.url,
                alt: block.parallax_image.alt
              }} parallax_speed={block.parallax_speed} />
            case 'html-content':
              return <HtmlContentBlock key={index} />
            default:
              return null; // fallback si type inconnu
          }
        })}
      </main>

      <Footer></Footer>
    </>
  );
};

export default PageLayout;
