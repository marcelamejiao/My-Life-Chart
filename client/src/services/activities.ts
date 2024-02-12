import { CreateActivityFormValues } from "../components/CreateActivityForm/CreateActivityForm";
import Activity, { ActivityJson } from "../models/activities";

const apiHost: string = import.meta.env.VITE_API_HOST ?? 'http://localhost:8080';

export const getAllActivities = async (): Promise<Activity[]> => {
    const response = await fetch(`${apiHost}/activities`, {
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
    });

    const activitiesData = await response.json();

    return activitiesData.map((activityData: ActivityJson) => {
        return {
            ...activityData,
            start: new Date(activityData.start),
            end: new Date(activityData.end),
        }
    }); 
};

export const getAllUserActivities = async (userId: number): Promise<Activity[]> => {
    const response = await fetch(`${apiHost}/users/${userId}/activities`, {
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
    });

    const userActivitiesData = await response.json();

    return userActivitiesData.map((userActivityData: ActivityJson) => {
        return {
            ...userActivityData,
            start: new Date(userActivityData.start),
            end: new Date(userActivityData.end),
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

    const activityData:ActivityJson = await response.json();

    return {
        ...activityData,
        start: new Date(activityData.start),
        end: new Date(activityData.end),
    }
};

export const createUserActivity = async (data: CreateActivityFormValues, userId: number) => {
    const response = await fetch(`${apiHost}/users/${userId}/activities`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error("Could not create an activity for this user");
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