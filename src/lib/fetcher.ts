const API = process.env.NEXT_PUBLIC_API_URL!;


if (!API) {
    throw new Error(
        "NEXT_PUBLIC_API_URL is not defined"
    );
}



export async function fetcher(
    endpoint: string,
    options: RequestInit = {}
) {

    const res = await fetch(
        `${API}${endpoint}`,
        {
            ...options,

            // HttpOnly cookie send করবে
            credentials: "include",

            headers: {
                "Content-Type": "application/json",
                ...options.headers,
            },
        }
    );



    const data = await res.json();



    if (!res.ok) {
        throw new Error(
            data.message || "Something went wrong"
        );
    }



    return data;
}