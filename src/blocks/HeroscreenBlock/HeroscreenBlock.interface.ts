export default interface HeroscreenBlockProps {
    blockType?: 'heroscreen';
    hero_image: [{
        url: string;
        alt: string;
        width: number;
        height: number;
    }]
}