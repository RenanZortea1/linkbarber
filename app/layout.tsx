import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { CommandDialogDemo } from "@/components/commandDialog";

export const metadata: Metadata = {
  title: "Link Barber",
  description: "Software de agendamento de barbearia",
};


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
    <body>
    <SidebarProvider>
      <AppSidebar />
          <CommandDialogDemo />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
    </body>
    </html>
  )
}
