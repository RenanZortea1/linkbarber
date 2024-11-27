"use client";

import * as React from "react";
import {
  Calculator,
  Calendar,
  CreditCard,
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
  CommandShortcut,
} from "@/components/ui/command";
import CommandLink from "@/components/commandLink"; // Import CommandLink

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
      <p className="absolute bottom-0 right-0 p-6 text-sm text-muted-foreground">
        Press{" "}
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">⌘</span>J
        </kbd>
      </p>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>
              <CommandLink href="/schedule">
                <Calendar />
                <span>Calendario</span>
              </CommandLink>
            </CommandItem>
            <CommandItem>
              <CommandLink href="/emoji">
                <Smile />
                <span>Search Emoji</span>
              </CommandLink>
            </CommandItem>
            <CommandItem>
              <CommandLink href="/calculator">
                <Calculator />
                <span>Calculator</span>
              </CommandLink>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem>
              <CommandLink href="/profile">
                <User />
                <span>Profile</span>
              </CommandLink>
            </CommandItem>
            <CommandItem>
              <CommandLink href="/billing">
                <CreditCard />
                <span>Billing</span>
              </CommandLink>
            </CommandItem>
            <CommandItem>
              <CommandLink href="/settings">
                <Settings />
                <span>Settings</span>
              </CommandLink>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}

