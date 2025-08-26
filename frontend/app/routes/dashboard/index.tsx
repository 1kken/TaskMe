import React from "react";
import {SidebarInset, SidebarProvider, SidebarTrigger} from "~/components/ui/sidebar";
import {Separator} from "~/components/ui/separator"
import {AppSidebar} from "~/components/sidebar/sidebar";
import NavBreadcrumb from "~/routes/layouts/dashboard-components/nav-breadcrumb";
import type { Route } from "./+types/index";
import {axiosInstance} from "~/lib/axios";
import HydrateFallBackUI from "~/components/hydration/hydrate-fallback-ui";
import {useOrganizationsStore} from "~/lib/dashboard-store/organizations-store";


export async function clientLoader({}: Route.ClientLoaderArgs) {
    const result = await axiosInstance.get('/api/organization');
    const organizations = result.data.organizations;
    return {organizations: organizations}
}

export function HydrateFallback() {
    return (
        <>
            <HydrateFallBackUI/>
        </>
    );
}

export default function Index(
    {loaderData}:Route.ComponentProps
) {
    const setOrganizationStore = useOrganizationsStore((state) => state.setOrganizations);
    setOrganizationStore(loaderData.organizations);
    return (
        <>
            <SidebarProvider>
                <AppSidebar/>
                <SidebarInset>
                    <header
                        className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
                        <div className="flex items-center gap-2 px-4">
                            <SidebarTrigger className="-ml-1"/>
                            <Separator
                                orientation="vertical"
                                className="mr-2 data-[orientation=vertical]:h-4"
                            />
                            <NavBreadcrumb/>
                        </div>
                    </header>
                    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                            <div className="bg-muted/50 aspect-video rounded-xl"/>
                            <div className="bg-muted/50 aspect-video rounded-xl"/>
                            <div className="bg-muted/50 aspect-video rounded-xl"/>
                        </div>
                        <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min"/>
                    </div>
                </SidebarInset>
            </SidebarProvider>
        </>
    )
}