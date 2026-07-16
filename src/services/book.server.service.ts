import { serverFetcher } from "@/lib/serverFetcher";


export async function getMyBooks() {
    const res = await serverFetcher(
        "/books/my-books"
    );

    return res.data;
}