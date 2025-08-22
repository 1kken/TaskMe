import NavBar from "~/components/layouts/home/nav-bar";
import {Outlet} from "react-router";

export default function DashboardLayout(){
    return (
        <>
            <Outlet />
        </>
    );
}