import React, {useState} from "react";
import {
    Form,
} from "~/components/ui/form"
import {useForm} from "react-hook-form";
import {axiosInstance} from "~/lib/axios";
import {toast} from "sonner";
import {LogOut} from "lucide-react";
import {Button} from "~/components/ui/button";
import {useUserStore} from "~/lib/global-stores/user-store";
import {useNavigate} from "react-router";


export function LogOutButtonProfile() {
    const [loading, setLoading] = useState(false)
    const clearUserStore = useUserStore((state) => state.clearUser);
    let navigate = useNavigate();

    const form = useForm()
    const onSubmit = async () => {
        try {
            setLoading(true);
            await axiosInstance.post("api/logout")
            toast.success(`Successfully Logged out!`)
            navigate('/');
        } catch (error: any) {
            toast.error("Something went wrong!");
        } finally {
            setTimeout(() => {
                clearUserStore();
            }, 0);
            setLoading(false)
        }
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
                <Button
                    variant="ghost"
                    type="submit"
                    className="w-full justify-start flex items-center gap-4 px-3 py-2 hover:bg-gray-100"
                >
                    <LogOut className="text-muted-foreground" />
                    <span>{loading ? "Logging out..." : "Log out"}</span>
                </Button>
            </form>
        </Form>
    )
}
