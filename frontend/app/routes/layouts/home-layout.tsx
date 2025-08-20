import { Outlet } from "react-router";
import NavBar from "~/components/layouts/home/nav-bar";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
    const isAuthPage = window.location.pathname.includes("/login") || window.location.pathname.includes("/register");

    return (
        <>
            <NavBar />
            <main className={isAuthPage ? "flex justify-center items-center min-h-[calc(100vh-64px)]" : ""}>
                <Outlet />
            </main>
        </>
    );
}

