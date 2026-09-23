import { MailIcon } from "lucide-react";
import { brandIcons } from "@/components/brand-icons";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { contact, sections, site, social } from "@/content/site";

/**
 * Headline, direct email and socials on the left, the form on the right.
 */
export function Contact() {
  return (
    <section id="contact" className="relative isolate overflow-hidden border-t bg-muted/30">
      <div aria-hidden className="bg-grid absolute inset-0 -z-10" />
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-4 py-24 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:py-32">
        <Reveal className="flex flex-col items-start gap-8 lg:col-span-5">
          <SectionHeading eyebrow={sections.contact} title={contact.headline} description={contact.body} />

          <Button variant="link" render={<a href={`mailto:${site.email}`} />} nativeButton={false} className="h-auto px-0 font-mono text-base has-data-[icon=inline-start]:pl-0">
            <MailIcon data-icon="inline-start" />
            {site.email}
          </Button>

          <div className="flex flex-col gap-3">
            <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">{social.label}</p>
            <ul className="flex flex-wrap gap-2">
              {social.links.map((link) => {
                const Icon = brandIcons[link.icon];
                return (
                  <li key={link.icon}>
                    <Tooltip>
                      <TooltipTrigger
                        render={
                          <Button
                            variant="outline"
                            size="icon-lg"
                            render={<a href={link.href} aria-label={link.label} />}
                            nativeButton={false}
                          />
                        }
                      >
                        <Icon />
                      </TooltipTrigger>
                      <TooltipContent>{link.label}</TooltipContent>
                    </Tooltip>
                  </li>
                );
              })}
            </ul>
          </div>
        </Reveal>

        <Reveal className="lg:col-span-7">
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
