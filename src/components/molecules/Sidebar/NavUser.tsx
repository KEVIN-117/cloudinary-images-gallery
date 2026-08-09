"use client";

import {
    BadgeCheckIcon,
    BellIcon,
    ChevronsUpDownIcon,
    CreditCardIcon,
    LogOutIcon,
    SparklesIcon,
} from "lucide-react";
import { redirect } from "next/navigation";
import { signOut } from "@/actions/auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/atoms/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/atoms/dropdown-menu";
import {
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
} from "@/components/atoms/sidebar";
import { notify } from "../Notification/notify";

export function NavUser({
    user,
}: {
    user: {
        name: string;
        email: string;
        avatar: string;
    };
}) {
    const { isMobile } = useSidebar();

    const handleSignOut = async () => {
        const response = await signOut();
        if (response.error) {
            notify.error(response.message);
        } else {
            notify.success(response.message);
            redirect("/");
        }
    };

    return (
        <SidebarMenu>
            <SidebarMenuItem>
                <DropdownMenu>
                    <DropdownMenuTrigger
                        render={
                            <SidebarMenuButton
                                size="lg"
                                className="transition-colors hover:bg-white/5 aria-expanded:bg-white/5"
                            />
                        }
                    >
                        <Avatar className="border border-cyan-500/30 shadow-[0_0_10px_rgba(34,211,238,0.2)]">
                            <AvatarImage src={user.avatar} alt={user.name} />
                            <AvatarFallback className="bg-black/50 text-cyan-400">
                                CG
                            </AvatarFallback>
                        </Avatar>
                        <div className="grid flex-1 text-left text-sm text-white/90 leading-tight">
                            <span className="truncate font-medium">{user.name}</span>
                            <span className="truncate text-muted-foreground text-xs">
                                {user.email}
                            </span>
                        </div>
                        <ChevronsUpDownIcon className="ml-auto size-4 text-white/50" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                        className="w-fit border border-white/10 bg-black/90 shadow-[0_0_40px_rgba(34,211,238,0.15)] backdrop-blur-2xl"
                        side={isMobile ? "bottom" : "right"}
                        align="end"
                        sideOffset={4}
                    >
                        <DropdownMenuGroup>
                            <DropdownMenuLabel className="p-0 font-normal">
                                <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                                    <Avatar className="border border-fuchsia-500/30 shadow-[0_0_10px_rgba(217,70,239,0.2)]">
                                        <AvatarImage src={user.avatar} alt={user.name} />
                                        <AvatarFallback className="bg-black/50 text-fuchsia-400">
                                            CG
                                        </AvatarFallback>
                                    </Avatar>
                                    <div className="grid flex-1 text-left text-sm text-white leading-tight">
                                        <span className="truncate font-medium">{user.name}</span>
                                        <span className="truncate text-muted-foreground text-xs">
                                            {user.email}
                                        </span>
                                    </div>
                                </div>
                            </DropdownMenuLabel>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator className="bg-white/10" />
                        <DropdownMenuGroup>
                            <DropdownMenuItem className="group cursor-pointer hover:bg-white/10">
                                <SparklesIcon className="text-cyan-400 transition-all group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                                Upgrade to Vault Pro
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator className="bg-white/10" />
                        <DropdownMenuGroup>
                            <DropdownMenuItem className="cursor-pointer hover:bg-white/10">
                                <BadgeCheckIcon className="text-violet-400" />
                                Account
                            </DropdownMenuItem>
                            <DropdownMenuItem className="cursor-pointer hover:bg-white/10">
                                <CreditCardIcon className="text-violet-400" />
                                Billing
                            </DropdownMenuItem>
                            <DropdownMenuItem className="cursor-pointer hover:bg-white/10">
                                <BellIcon className="text-violet-400" />
                                Notifications
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator className="bg-white/10" />
                        <DropdownMenuItem
                            className="cursor-pointer text-rose-300 hover:bg-rose-950/50 focus:bg-rose-950/50"
                            onClick={handleSignOut}
                        >
                            <LogOutIcon className="text-rose-400" />
                            Terminate Access
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </SidebarMenuItem>
        </SidebarMenu>
    );
}
