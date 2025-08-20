import LoginForm from "~/auth/login-form";
import axios from "~/lib/axios";
export async function action({ request }: { request: Request }) {
    const formData = await request.formData();
    const email = formData.get("email");
    const password = formData.get("password");

    //initialize CSRF
    await axios.get("/sanctum/csrf-cookie");
}

export default function LoginPage() {
    return <LoginForm />;
}
