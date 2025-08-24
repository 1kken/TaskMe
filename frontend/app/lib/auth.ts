import {useUserStore} from "~/lib/global-stores/user-store";
import {redirect} from "react-router";
import {axiosInstance} from "~/lib/axios";

export function isLoggedIn():boolean{
    return !!useUserStore.getState().user ;
}

export async function preventAuthenticatedAuthRoute() {
    try {
        const user = await axiosInstance.get("/api/user");
        return redirect("/");
    } catch (e: any) {

    }finally
    {
        console.clear()
    }
}

export function checkAuth(){
    const user = useUserStore.getState().user;
    console.log("hit");
    if(!user){
        return redirect('auth/login');
    }
}