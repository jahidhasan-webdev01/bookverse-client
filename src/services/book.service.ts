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

    searchParams.set("limit", (params.limit ?? 8).toString());

    const res = await fetcher(`/books?${searchParams.toString()}`);

    return res;
}

export async function getBook(id: string) {
    const res = await fetcher(`/books/${id}`);

    return res.data;
}

export async function getMyBooks(token: string) {
    const res = await fetcher("/books/my-books", {
        token,
    });

    return res.data;
}

export async function createBook(
    payload: unknown,
    token: string
) {
    const res = await fetcher("/books", {
        method: "POST",
        body: JSON.stringify(payload),
        token,
    });

    return res.data;
}

export async function deleteBook(
    id: string,
    token: string
) {
    const res = await fetcher(`/books/${id}`, {
        method: "DELETE",
        token,
    });

    return res.data;
}