import LoginForm from "~/auth/login-form";
import axiosInstance from "~/lib/axios";
import {useUserStore} from "~/lib/global-stores/user-store";
import {useActionData, useNavigate} from "react-router";
import {useEffect} from "react";

export async function action({ request }: { request: Request }) {
    const formData = await request.formData();
    const email = formData.get("email");
    const password = formData.get("password");
    //initialize CSRF
    await axiosInstance.get("/sanctum/csrf-cookie");

    try {
        const result = await axiosInstance.post("/api/login",
            {email,password});
        if(result.status === 200){

            //set user store
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

    return <LoginForm />;
}
