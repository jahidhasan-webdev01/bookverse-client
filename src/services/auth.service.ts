import { fetcher } from "@/lib/fetcher";


export interface IUser {
    _id: string;
    name: string;
    email: string;
}



interface RegisterData {
    name: string;
    email: string;
    password: string;
}


interface LoginData {
    email: string;
    password: string;
}



export async function registerUser(
    data: RegisterData
) {
    return fetcher("/auth/register", {
        method: "POST",
        body: JSON.stringify(data),
    });
}



export async function loginUser(data: LoginData) {

    return fetcher(
        "/auth/login",
        {
            method: "POST",
            body: JSON.stringify(data),
        }
    );

}




// Get logged in user
export async function getCurrentUser() {

    return fetcher(
        "/auth/me",
        {
            method: "GET",
        }
    );

}




// Logout user
export async function logoutUser() {

    return fetcher("/auth/logout", {
        method: "POST",
    });

}