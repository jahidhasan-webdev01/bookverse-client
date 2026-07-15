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

    createdAt?: string;
    updatedAt?: string;

    createdBy?: {
        _id: string;
        name: string;
        email: string;
    } | null;
}

export interface BooksResponse {
    meta: {
        page: number;
        limit: number;
        total: number;
        totalPage: number;
    };
    data: IBook[];
}

export interface CreateBookPayload {
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