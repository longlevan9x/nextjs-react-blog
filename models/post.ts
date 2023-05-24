
export interface PostModel {
    id?: string;
    cover?: string;
    title?: string;
    authors?: { name?: string }[];
    description?: string;
    published?: {
        start: string;
        end: string;
    };
    tags?: string[];
}
