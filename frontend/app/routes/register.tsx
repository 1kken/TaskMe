import axios from "~/lib/axios";
import {redirect} from "react-router";
import RegisterForm from "~/auth/register-form";
export async function action({ request }: { request: Request }) {
    const formData = await request.formData();
    const name = formData.get("name");;
    const email = formData.get("email");
    const password = formData.get("password");
    const password_confirmation = formData.get("password_confirmation");
    //initialize CSRF
    await axios.get("/sanctum/csrf-cookie");

    try {
        const result = await axios.post("/api/register",
            {email,password,password_confirmation,name});
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
    return <RegisterForm />;
}
