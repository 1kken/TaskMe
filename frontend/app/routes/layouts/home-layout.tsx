import { Outlet } from "react-router";
import NavBar from "~/components/layouts/home/nav-bar";

export default function HomeLayout() {
    return (
        <>
            <NavBar />
            <main className="flex justify-center items-center min-h-[calc(100vh-64px)]">
                <Outlet />
            </main>
        </>
    );
}
