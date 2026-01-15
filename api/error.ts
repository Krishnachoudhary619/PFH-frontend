import { ApiResponse } from "./response";

export function handleApiResponse<T>(res: ApiResponse<T>): T {
    if (!res.success) {
        throw new Error(res.message || "Something went wrong");
    }
    return res.data;
}
