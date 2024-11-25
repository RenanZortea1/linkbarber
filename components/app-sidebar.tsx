"use client"

import * as React from "react"
import {
  BookOpen,
  Bot,
  CircleDollarSign,
  Command,
  Dice1,
  Frame,
  House,
  LifeBuoy,
  Map,
  PieChart,
  Scissors,
  Send,
  Settings2,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "linksys",
    email: "lnksys@dev.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "dashboard",
      icon: House,
      isActive: true,
      items: [
        {
          title: "Historico",
          url: "#",
        },
        {
          title: "Favoritos",
          url: "#",
        },
      ],
    },
    {
      title: "Dados",
      url: "#",
      icon: Dice1,
      items: [
        {
          title: "Equipe",
          url: "#",
        },
        {
          title: "Calendario",
          url: "#",
        },
        {
          title: "Clientes",
          url: "#",
        },
      ],
    },
    {
      title: "Financeiro",
      url: "#",
      icon: CircleDollarSign,
      items: [
        {
          title: "Planos",
          url: "#",
        },
        {
          title: "Assinaturas",
          url: "#",
        },
        {
          title: "Servicos",
          url: "#",
        },
        {
          title: "Despesas",
          url: "#",
        },
        {
          title: "Produtos",
          url: "#",
        },
      ],
    },
    {
      title: "Configuracao",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "Geral",
          url: "#",
        },
        {
          title: "Equipe",
          url: "#",
        },
        {
          title: "Assinatura Premium",
          url: "#",
        },
        {
          title: "Tema",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Suporte",
      url: "#",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "#",
      icon: Send,
    },
  ],
  projects: [
    {
      name: "Salao 1",
      url: "#",
      icon: Scissors,
    },
    {
      name: "Salao 2",
      url: "#",
      icon: Scissors,
    },
    {
      name: "Salao 3",
      url: "#",
      icon: Scissors,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">lnkSYS</span>
                  <span className="truncate text-xs">Barber</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
