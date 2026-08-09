"use client"

import * as React from "react"

import { NavMain } from "@/components/molecules/Sidebar/NavMain"
import { NavProjects } from "@/components/molecules/Sidebar/NavProjects"
import { NavUser } from "@/components/molecules/Sidebar/NavUser"
import { TeamSwitcher } from "@/components/molecules/Sidebar/TeamSwitcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/atoms/sidebar"
import { ImagesIcon, FolderLockIcon, ArchiveIcon, ApertureIcon, SparklesIcon, Settings2Icon, UploadCloudIcon } from "lucide-react"

const data = {
  user: {
    name: "Administrador",
    email: "admin@vault.io",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Bóveda Personal",
      logo: <ImagesIcon className="size-4" />,
      plan: "Activa",
    },
    {
      name: "Archivo Compartido",
      logo: <ArchiveIcon className="size-4" />,
      plan: "Lectura",
    },
  ],
  navMain: [
    {
      title: "Explorar Galería",
      url: "/dashboard/gallery",
      icon: <ApertureIcon />,
      isActive: true,
      items: [
        {
          title: "Todas las imágenes",
          url: "/dashboard/gallery",
        },
        {
          title: "Favoritos",
          url: "/dashboard/favorites",
        },
        {
          title: "Papelera",
          url: "/dashboard/trash",
        },
      ],
    },
    {
      title: "Subida de Imágenes",
      url: "/dashboard/upload",
      icon: <UploadCloudIcon />,
      items: [
        {
          title: "Subida Individual",
          url: "/dashboard/upload",
        }
      ],
    },
    {
      title: "Herramientas IA",
      url: "/dashboard/ai",
      icon: <SparklesIcon />,
      items: [
        {
          title: "Mejorar Resolución",
          url: "#",
        },
        {
          title: "Quitar Fondo",
          url: "#",
        },
      ],
    },
    {
      title: "Ajustes",
      url: "/dashboard/settings",
      icon: <Settings2Icon />,
      items: [
        {
          title: "Claves API (Cloudinary)",
          url: "#",
        },
        {
          title: "Preferencias de Interfaz",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Viaje a Japón 2026",
      url: "#",
      icon: <FolderLockIcon />,
    },
    {
      name: "Proyectos de Diseño",
      url: "#",
      icon: <FolderLockIcon />,
    },
    {
      name: "Recuerdos 2025",
      url: "#",
      icon: <ArchiveIcon />,
    },
  ],
}

interface DashboardSidebarProps extends React.ComponentProps<typeof Sidebar> {
  userRole?: string;
  userEmail?: string;
}

export function DashboardSidebar({ userRole = 'viewer', userEmail = 'usuario@vault.io', ...props }: DashboardSidebarProps) {
  // Configurar usuario dinámicamente
  const dynamicUser = {
    ...data.user,
    name: userRole === 'admin' ? 'Administrador' : 'Observador',
    email: userEmail,
  };

  // Filtrar navegación según rol
  const filteredNavMain = data.navMain.filter(item => {
    if (userRole === 'viewer') {
      // Ocultar subida de imágenes y ajustes a los viewers
      if (item.title === 'Subida de Imágenes' || item.title === 'Ajustes') {
        return false;
      }
    }
    return true;
  });

  return (
    <Sidebar collapsible="icon" className="border-r border-white/5 bg-black/40 backdrop-blur-3xl" {...props}>
      <SidebarHeader className="border-b border-white/5 py-3">
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent className="py-4">
        <NavMain items={filteredNavMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter className="border-t border-white/5 py-3">
        <NavUser user={dynamicUser} />
      </SidebarFooter>
    </Sidebar>
  )
}
