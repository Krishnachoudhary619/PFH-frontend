import { apiClient } from "@/api/client";
import { handleApiResponse } from "@/api/error";
import { ApiResponse } from "@/api/response";
import { UserProfilePayload } from "./user.types";

export const updateProfile = async (payload: UserProfilePayload) => {
    const res = await apiClient.patch("/profile/update/", payload);
    return res.data;
};
