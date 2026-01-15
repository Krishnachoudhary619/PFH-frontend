"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

import { phoneSchema, otpSchema } from "@/features/auth/auth.validation";
import { useSendOtp, useVerifyOtp, useGetUserProfile } from "@/features/auth/auth.hooks";
import { useOtpTimer } from "@/features/auth/useOtpTimer";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { useToast } from "@/components/ui/use-toast";

export default function LoginPage() {
	const [step, setStep] = useState<"phone" | "otp">("phone");
	const [phoneNumber, setPhoneNumber] = useState("");

	const router = useRouter();
	const { toast } = useToast();
	const otpTimer = useOtpTimer(60);

	const sendOtpMutation = useSendOtp();
	const verifyOtpMutation = useVerifyOtp();
	const getUserProfileMutation = useGetUserProfile();

	/* ---------------- PHONE FORM ---------------- */
	const phoneForm = useForm({
		resolver: zodResolver(phoneSchema),
		defaultValues: { phone_number: "" },
		mode: "onChange",
	});

	/* ---------------- OTP FORM ---------------- */
	const otpForm = useForm({
		resolver: zodResolver(otpSchema),
		defaultValues: { otp: "" },
		mode: "onChange",
	});

	/* ---------------- HANDLERS ---------------- */

	const handleSendOtp = phoneForm.handleSubmit(({ phone_number }) => {
		sendOtpMutation.mutate(
			{ phone_number },
			{
				onSuccess: () => {
					setPhoneNumber(phone_number);
					setStep("otp");
					toast({ title: "OTP sent successfully" });
					otpTimer.start();
				},
			}
		);
	});

	const handleResendOtp = () => {
		if (!otpTimer.canResend) return;

		sendOtpMutation.mutate(
			{ phone_number: phoneNumber },
			{
				onSuccess: () => {
					toast({ title: "OTP resent successfully" });
					otpTimer.start();
				},
			}
		);
	};

	const handleVerifyOtp = otpForm.handleSubmit(({ otp }) => {
		verifyOtpMutation.mutate(
			{ phone_number: phoneNumber, otp },
			{
				onSuccess: () => {
					toast({
						title: "OTP verified successfully",
						description: "Welcome to PFH Print",
					});

					// 🔥 Fetch user profile AFTER auth
					getUserProfileMutation.mutate(undefined, {
						onSuccess: (response) => {
							const user = response;

							const isProfileIncomplete = !user.first_name || !user.email;

							if (isProfileIncomplete) {
								router.replace("/profile/setup");
							} else {
								router.replace("/");
							}
						},
						onError: () => {
							router.replace("/");
						},
					});
				},
			}
		);
	});

	/* ---------------- UI ---------------- */

	return (
		<main className='flex min-h-screen items-center justify-center bg-gray-50 px-4'>
			<div className='w-full max-w-md rounded-2xl bg-white p-8 shadow-sm'>
				<h1 className='text-2xl font-bold text-gray-900'>Login to PFH Print</h1>

				<p className='mt-2 text-sm text-gray-600'>
					{step === "phone"
						? "Enter your phone number to receive an OTP"
						: `Enter the 6-digit OTP sent to ${phoneNumber}`}
				</p>

				{/* PHONE STEP */}
				{step === "phone" && (
					<form onSubmit={handleSendOtp} className='mt-6 space-y-4'>
						<Input
							placeholder='Phone number'
							inputMode='numeric'
							maxLength={10}
							{...phoneForm.register("phone_number", {
								onChange: (e) => {
									e.target.value = e.target.value.replace(/\D/g, "");
								},
							})}
						/>

						{phoneForm.formState.errors.phone_number && (
							<p className='text-sm text-red-500'>
								{phoneForm.formState.errors.phone_number.message}
							</p>
						)}

						<Button
							type='submit'
							className='w-full'
							disabled={sendOtpMutation.isPending || !phoneForm.formState.isValid}>
							{sendOtpMutation.isPending ? "Sending OTP..." : "Send OTP"}
						</Button>
					</form>
				)}

				{/* OTP STEP */}
				{step === "otp" && (
					<form onSubmit={handleVerifyOtp} className='mt-6 space-y-6'>
						<Controller
							control={otpForm.control}
							name='otp'
							render={({ field }) => (
								<InputOTP
									maxLength={6}
									value={field.value}
									onChange={(value) => field.onChange(value.replace(/\D/g, ""))}>
									<InputOTPGroup className='justify-center'>
										{[...Array(6)].map((_, i) => (
											<InputOTPSlot key={i} index={i} />
										))}
									</InputOTPGroup>
								</InputOTP>
							)}
						/>

						<Button
							type='submit'
							className='w-full'
							disabled={verifyOtpMutation.isPending || !otpForm.formState.isValid}>
							{verifyOtpMutation.isPending ? "Verifying..." : "Verify OTP"}
						</Button>

						{/* TIMER */}
						<div className='text-center text-sm text-gray-500'>
							{otpTimer.canResend ? (
								<button
									type='button'
									onClick={handleResendOtp}
									className='font-medium text-primary hover:underline'>
									Resend OTP
								</button>
							) : (
								<span>
									Resend OTP in{" "}
									<span className='font-medium'>{otpTimer.seconds}s</span>
								</span>
							)}
						</div>

						<button
							type='button'
							onClick={() => {
								setStep("phone");
								otpForm.reset();
							}}
							className='w-full text-sm text-gray-500 hover:underline'>
							Change phone number
						</button>
					</form>
				)}
			</div>
		</main>
	);
}
