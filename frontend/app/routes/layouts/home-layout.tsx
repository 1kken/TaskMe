import {Outlet, useLocation} from "react-router";
import NavBar from "~/components/layouts/home/nav-bar";

export default function HomeLayout() {
    const location = useLocation();
    const isAuthPage = location.pathname.includes("/login") || location.pathname.includes("/register");

    return (
        <>
            <NavBar />
            <main className={isAuthPage ? "flex justify-center items-center min-h-[calc(100vh-64px)]" : ""}>
                <Outlet />
            </main>
        </>
    );
}

