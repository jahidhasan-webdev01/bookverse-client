import { fetcher } from "@/lib/fetcher";


export async function createBook(data: unknown) {
    const res = await fetcher("/books", {
        method: "POST",
        body: JSON.stringify(data),
    });

    return res.data;
}


export async function deleteBook(id: string) {
    const res = await fetcher(`/books/${id}`, {
        method: "DELETE",
    });

    return res.data;
}