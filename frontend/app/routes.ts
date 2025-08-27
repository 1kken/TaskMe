import {type RouteConfig, index, layout, route} from "@react-router/dev/routes";

export default [
    layout("routes/layouts/home-layout.tsx",
        [
            index("routes/home.tsx"),
            route("auth/login","routes/auth/login.tsx"),
            route("auth/register","routes/auth/register.tsx"),
            route("auth/logout","routes/auth/logout.tsx")
        ]),
    layout("routes/layouts/dashboard-layout.tsx",[
            route("/dashboard",'routes/dashboard/index.tsx'),
            route("/dashboard/organization/:slug",'routes/dashboard/organization/index.tsx')
            ])
] satisfies RouteConfig;
