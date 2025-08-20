import axiosInstance from "~/lib/axios";
import { redirect } from "react-router";
export async function action() {

    try {
        const result = await axiosInstance.post("/api/logout");
        return redirect('/');
    } catch (e: any) {
        console.error("Logout error:", e);
        return { error: e.response?.data?.message || "Logout failed" };
    }
}