import CategoryWeeklyReport from "../models/categoryWeeklyReports";

const apiHost: string = import.meta.env.VITE_API_HOST ?? 'http://localhost:8080';

export const getAllCategoryWeeklyReports = async (): Promise<CategoryWeeklyReport[]> => {
  const response = await fetch(`${apiHost}/reports/category-weekly`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
  });
  return await response.json();
};