"use client";

import { ChevronsUpDownIcon, PlusIcon } from "lucide-react";
import * as React from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from "@/components/atoms/dropdown-menu";
import {
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
} from "@/components/atoms/sidebar";

export function TeamSwitcher({
    teams,
}: {
    teams: {
        name: string;
        logo: React.ReactNode;
        plan: string;
    }[];
}) {
    const { isMobile } = useSidebar();
    const [activeTeam, setActiveTeam] = React.useState(teams[0]);
    if (!activeTeam) {
        return null;
    }
    return (
        <SidebarMenu>
            <SidebarMenuItem>
                <DropdownMenu>
                    <DropdownMenuTrigger
                        render={
                            <SidebarMenuButton
                                size="lg"
                                className="transition-colors hover:bg-white/5 data-open:bg-white/5 data-open:text-white"
                            />
                        }
                    >
                        <div className="flex aspect-square size-8 items-center justify-center rounded-lg border border-cyan-500/30 bg-black/40 text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                            {activeTeam.logo}
                        </div>
                        <div className="grid flex-1 text-left text-sm text-white/90 leading-tight">
                            <span className="truncate font-bold tracking-wide">
                                {activeTeam.name}
                            </span>
                            <span className="truncate font-mono text-[10px] text-cyan-400/80 uppercase">
                                {activeTeam.plan}
                            </span>
                        </div>
                        <ChevronsUpDownIcon className="ml-auto text-white/50" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                        className="w-fit border border-white/10 bg-black/80 shadow-[0_0_30px_rgba(34,211,238,0.15)] backdrop-blur-xl"
                        align="start"
                        side={isMobile ? "bottom" : "right"}
                        sideOffset={4}
                    >
                        <DropdownMenuGroup>
                            <DropdownMenuLabel className="font-mono text-[10px] text-cyan-400/70 uppercase tracking-widest">
                                Active Vaults
                            </DropdownMenuLabel>
                            {teams.map((team, index) => (
                                <DropdownMenuItem
                                    key={team.name}
                                    onClick={() => setActiveTeam(team)}
                                    className="cursor-pointer gap-2 p-2 hover:bg-white/10"
                                >
                                    <div className="flex size-6 items-center justify-center rounded-md border border-white/10 bg-black/40 text-white/80">
                                        {team.logo}
                                    </div>
                                    {team.name}
                                    <DropdownMenuShortcut className="text-white/40">
                                        ⌘{index + 1}
                                    </DropdownMenuShortcut>
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator className="bg-white/10" />
                        <DropdownMenuGroup>
                            <DropdownMenuItem className="group cursor-pointer gap-2 p-2 hover:bg-white/10">
                                <div className="flex size-6 items-center justify-center rounded-md border border-fuchsia-500/30 bg-fuchsia-500/10 text-fuchsia-400 transition-all group-hover:shadow-[0_0_10px_rgba(217,70,239,0.3)]">
                                    <PlusIcon className="size-4" />
                                </div>
                                <div className="font-medium text-fuchsia-200">Initialize Vault</div>
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
            </SidebarMenuItem>
        </SidebarMenu>
    );
}
