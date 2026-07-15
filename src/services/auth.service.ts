import { fetcher } from "@/lib/fetcher";

export async function registerUser(payload: unknown) {
    return fetcher("/auth/register", {
        method: "POST",
        body: JSON.stringify(payload),
    });
}

export async function loginUser(payload: unknown) {
    return fetcher("/auth/login", {
        method: "POST",
        body: JSON.stringify(payload),
    });
}