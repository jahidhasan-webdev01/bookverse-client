import { fetcher } from "@/lib/fetcher";
import { IBook } from "@/types/book";

export async function getBooks(limit = 8): Promise<IBook[]> {
    const res = await fetcher(`/books?limit=${limit}`);

    return res.data;
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