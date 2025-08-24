import LoginForm from "~/auth/login-form";
import {axiosInstance} from "~/lib/axios";
import {useUserStore} from "~/lib/global-stores/user-store";
import {useActionData, useNavigate} from "react-router";
import {useEffect} from "react";
import type {Route} from "./+types/login";
import {preventAuthenticatedAuthRoute} from "~/lib/auth";
import {LoginValidation} from "~/lib/validation/auth/login-validation";
import {ZodError} from "zod";
import {zodErrorParse} from "~/lib/validation/errorParser";


export async function clientLoader({params,}: Route.ClientLoaderArgs) {
    return await preventAuthenticatedAuthRoute();
}

export async function clientAction({request}: { request: Request }) {
    const formData = await request.formData();
    const email = formData.get("email");
    const password = formData.get("password");


    try {
        LoginValidation.parse({email, password})

        //server request
        await axiosInstance.get("/sanctum/csrf-cookie");

        const result = await axiosInstance.post("/api/login",
            {email, password});
        if (result.status === 200) {
            //set user store
            return {user: result.data.user}
        }

    } catch (e: any) {
        //client zod validation
        if (e instanceof ZodError) {
            return zodErrorParse(e);
        }

        //server error
        const data = e.response?.data || {};
        return {
            ...data,                     // spread all fields from server response
        };
    }
}

export default function LoginPage() {
    const data = useActionData<typeof clientAction>();
    const setUser = useUserStore((s) => s.setUser);
    const navigate = useNavigate();

    useEffect(() => {
        if (data?.user) {
            setUser(data.user);     // update global store
            navigate("/");          // redirect after login
        }
    }, [data, setUser, navigate]);

    return <LoginForm/>;
}
