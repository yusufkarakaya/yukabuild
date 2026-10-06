"use client";

import { useEffect, useState } from "react";
import { MenuIcon } from "lucide-react";
import { Logo } from "@/components/logo";
import { Container } from "@/components/panel";
import { StartProject } from "@/components/StartProject";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { nav, site } from "@/content/site";

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  // Slide away on scroll down, come back on scroll up. Small jitters are ignored
  // by measuring from where the scroll direction last changed.
  useEffect(() => {
    let anchor = window.scrollY;
    let last = anchor;
    let frame = 0;

    const update = () => {
      frame = 0;
      const y = window.scrollY;
      if (y > last !== last > anchor) anchor = last;
      last = y;

      if (y < 64) setHidden(false);
      else if (y - anchor > 6) setHidden(true);
      else if (anchor - y > 6) setHidden(false);
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      {/* Soft fade under the top edge; its opacity follows the scroll in CSS. */}
      <div aria-hidden className="scroll-veil" />
      <header
        data-hidden={(hidden && !open) || undefined}
        className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-md transition-transform duration-500 ease-(--ease-out) will-change-transform motion-safe:data-hidden:not-focus-within:-translate-y-full"
      >
        <Container className="flex h-16 items-center justify-between gap-6">
          <a href="#top" aria-label={site.name}>
            <Logo />
          </a>

          <div className="flex items-center gap-8">
            <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
              {nav.links.map((link) => (
                <a key={link.href} href={link.href} className="text-sm font-semibold text-foreground transition-colors hover:text-blue">
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <StartProject size="lg" className="hidden h-9 px-4 font-semibold md:inline-flex" />

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
                    <StartProject />
                  </SheetFooter>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </Container>
      </header>
    </>
  );
}
