"use client";

import * as React from "react";
import {
  Calculator,
  Calendar,
  CreditCard,
  DollarSign,
  Settings,
  Smile,
  User,
} from "lucide-react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import CommandLink from "@/components/commandLink";

const commands = [
  {
    heading: "Acesso Rapido",
    items: [
      { href: "/schedule", icon: Calendar, label: "Calendario" },
      { href: "/team", icon: Smile, label: "Equipe" },
      { href: "/finance", icon: DollarSign, label: "Financeiro" },
    ],
  },
  {
    heading: "Configuracoes",
    items: [
      { href: "/profile", icon: User, label: "Perfil" },
      { href: "/billing", icon: CreditCard, label: "Assinatura" },
      { href: "/settings", icon: Settings, label: "Configuracoes" },
    ],
  },
];

export function CommandDialogDemo() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <p className="absolute hidden xl:block bottom-0 right-0 p-6 text-sm text-muted-foreground">
        Pressione{" "}
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">⌘</span>J
        </kbd>
      </p>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Procure..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {commands.map((group) => (
            <React.Fragment key={group.heading}>
              <CommandGroup heading={group.heading}>
                {group.items.map((item) => (
                  <CommandItem key={item.href} onSelect={() => {setOpen((open) => !open)}}>
                    <CommandLink href={item.href}>
                      <item.icon />
                      <span>{item.label}</span>
                    </CommandLink>
                  </CommandItem>
                ))}
              </CommandGroup>
              <CommandSeparator />
            </React.Fragment>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  );
}

