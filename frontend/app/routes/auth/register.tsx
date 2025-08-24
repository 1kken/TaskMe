import { useActionData, useNavigate} from "react-router";
import RegisterForm from "~/auth/register-form";
import {useUserStore} from "~/lib/global-stores/user-store";
import {useEffect} from "react";
import {axiosInstance} from "~/lib/axios";
import {preventAuthenticatedAuthRoute} from "~/lib/auth";
import {zodErrorParse} from "~/lib/validation/errorParser";
import {RegisterValidation} from "~/lib/validation/auth/register-validation";
import {ZodError} from "zod";

export async function clientLoader() {
    return await preventAuthenticatedAuthRoute();
}
export async function clientAction({ request }: { request: Request }) {
    const formData = await request.formData();
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");
    const password_confirmation = formData.get("password_confirmation");

    try {
        //zod validation
        RegisterValidation.parse({name,email, password,password_confirmation})

        //server request
        await axiosInstance.get("/sanctum/csrf-cookie");

        const result = await axiosInstance.post("/api/register",
            {name,email, password,password_confirmation});
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

export default function RegisterPage() {
    const data = useActionData<typeof clientAction>();
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
