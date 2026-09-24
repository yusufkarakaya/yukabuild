"use client";

import { useState } from "react";
import { ArrowRightIcon, MenuIcon } from "lucide-react";
import { Logo } from "@/components/logo";
import { Container } from "@/components/panel";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cta, nav, site } from "@/content/site";

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-6">
        <a href="#top" aria-label={site.name}>
          <Logo />
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {nav.links.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button render={<a href="#contact" />} nativeButton={false} className="hidden h-9 px-4 md:inline-flex">
            {cta.letsBuild}
            <ArrowRightIcon data-icon="inline-end" />
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger render={<Button variant="outline" size="icon-lg" aria-label={nav.openMenu} className="md:hidden" />}>
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
                <Button size="cta" render={<a href="#contact" />} nativeButton={false} onClick={() => setOpen(false)}>
                  {cta.letsBuild}
                  <ArrowRightIcon data-icon="inline-end" />
                </Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  );
}
