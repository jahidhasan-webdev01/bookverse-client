import { fetcher } from "@/lib/fetcher";
import { IBook } from "@/types/book";

interface GetBooksParams {
    searchTerm?: string;
    category?: string;
    status?: string;
    sortBy?: string;
    sortOrder?: "asc" | "desc";
    page?: number;
    limit?: number;
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

interface BooksResponse {
    meta: {
        page: number;
        limit: number;
        total: number;
        totalPage: number;
    };
    data: IBook[];
}

export async function getBooks(
    params: GetBooksParams = {}
): Promise<BooksResponse> {
    const searchParams = new URLSearchParams();

    if (params.searchTerm)
        searchParams.set("searchTerm", params.searchTerm);

    if (params.category)
        searchParams.set("category", params.category);

    if (params.status)
        searchParams.set("status", params.status);

    if (params.sortBy)
        searchParams.set("sortBy", params.sortBy);

    if (params.sortOrder)
        searchParams.set("sortOrder", params.sortOrder);

    if (params.page)
        searchParams.set("page", params.page.toString());

    searchParams.set(
        "limit",
        (params.limit ?? 8).toString()
    );

    return fetcher(`/books?${searchParams.toString()}`);
}

export async function getBook(id: string) {
    const res = await fetcher(`/books/${id}`);

    return res.data;
}

export async function getMyBooks() {
    const res = await fetcher("/books/my-books");

    return res.data;
}

export async function createBook(
    payload: CreateBookPayload
) {
    const res = await fetcher("/books", {
        method: "POST",
        body: JSON.stringify(payload),
    });

    return res.data;
}

export async function deleteBook(id: string) {
    const res = await fetcher(`/books/${id}`, {
        method: "DELETE",
    });

    return res.data;
}