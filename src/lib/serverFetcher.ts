import { cookies } from "next/headers";

const API = process.env.NEXT_PUBLIC_API_URL!;

export async function serverFetcher(
    endpoint: string
) {
    const cookieStore = await cookies();

    const res = await fetch(`${API}${endpoint}`, {
        headers: {
            "Content-Type": "application/json",
            Cookie: cookieStore.toString(),
        },
        cache: "no-store",
    });

    const data = await res.json();

    if (!res.ok) {
        throw new Error(
            data.message || "Something went wrong"
        );
    }

    return data;
}