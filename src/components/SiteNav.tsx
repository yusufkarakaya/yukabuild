"use client";

import { useState } from "react";
import { MenuIcon } from "lucide-react";
import { Logo } from "@/components/logo";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cta, nav, site } from "@/content/site";

function Wordmark() {
  return (
    <a href="#top" aria-label={site.name}>
      <Logo />
    </a>
  );
}

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-4 sm:px-6">
        <Wordmark />

        <NavigationMenu className="hidden lg:flex" aria-label="Primary">
          <NavigationMenuList>
            {nav.links.map((link) => (
              <NavigationMenuItem key={link.href}>
                <NavigationMenuLink href={link.href} className="px-3 font-mono text-xs tracking-widest text-muted-foreground uppercase hover:text-foreground">
                  {link.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-2">
          <ModeToggle />
          <Button render={<a href="#contact" />} nativeButton={false} className="hidden lg:inline-flex">
            {cta.contact}
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger render={<Button variant="outline" size="icon" aria-label={nav.openMenu} className="lg:hidden" />}>
              <MenuIcon />
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>{nav.menuTitle}</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 px-2" aria-label="Primary">
                {nav.links.map((link) => (
                  <Button
                    key={link.href}
                    variant="ghost"
                    size="lg"
                    className="justify-start text-base"
                    render={<a href={link.href} />}
                    nativeButton={false}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Button>
                ))}
              </nav>
              <SheetFooter>
                <Separator />
                <Button size="lg" render={<a href="#contact" />} nativeButton={false} onClick={() => setOpen(false)}>
                  {cta.contact}
                </Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
