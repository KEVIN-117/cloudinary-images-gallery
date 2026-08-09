"use client";

import { ChevronRightIcon } from "lucide-react";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/atoms/collapsible";
import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
} from "@/components/atoms/sidebar";

export function NavMain({
    items,
}: {
    items: {
        title: string;
        url: string;
        icon?: React.ReactNode;
        isActive?: boolean;
        items?: {
            title: string;
            url: string;
        }[];
    }[];
}) {
    return (
        <SidebarGroup>
            <SidebarGroupLabel className="font-mono text-[10px] text-cyan-400/80 uppercase tracking-widest group-data-[collapsible=icon]:hidden">
                Plataforma
            </SidebarGroupLabel>
            <SidebarMenu>
                {items.map((item) => (
                    <Collapsible
                        key={item.title}
                        defaultOpen={item.isActive}
                        className="group/collapsible"
                        render={<SidebarMenuItem />}
                    >
                        <CollapsibleTrigger
                            render={
                                <SidebarMenuButton
                                    tooltip={item.title}
                                    className="transition-colors hover:bg-white/5 hover:text-cyan-300"
                                />
                            }
                        >
                            {item.icon}
                            <span>{item.title}</span>
                            <ChevronRightIcon className="ml-auto text-white/50 transition-transform duration-200 group-data-open/collapsible:rotate-90" />
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                            <SidebarMenuSub>
                                {item.items?.map((subItem) => (
                                    <SidebarMenuSubItem key={subItem.title}>
                                        <SidebarMenuSubButton
                                            render={<a href={subItem.url} />}
                                            className="transition-colors hover:text-fuchsia-400"
                                        >
                                            <span>{subItem.title}</span>
                                        </SidebarMenuSubButton>
                                    </SidebarMenuSubItem>
                                ))}
                            </SidebarMenuSub>
                        </CollapsibleContent>
                    </Collapsible>
                ))}
            </SidebarMenu>
        </SidebarGroup>
    );
}
