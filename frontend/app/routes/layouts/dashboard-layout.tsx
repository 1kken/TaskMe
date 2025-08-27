import {SidebarInset, SidebarProvider, SidebarTrigger} from "~/components/ui/sidebar";
import {Separator} from "~/components/ui/separator"
import {AppSidebar} from "~/components/sidebar/sidebar";
import NavBreadcrumb from "~/routes/layouts/dashboard-components/nav-breadcrumb";
import {Outlet} from "react-router";

export default function DashboardLayout() {
    return (
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
                <Outlet/>
            </SidebarInset>
        </SidebarProvider>
    );
}