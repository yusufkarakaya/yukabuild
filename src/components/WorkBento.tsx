import Image from "next/image";
import { ArrowUpRightIcon } from "lucide-react";
import { LogoMark } from "@/components/logo";
import { Panel } from "@/components/panel";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { sections, work, type Project } from "@/content/site";

/**
 * The studio's own products. A shipped product gets a wide, image-led panel
 * with a cropped phone screenshot. One still in build gets the scaffold
 * hatching and the logo mark instead of an icon it does not have yet.
 */
export function WorkBento() {
  return (
    <section id="work" className="border-y bg-muted/30">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-24 sm:px-6 lg:py-28">
        <Reveal>
          <SectionHeading eyebrow={sections.work} title={work.headline} description={work.intro} />
        </Reveal>

        <ul className="grid grid-cols-1 gap-4 lg:grid-cols-12">
          {work.projects.map((project: Project, index) => {
            const shipped = project.links.length > 0;
            return (
              <li key={project.id} className={cn("flex", shipped ? "lg:col-span-8" : "lg:col-span-4")}>
                <Reveal className="flex w-full">
                  <Panel
                    index={String(index + 1).padStart(2, "0")}
                    label={shipped ? project.tags.join(" / ") : work.inBuild}
                    className={cn(
                      "w-full pt-5 [--card-spacing:--spacing(6)]",
                      shipped ? "pb-0" : "scaffold min-h-80",
                    )}
                  >
                    <div className={cn("grid flex-1 grid-cols-1 gap-6", shipped && "sm:grid-cols-[1fr_14rem]")}>
                      <div className={cn("flex flex-col gap-6", shipped && "sm:pb-6")}>
                        <CardHeader className="gap-4">
                          {project.logo ? (
                            <Image
                              src={project.logo.src}
                              alt={project.logo.alt}
                              width={56}
                              height={56}
                              className="size-14 rounded-xl ring-1 ring-border"
                            />
                          ) : (
                            <span className="flex size-14 items-center justify-center rounded-xl bg-background ring-1 ring-border">
                              <LogoMark className="size-8 text-muted-foreground" />
                            </span>
                          )}
                          <CardTitle className="text-2xl font-semibold tracking-tight">{project.name}</CardTitle>
                          <CardDescription className="max-w-[40ch] text-base leading-relaxed">{project.summary}</CardDescription>
                        </CardHeader>

                        {shipped ? (
                          <CardFooter className="mt-auto flex-wrap gap-2 border-t-0 bg-transparent py-0">
                            {project.links.map((link) => (
                              <Button
                                key={link.href}
                                variant="outline"
                                size="sm"
                                render={<a href={link.href} target="_blank" rel="noreferrer" />}
                                nativeButton={false}
                              >
                                {link.label}
                                <ArrowUpRightIcon data-icon="inline-end" />
                              </Button>
                            ))}
                          </CardFooter>
                        ) : (
                          <div className="mt-auto px-(--card-spacing)">
                            <Badge variant="outline" className="gap-2 rounded-sm bg-background font-mono">
                              <span aria-hidden className="cursor size-1.5 bg-primary" />
                              {work.inBuild}
                            </Badge>
                          </div>
                        )}
                      </div>

                      {shipped && project.media ? (
                        // The phone sits on the grid and runs off the bottom edge
                        // of the panel, so only the top of the screen shows.
                        <div className="relative mx-(--card-spacing) h-72 overflow-hidden sm:mx-0 sm:mr-(--card-spacing) sm:h-full sm:min-h-80">
                          <div aria-hidden className="bg-grid absolute inset-0" />
                          <div className="absolute inset-x-4 top-4 overflow-hidden rounded-t-[1.75rem] border-x-[6px] border-t-[6px] border-foreground/90 bg-background shadow-2xl">
                            <Image
                              src={project.media.src}
                              alt={project.media.alt}
                              width={project.media.width}
                              height={project.media.height}
                              sizes="(max-width: 640px) 80vw, 14rem"
                              className="h-auto w-full"
                            />
                          </div>
                        </div>
                      ) : null}
                    </div>
                  </Panel>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
