"use client";

import * as React from "react";

export type ToastData = {
	id: string;
	title?: React.ReactNode;
	description?: React.ReactNode;
};

type ToastState = {
	toasts: ToastData[];
};

type ToastAction =
	| { type: "ADD_TOAST"; toast: ToastData }
	| { type: "REMOVE_TOAST"; toastId: string };

const TOAST_REMOVE_DELAY = 4000;

function toastReducer(state: ToastState, action: ToastAction): ToastState {
	switch (action.type) {
		case "ADD_TOAST":
			return { toasts: [action.toast] };
		case "REMOVE_TOAST":
			return {
				toasts: state.toasts.filter((t) => t.id !== action.toastId),
			};
		default:
			return state;
	}
}

const ToastContext = React.createContext<{
	toasts: ToastData[];
	toast: (toast: Omit<ToastData, "id">) => void;
} | null>(null);

export function ToastProviderCustom({ children }: { children: React.ReactNode }) {
	const [state, dispatch] = React.useReducer(toastReducer, { toasts: [] });

	const toast = (toast: Omit<ToastData, "id">) => {
		const id = crypto.randomUUID();
		dispatch({ type: "ADD_TOAST", toast: { id, ...toast } });

		setTimeout(() => {
			dispatch({ type: "REMOVE_TOAST", toastId: id });
		}, TOAST_REMOVE_DELAY);
	};

	return (
		<ToastContext.Provider value={{ toasts: state.toasts, toast }}>
			{children}
		</ToastContext.Provider>
	);
}

export function useToast() {
	const context = React.useContext(ToastContext);
	if (!context) {
		throw new Error("useToast must be used within ToastProviderCustom");
	}
	return context;
}
