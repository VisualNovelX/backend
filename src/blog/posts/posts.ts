export interface Posts {
    author: {
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
        artist: string;
        url: string;
        [propName: string]: string;
    }
    title: string;
}
