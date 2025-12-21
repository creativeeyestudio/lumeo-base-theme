export default interface ParallaxBlockProps {
    blockType?: 'parallax';
    parallax_image: {
        url: string;
        alt?: string | null;
    },
    parallax_speed: number;
}