import axios from "axios";
import { ApiResponse } from "./response";

export const apiClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

apiClient.interceptors.request.use((config) => {
    if (typeof window !== "undefined") {
        const token = localStorage.getItem("access_token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
    }
    return config;
});

apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        // 🔥 THIS IS THE IMPORTANT PART
        const apiResponse: ApiResponse<null> | undefined = error?.response?.data;

        if (apiResponse && apiResponse.message) {
            return Promise.reject(new Error(apiResponse.message));
        }

        return Promise.reject(
            new Error(error.message || "Something went wrong")
        );
    }
);
