import Activity, { ActivityJson } from "../models/activities";

const apiHost: string = import.meta.env.VITE_API_HOST ?? 'http://localhost:8080';

export const getAllActivities = async (): Promise<Activity[]> => {
    const response = await fetch(`${apiHost}/activities`, {
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
    });

    const usersData = await response.json();

    return usersData.map((userData: ActivityJson) => {
        return {
            ...userData,
            start: new Date(userData.start),
            end: new Date(userData.end),
        }
    }); 
};

export const getActivityById = async (id: number): Promise<Activity> => {
    const response = await fetch(`${apiHost}/activities/${id}`, {
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
    }); 

    const userData:ActivityJson = await response.json();

        return {
            ...userData,
            start: new Date(userData.start),
            end: new Date(userData.end),
        }
};

export const deleteActivity = async (id: number) => {
    const response = await fetch(`${apiHost}/activities/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
    });

    if (!response.ok) {
        throw new Error("Could not delete this activity");
    }
};