"use client"

import {
    Folder,
    Forward,
    MoreHorizontal,
    Trash2,
    type LucideIcon, Plus,
} from "lucide-react"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu"
import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuAction,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
} from "~/components/ui/sidebar"
import {useOrganizationsStore} from "~/lib/dashboard-store/organizations-store";
import {ScrollArea} from "~/components/ui/scroll-area";
import {Button} from "~/components/ui/button";
import {Separator} from "@radix-ui/react-menu";
import CreateModalOrganization from "~/components/modals/organization/create-modal-organization";


export function NavOrganization() {
    const organizations = useOrganizationsStore(state => state.organizations)
    const {isMobile} = useSidebar()

    return (
        <><SidebarGroup className="group-data-[collapsible=icon]:hidden">
            <SidebarGroupLabel className="flex items-center justify-between">
                Organizations
                <CreateModalOrganization/>
            </SidebarGroupLabel>
            <SidebarMenu>
                <ScrollArea className="max-h-[200px]">
                    {organizations.map((item) => (
                        <SidebarMenuItem key={item.name}>
                            <SidebarMenuButton asChild>
                                <a href="#">
                                    <span>{item.name}</span>
                                </a>
                            </SidebarMenuButton>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <SidebarMenuAction showOnHover>
                                        <MoreHorizontal/>
                                        <span className="sr-only">More</span>
                                    </SidebarMenuAction>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent
                                    className="w-48 rounded-lg"
                                    side={isMobile ? "bottom" : "right"}
                                    align={isMobile ? "end" : "start"}
                                >
                                    <DropdownMenuItem>
                                        <Folder className="text-muted-foreground"/>
                                        <span>View Organization</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <Forward className="text-muted-foreground"/>
                                        <span>Share Organization</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator/>
                                    <DropdownMenuItem>
                                        <Trash2 className="text-muted-foreground"/>
                                        <span>Delete Organization</span>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </SidebarMenuItem>
                    ))}
                </ScrollArea>
            </SidebarMenu>
        </SidebarGroup>
            <Separator/>
        </>
    )
}
