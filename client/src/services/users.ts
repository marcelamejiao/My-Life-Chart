import User from "../models/users";

const apiHost: string = import.meta.env.VITE_API_HOST ?? 'http://localhost:8080';

export const getAllUsers = async (): Promise<User[]> => {
    const response = await fetch(`${apiHost}/users`, {
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
    });
    return await response.json();
};

export const getUserById = async (id: number) => {
    const response = await fetch(`${apiHost}/users/${id}`, {
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
    }); 
    return await response.json();
};

export const createUser = async (data: FormValues) => {
    const response = await fetch(`${apiHost}/users`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error("Could not create user");
    }
};

export const deleteUser = async (id: number) => {
    const response = await fetch(`${apiHost}/users/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
    });

    if (!response.ok) {
        throw new Error("Could not delete this user");
    }
};