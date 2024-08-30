import { toast } from "react-toastify";

export interface ErrorToastOptions {
    position: "top-right";
}

export const createSuccessToast = (message: any) => {
    toast.success(message, {
        position: "top-right"
    });
}


export const createErrorToast = (message: string) => {
    toast.error(message, {
        position: "top-right"
    } as ErrorToastOptions);
}