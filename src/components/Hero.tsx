import { ArrowRightIcon } from "lucide-react";
import { CornerMarks } from "@/components/panel";
import { Rise } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { cta, hero, stack } from "@/content/site";

/**
 * Copy on the left, a terminal on the right. The terminal is the studio's
 * process told as a build log, ending on the block cursor from the logo. The
 * construction grid sits behind both.
 */
export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      <div aria-hidden className="bg-grid absolute inset-0 -z-10" />

      <div className="mx-auto grid min-h-[calc(100dvh-4rem)] max-w-6xl grid-cols-1 items-center gap-14 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:gap-10">
        <div className="flex flex-col items-start gap-7 lg:col-span-6">
          <Rise step={0}>
            <Badge variant="outline" className="h-6 gap-2 px-2.5 font-mono tracking-wide">
              <span aria-hidden className="size-1.5 bg-primary" />
              {hero.eyebrow}
            </Badge>
          </Rise>

          <Rise step={1}>
            <h1 className="max-w-[13ch] font-heading text-5xl leading-[0.95] font-semibold tracking-tighter text-balance sm:text-6xl lg:text-7xl">
              {hero.headline}
            </h1>
          </Rise>

          <Rise step={2}>
            <p className="max-w-[44ch] text-lg leading-relaxed text-muted-foreground">{hero.subtext}</p>
          </Rise>

          <Rise step={3} className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Button size="lg" render={<a href="#contact" />} nativeButton={false} className="h-11 px-5 text-base">
              {cta.contact}
              <ArrowRightIcon data-icon="inline-end" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              render={<a href="#work" />}
              nativeButton={false}
              className="h-11 px-5 text-base"
            >
              {cta.work}
            </Button>
          </Rise>
        </div>

        <Rise step={4} className="w-full lg:col-span-6">
          <Card className="relative gap-0 py-0 font-mono text-sm shadow-2xl shadow-black/20">
            <CardHeader className="flex items-center gap-3 border-b py-3">
              <span aria-hidden className="flex gap-1.5">
                <span className="size-2.5 rounded-full bg-foreground/15" />
                <span className="size-2.5 rounded-full bg-foreground/15" />
                <span className="size-2.5 rounded-full bg-foreground/15" />
              </span>
              <span className="text-xs text-muted-foreground">{hero.terminal.title}</span>
            </CardHeader>

            <CardContent className="relative flex flex-col gap-4 py-6 sm:py-8">
              <CornerMarks />
              <p className="px-2">
                <span aria-hidden className="text-primary">
                  ${" "}
                </span>
                {hero.terminal.command}
              </p>
              <ol className="flex flex-col gap-2.5 px-2">
                {hero.terminal.lines.map((line) => (
                  <li key={line.label} className="grid grid-cols-[1.25rem_4.5rem_1fr] items-baseline gap-2">
                    <span aria-hidden className="text-primary">
                      ✓
                    </span>
                    <span className="text-foreground">{line.label}</span>
                    <span className="text-muted-foreground">{line.value}</span>
                  </li>
                ))}
              </ol>
              <p className="flex items-center gap-2 px-2 text-muted-foreground">
                <span aria-hidden className="text-primary">
                  ${" "}
                </span>
                {hero.terminal.status}
                <span aria-hidden className="cursor inline-block h-4 w-2 bg-primary" />
              </p>
            </CardContent>

            <CardFooter className="flex-col items-start gap-3 bg-muted/40 py-4">
              <p className="text-[0.7rem] tracking-widest text-muted-foreground uppercase">{hero.stackLabel}</p>
              <ul className="flex flex-wrap gap-1.5">
                {stack.map((item) => (
                  <li key={item}>
                    <Badge variant="outline" className="rounded-sm font-mono">
                      {item}
                    </Badge>
                  </li>
                ))}
              </ul>
            </CardFooter>
          </Card>
        </Rise>
      </div>
    </section>
  );
}
