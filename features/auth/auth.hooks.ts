import { useMutation, useQuery } from "@tanstack/react-query";
import { sendOtp, verifyOtp, getUserProfile } from "./auth.api";

export const useSendOtp = () =>
    useMutation({
        mutationFn: sendOtp,
    });

export const useVerifyOtp = () =>
    useMutation({
        mutationFn: verifyOtp,
        onSuccess: (data) => {
            localStorage.setItem("access_token", data.access);
            localStorage.setItem("refresh_token", data.refresh);
        },
    });

export const useGetUserProfile = () =>
    useMutation({
        mutationFn: getUserProfile,
    });

