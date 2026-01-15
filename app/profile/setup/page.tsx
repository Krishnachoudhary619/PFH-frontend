"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

import { useRouter } from "next/navigation";

type ProfileForm = {
	first_name: string;
	last_name: string;
	email: string;
};

export default function ProfileSetupPage() {
	const { toast } = useToast();
	const router = useRouter();

	const form = useForm<ProfileForm>({
		defaultValues: {
			first_name: "",
			last_name: "",
			email: "",
		},
	});

	const onSubmit = async (data: ProfileForm) => {
		try {
			await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/profile/update/`, {
				method: "PATCH",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${localStorage.getItem("access")}`,
				},
				body: JSON.stringify(data),
			});

			toast({
				title: "Profile updated",
				description: "Your profile has been saved successfully",
			});

			router.replace("/");
		} catch (e) {
			toast({
				title: "Error",
				description: "Failed to update profile",
			});
		}
	};

	return (
		<main className='flex min-h-screen items-center justify-center bg-gray-50 px-4'>
			<div className='w-full max-w-md rounded-2xl bg-white p-8 shadow-sm'>
				<h1 className='text-2xl font-bold text-gray-900'>Complete your profile</h1>

				<p className='mt-2 text-sm text-gray-600'>
					Please provide a few details to continue
				</p>

				<form onSubmit={form.handleSubmit(onSubmit)} className='mt-6 space-y-4'>
					<Input
						placeholder='First name'
						{...form.register("first_name", { required: true })}
					/>

					<Input
						placeholder='Last name'
						{...form.register("last_name", { required: true })}
					/>

					<Input
						placeholder='Email'
						type='email'
						{...form.register("email", { required: true })}
					/>

					<Button type='submit' className='w-full'>
						Save & Continue
					</Button>
				</form>
			</div>
		</main>
	);
}
