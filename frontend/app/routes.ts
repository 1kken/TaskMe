import {type RouteConfig, index, layout, route} from "@react-router/dev/routes";

export default [
    layout("routes/layouts/home-layout.tsx",
        [
            index("routes/home.tsx"),
            route("auth/login","routes/auth/login.tsx"),
            route("auth/register","routes/auth/register.tsx"),
            route("auth/logout","routes/auth/logout.tsx")
        ])] satisfies RouteConfig;
