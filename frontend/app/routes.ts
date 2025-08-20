import {type RouteConfig, index, layout, route} from "@react-router/dev/routes";

export default [
    layout("routes/layouts/home-layout.tsx",
        [
            index("routes/home.tsx"),
            route("auth/login","routes/login.tsx"),
            route("auth/register","routes/register.tsx")
        ])] satisfies RouteConfig;
