export interface Posts {
    author: {
        author_id: number;
        name: string;
        image: string;
        twitter?: string;
        [propName: string]: string;
    }
    categories: [string];
    content: string;
    date?: string;
    duration: string;
    image: {
        artist: {
            artist_id: number;
            name: string;
            instagram?: string;
            twitter?: string;
        };
        url: string;
        [propName: string]: string;
    }
    title: string;
}
