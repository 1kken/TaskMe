import {NavLink} from "react-router";
import {useUserStore} from "~/lib/global-stores/user-store";
import LogoutButton from "~/auth/log-out-button";
import {LayoutDashboard} from "lucide-react";

export default function NavBar() {
    let userId = useUserStore((state) => state.user?.id);
    return (
        <nav className="w-full bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo / App Name */}
                <NavLink
                    to="/"
                    className="text-2xl font-bold text-blue-600"
                >
                    TaskMe
                </NavLink>
                {/* Navigation Links */}
                <div className="flex items-center space-x-4">
                {!userId ? (
                    <>
                        <NavLink
                            to="/auth/login"
                            className={({isActive}) => `px-4 py-2 rounded-xl text-sm font-medium transition ${isActive
                                ? "bg-gray-200 text-gray-900"
                                : "text-gray-700 hover:bg-gray-100"}`}>
                            Login
                        </NavLink>
                        <NavLink
                            to="/auth/register"
                            className={({isActive}) => `px-4 py-2 rounded-xl text-sm font-medium transition ${isActive
                                ? "bg-blue-700 text-white"
                                : "bg-blue-600 text-white hover:bg-blue-700"}`}>
                            Register
                        </NavLink>
                    </>
                ) : (
                    <>
                        <NavLink
                            to="/dashboard"
                            className={({ isActive }) =>
                                `px-4 py-2 rounded-lg text-sm font-medium transition flex items-center gap-2 
                            ${isActive ? "bg-green-700 text-white" : "bg-green-600 text-white hover:bg-green-700"}`
                            }
                        >
                            <LayoutDashboard size={16} />
                            <span>Dashboard</span>
                        </NavLink>
                        <LogoutButton/>
                    </>
                )}
                </div>
            </div>
        </nav>
    );
}
