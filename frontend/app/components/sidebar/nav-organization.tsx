"use client"

import {
    Folder,
    Forward,
    MoreHorizontal,
    Trash2,
    type LucideIcon, Plus, Pencil,
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
import {Separator} from "@radix-ui/react-menu";
import UpsertModalOrganization from "~/components/modals/organization/upsert-modal-organization";
import {DeleteModal} from "~/components/modals/delete-modal";
import {InviteLinkModal} from "~/components/modals/organization/invite-link-modal";


export function NavOrganization() {
    const organizations = useOrganizationsStore(state => state.organizations)
    const {isMobile} = useSidebar()

    return (
        <><SidebarGroup className="group-data-[collapsible=icon]:hidden">
            <SidebarGroupLabel className="flex items-center justify-between">
                Organizations
                <UpsertModalOrganization update={false}/>
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
                                    <DropdownMenuItem asChild>
                                        <UpsertModalOrganization update={true} organization={item}/>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem asChild>
                                        <InviteLinkModal organization_id={item.id}/>
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator/>
                                    <DropdownMenuItem asChild>
                                        <DeleteModal trigger={
                                            <div
                                                className="flex items-center text-sm gap-2 cursor-pointer p-2 hover:bg-gray-100 rounded-lg">
                                                <Trash2 size={12} className="text-muted-foreground"/>
                                                <span>Delete Organization</span>
                                            </div>
                                        }
                                                     id={item.id} url="api/organization"
                                                     title="Delete Organization"
                                                     description={`Are you sure to delete ${item.name} organization`}/>
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
