"use client";

import { ArrowRightIcon, FolderIcon, MoreHorizontalIcon, Trash2Icon } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/atoms/dropdown-menu";
import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuAction,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
} from "@/components/atoms/sidebar";

export function NavProjects({
    projects,
}: {
    projects: {
        name: string;
        url: string;
        icon: React.ReactNode;
    }[];
}) {
    const { isMobile } = useSidebar();
    return (
        <SidebarGroup>
            <SidebarGroupLabel className="font-mono text-[10px] text-fuchsia-400/80 uppercase tracking-widest group-data-[collapsible=icon]:hidden">
                Colecciones
            </SidebarGroupLabel>
            <SidebarMenu>
                {projects.map((item) => (
                    <SidebarMenuItem key={item.name}>
                        <SidebarMenuButton
                            tooltip={item.name}
                            render={<a href={item.url} />}
                            className="transition-colors hover:bg-white/5 hover:text-fuchsia-300"
                        >
                            {item.icon}
                            <span>{item.name}</span>
                        </SidebarMenuButton>
                        <DropdownMenu>
                            <DropdownMenuTrigger
                                render={
                                    <SidebarMenuAction
                                        showOnHover
                                        className="hover:bg-white/10 aria-expanded:bg-white/10"
                                    />
                                }
                            >
                                <MoreHorizontalIcon />
                                <span className="sr-only">Más</span>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                className="w-fit border border-white/10 bg-black/80 shadow-[0_0_30px_rgba(217,70,239,0.15)] backdrop-blur-xl"
                                side={isMobile ? "bottom" : "right"}
                                align={isMobile ? "end" : "start"}
                            >
                                <DropdownMenuItem className="cursor-pointer hover:bg-white/10">
                                    <FolderIcon className="text-cyan-400" />
                                    <span>Ver Colección</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem className="cursor-pointer hover:bg-white/10">
                                    <ArrowRightIcon className="text-violet-400" />
                                    <span>Compartir</span>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator className="bg-white/10" />
                                <DropdownMenuItem
                                    variant="destructive"
                                    className="cursor-pointer text-rose-400 focus:bg-rose-950/50"
                                >
                                    <Trash2Icon />
                                    <span>Eliminar</span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                ))}
                <SidebarMenuItem>
                    <SidebarMenuButton className="text-muted-foreground transition-colors hover:text-white">
                        <MoreHorizontalIcon />
                        <span>Más opciones</span>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarGroup>
    );
}
