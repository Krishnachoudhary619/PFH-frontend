import { apiClient } from "@/api/client";
import { handleApiResponse } from "@/api/error";
import { ApiResponse } from "@/api/response";
import {
    SendOtpPayload,
    VerifyOtpPayload,
    AuthTokens,
    User,
} from "./auth.types";

export async function sendOtp(payload: SendOtpPayload): Promise<null> {

    const res = await apiClient.post<ApiResponse<null>>(
        "/auth/send-otp/",
        payload
    );
    return handleApiResponse(res.data);
}

export async function verifyOtp(
    payload: VerifyOtpPayload
): Promise<AuthTokens> {
    const res = await apiClient.post<ApiResponse<AuthTokens>>(
        "/auth/verify-otp/",
        payload
    );
    return handleApiResponse(res.data);
}

export async function getUserProfile(): Promise<User> {
    const res = await apiClient.get<ApiResponse<User>>("/me/");
    return handleApiResponse(res.data);
}

