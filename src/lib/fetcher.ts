const API = process.env.NEXT_PUBLIC_API_URL!;

if (!API) {
    throw new Error("NEXT_PUBLIC_API_URL is not defined");
}

interface FetchOptions extends RequestInit {
    token?: string;
}

export async function fetcher(
    endpoint: string,
    options: FetchOptions = {}
) {
    const { token, headers, ...rest } = options;

    const res = await fetch(`${API}${endpoint}`, {
        ...rest,
        headers: {
            "Content-Type": "application/json",
            ...(token && {
                Authorization: `Bearer ${token}`,
            }),
            ...headers,
        },
    });

    const data = await res.json();

    if (!res.ok) {
        throw new Error(data.message || "Something went wrong");
    }

    return data;
}