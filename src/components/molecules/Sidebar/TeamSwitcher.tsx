"use client"

import * as React from "react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/atoms/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/atoms/sidebar"
import { ChevronsUpDownIcon, PlusIcon } from "lucide-react"

export function TeamSwitcher({
  teams,
}: {
  teams: {
    name: string
    logo: React.ReactNode
    plan: string
  }[]
}) {
  const { isMobile } = useSidebar()
  const [activeTeam, setActiveTeam] = React.useState(teams[0])
  if (!activeTeam) {
    return null
  }
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <SidebarMenuButton
                size="lg"
                className="data-open:bg-white/5 data-open:text-white hover:bg-white/5 transition-colors"
              />
            }
          >
            <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-black/40 border border-cyan-500/30 text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
              {activeTeam.logo}
            </div>
            <div className="grid flex-1 text-left text-sm leading-tight text-white/90">
              <span className="truncate font-bold tracking-wide">{activeTeam.name}</span>
              <span className="truncate text-[10px] uppercase font-mono text-cyan-400/80">{activeTeam.plan}</span>
            </div>
            <ChevronsUpDownIcon className="ml-auto text-white/50" />
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-fit bg-black/80 backdrop-blur-xl border border-white/10 shadow-[0_0_30px_rgba(34,211,238,0.15)]"
            align="start"
            side={isMobile ? "bottom" : "right"}
            sideOffset={4}
          >
            <DropdownMenuGroup>
              <DropdownMenuLabel className="text-[10px] uppercase tracking-widest font-mono text-cyan-400/70">
                Active Vaults
              </DropdownMenuLabel>
              {teams.map((team, index) => (
                <DropdownMenuItem
                  key={team.name}
                  onClick={() => setActiveTeam(team)}
                  className="gap-2 p-2 hover:bg-white/10 cursor-pointer"
                >
                  <div className="flex size-6 items-center justify-center rounded-md border border-white/10 bg-black/40 text-white/80">
                    {team.logo}
                  </div>
                  {team.name}
                  <DropdownMenuShortcut className="text-white/40">⌘{index + 1}</DropdownMenuShortcut>
                </DropdownMenuItem>
              ))}
            </DropdownMenuGroup>
            <DropdownMenuSeparator className="bg-white/10" />
            <DropdownMenuGroup>
              <DropdownMenuItem className="gap-2 p-2 hover:bg-white/10 cursor-pointer group">
                <div className="flex size-6 items-center justify-center rounded-md border border-fuchsia-500/30 bg-fuchsia-500/10 text-fuchsia-400 group-hover:shadow-[0_0_10px_rgba(217,70,239,0.3)] transition-all">
                  <PlusIcon className="size-4" />
                </div>
                <div className="font-medium text-fuchsia-200">
                  Initialize Vault
                </div>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
