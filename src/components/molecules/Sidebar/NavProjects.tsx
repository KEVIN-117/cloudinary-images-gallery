"use client"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/atoms/dropdown-menu"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/atoms/sidebar"
import { MoreHorizontalIcon, FolderIcon, ArrowRightIcon, Trash2Icon } from "lucide-react"

export function NavProjects({
  projects,
}: {
  projects: {
    name: string
    url: string
    icon: React.ReactNode
  }[]
}) {
  const { isMobile } = useSidebar()
  return (
    <SidebarGroup>
      <SidebarGroupLabel className="text-fuchsia-400/80 font-mono uppercase tracking-widest text-[10px] group-data-[collapsible=icon]:hidden">Colecciones</SidebarGroupLabel>
      <SidebarMenu>
        {projects.map((item) => (
          <SidebarMenuItem key={item.name}>
            <SidebarMenuButton tooltip={item.name} render={<a href={item.url} />} className="hover:bg-white/5 hover:text-fuchsia-300 transition-colors">
              {item.icon}
              <span>{item.name}</span>
            </SidebarMenuButton>
            <DropdownMenu>
              <DropdownMenuTrigger
                render={
                  <SidebarMenuAction
                    showOnHover
                    className="aria-expanded:bg-white/10 hover:bg-white/10"
                  />
                }
              >
                <MoreHorizontalIcon />
                <span className="sr-only">Más</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-fit bg-black/80 backdrop-blur-xl border border-white/10 shadow-[0_0_30px_rgba(217,70,239,0.15)]"
                side={isMobile ? "bottom" : "right"}
                align={isMobile ? "end" : "start"}
              >
                <DropdownMenuItem className="hover:bg-white/10 cursor-pointer">
                  <FolderIcon className="text-cyan-400" />
                  <span>Ver Colección</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-white/10 cursor-pointer">
                  <ArrowRightIcon className="text-violet-400" />
                  <span>Compartir</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-white/10" />
                <DropdownMenuItem variant="destructive" className="text-rose-400 focus:bg-rose-950/50 cursor-pointer">
                  <Trash2Icon />
                  <span>Eliminar</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        ))}
        <SidebarMenuItem>
          <SidebarMenuButton className="text-muted-foreground hover:text-white transition-colors">
            <MoreHorizontalIcon />
            <span>Más opciones</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
  )
}
