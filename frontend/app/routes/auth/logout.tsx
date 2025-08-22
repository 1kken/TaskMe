import { redirect } from "react-router";
import {axiosInstance} from "~/lib/axios";
export async function clientAction() {

    try {

        await axiosInstance.get("/sanctum/csrf-cookie");
        const result = await axiosInstance.post("/api/logout");
        return redirect('/');
    } catch (e: any) {
        console.error("Logout error:", e);
        return { error: e.response?.data?.message || "Logout failed" };
    }
}