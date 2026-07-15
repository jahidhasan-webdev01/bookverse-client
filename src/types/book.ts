export interface IBook {
    _id: string;
    title: string;
    author: string;
    category: string;
    shortDescription: string;
    description: string;
    coverImage: string;
    publishedYear: number;
    pages: number;
    rating: number;
    status: "Available" | "Borrowed";
}