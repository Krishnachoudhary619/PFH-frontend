export interface SendOtpPayload {
    phone_number: string;
}

export interface VerifyOtpPayload {
    phone_number: string;
    otp: string;
}

export interface AuthTokens {
    access: string;
    refresh: string;
    user_id: string;
    role: string;
}

export interface User {
    id: string;
    first_name: string;
    last_name: string;
    phone_number: string;
    email: string;
    role: string;
}
