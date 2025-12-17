export default interface ImageProps {
    id: string | number;
    blockName: string | null;
    blockType: string;
    imageBlockField: {
        id: string;
        url: string;
        alt?: string | null;
    };
}