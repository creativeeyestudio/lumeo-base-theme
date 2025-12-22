export default interface HeroscreenBlockProps {
    blockType?: 'heroscreen';
    className?: string;
    hero_image: {
        url: string;
        alt: string;
        width: number;
        height: number;
    }
}