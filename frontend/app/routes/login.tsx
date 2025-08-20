import LoginForm from "~/auth/login-form";
import axios from "~/lib/axios";
import {redirect} from "react-router";
export async function action({ request }: { request: Request }) {
    const formData = await request.formData();
    const email = formData.get("email");
    const password = formData.get("password");
    //initialize CSRF
    await axios.get("/sanctum/csrf-cookie");

    try {
        const result = await axios.post("/api/login",
            {email,password});
        if(result.status === 200){
            return redirect('/') ;
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
    return <LoginForm />;
}
