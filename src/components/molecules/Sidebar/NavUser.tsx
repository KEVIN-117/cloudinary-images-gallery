"use client"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/atoms/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/atoms/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/atoms/sidebar"
import { ChevronsUpDownIcon, SparklesIcon, BadgeCheckIcon, CreditCardIcon, BellIcon, LogOutIcon } from "lucide-react"
import { signOut } from "@/actions/auth"
import { notify } from "../Notification/notify"
import { redirect } from "next/navigation"

export function NavUser({
  user,
}: {
  user: {
    name: string
    email: string
    avatar: string
  }
}) {
  const { isMobile } = useSidebar()

  const handleSignOut = async () => {
    const response = await signOut()
    if (response.error) {
      notify.error(response.message)
    } else {
      notify.success(response.message)
      redirect("/")
    }
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <SidebarMenuButton size="lg" className="aria-expanded:bg-white/5 hover:bg-white/5 transition-colors" />
            }
          >
            <Avatar className="border border-cyan-500/30 shadow-[0_0_10px_rgba(34,211,238,0.2)]">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback className="bg-black/50 text-cyan-400">CG</AvatarFallback>
            </Avatar>
            <div className="grid flex-1 text-left text-sm leading-tight text-white/90">
              <span className="truncate font-medium">{user.name}</span>
              <span className="truncate text-xs text-muted-foreground">{user.email}</span>
            </div>
            <ChevronsUpDownIcon className="ml-auto size-4 text-white/50" />
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-fit bg-black/90 backdrop-blur-2xl border border-white/10 shadow-[0_0_40px_rgba(34,211,238,0.15)]"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuGroup>
              <DropdownMenuLabel className="p-0 font-normal">
                <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                  <Avatar className="border border-fuchsia-500/30 shadow-[0_0_10px_rgba(217,70,239,0.2)]">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback className="bg-black/50 text-fuchsia-400">CG</AvatarFallback>
                  </Avatar>
                  <div className="grid flex-1 text-left text-sm leading-tight text-white">
                    <span className="truncate font-medium">{user.name}</span>
                    <span className="truncate text-xs text-muted-foreground">{user.email}</span>
                  </div>
                </div>
              </DropdownMenuLabel>
            </DropdownMenuGroup>
            <DropdownMenuSeparator className="bg-white/10" />
            <DropdownMenuGroup>
              <DropdownMenuItem className="hover:bg-white/10 cursor-pointer group">
                <SparklesIcon className="text-cyan-400 group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-all" />
                Upgrade to Vault Pro
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator className="bg-white/10" />
            <DropdownMenuGroup>
              <DropdownMenuItem className="hover:bg-white/10 cursor-pointer">
                <BadgeCheckIcon className="text-violet-400" />
                Account
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-white/10 cursor-pointer">
                <CreditCardIcon className="text-violet-400" />
                Billing
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-white/10 cursor-pointer">
                <BellIcon className="text-violet-400" />
                Notifications
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator className="bg-white/10" />
            <DropdownMenuItem className="hover:bg-rose-950/50 text-rose-300 cursor-pointer focus:bg-rose-950/50" onClick={handleSignOut}>
              <LogOutIcon className="text-rose-400" />
              Terminate Access
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
