export default interface ParallaxBlockProps {
    id: string;
    parallax_image: {
        id: string | number;
        url: string;
        alt?: string | null;
    },
    parallax_speed: number;
}