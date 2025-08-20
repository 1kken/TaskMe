import axios from "~/lib/axios";
import {redirect, useActionData, useNavigate} from "react-router";
import RegisterForm from "~/auth/register-form";
import axiosInstance from "~/lib/axios";
import {useUserStore} from "~/lib/global-stores/user-store";
import {useEffect} from "react";
export async function action({ request }: { request: Request }) {
    const formData = await request.formData();
    const name = formData.get("name");;
    const email = formData.get("email");
    const password = formData.get("password");
    const password_confirmation = formData.get("password_confirmation");
    //initialize CSRF
    await axiosInstance.get("/sanctum/csrf-cookie");

    try {
        const result = await axiosInstance.post("/api/register",
            {email,password,password_confirmation,name});
        if(result.status === 200){
            return {user : result.data.user}
        }
    }
    catch (e: any) {
        const data = e.response?.data || {};
        return {
            ...data,                     // spread all fields from server response
        };
    }
}

export default function LoginPage() {
    const data = useActionData<typeof action>();
    const setUser = useUserStore((s) => s.setUser);
    const navigate = useNavigate();

    useEffect(() => {
        if (data?.user) {
            setUser(data.user);     // update global store
            navigate("/");          // redirect after login
        }
    }, [data, setUser, navigate]);

    return <RegisterForm />;
}
