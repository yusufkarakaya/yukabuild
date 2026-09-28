"use client";

import { useState, type FormEvent } from "react";
import { ArrowRightIcon, CheckIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Field, FieldError, FieldGroup, FieldLabel, FieldLegend, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { Textarea } from "@/components/ui/textarea";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { cta, projectForm, site } from "@/content/site";

/**
 * FormSubmit takes a JSON POST straight from the browser and forwards it to
 * the inbox in the URL, so the static export needs no backend and no account.
 * The first submission sends that inbox an activation email; nothing is
 * delivered, and the form shows its error state, until it is confirmed.
 */
const ENDPOINT = `https://formsubmit.co/ajax/${site.email}`;

type Draft = { name: string; email: string; kind: string[]; budget: string[]; message: string };
type Errors = Partial<Record<"name" | "email" | "message", string>>;
type Status = "idle" | "sending" | "sent" | "failed";

const emptyDraft: Draft = { name: "", email: "", kind: [], budget: [], message: "" };
const { fields, errors: copy } = projectForm;

function validate(draft: Draft): Errors {
  const errors: Errors = {};
  if (!draft.name.trim()) errors.name = copy.name;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(draft.email.trim())) errors.email = copy.email;
  if (!draft.message.trim()) errors.message = copy.message;
  return errors;
}

/** A chip row for one question. Selected chips take the blue signal colour. */
function Choices({
  legend,
  options,
  value,
  multiple,
  onChange,
}: {
  legend: string;
  options: readonly string[];
  value: string[];
  multiple?: boolean;
  onChange: (value: string[]) => void;
}) {
  return (
    <FieldSet className="gap-3">
      <FieldLegend variant="label" className="mb-0 flex items-baseline gap-2">
        {legend}
        <span className="font-normal text-muted-foreground">{projectForm.optional}</span>
      </FieldLegend>
      <ToggleGroup multiple={multiple} value={value} onValueChange={onChange} variant="outline" className="flex-wrap">
        {options.map((option) => (
          <ToggleGroupItem
            key={option}
            value={option}
            className="h-9 px-3.5 aria-pressed:border-blue aria-pressed:bg-accent aria-pressed:text-blue"
          >
            {option}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </FieldSet>
  );
}

/**
 * The "Start a Project" button and the brief it opens. The draft lives here,
 * outside the dialog, so closing the dialog by accident does not lose it.
 */
export function StartProject({ className }: { className?: string }) {
  const [draft, setDraft] = useState<Draft>(emptyDraft);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  const set = <K extends keyof Draft>(key: K, value: Draft[K]) => {
    setDraft((current) => ({ ...current, [key]: value }));
    if (key in errors) setErrors((current) => ({ ...current, [key]: undefined }));
  };

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const found = validate(draft);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setStatus("sending");
    try {
      const form = new FormData(event.currentTarget);
      const response = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `New project: ${draft.name.trim()}`,
          _template: "table",
          _captcha: "false",
          name: draft.name.trim(),
          email: draft.email.trim(),
          kind: draft.kind.join(", ") || "—",
          budget: draft.budget[0] ?? "—",
          message: draft.message.trim(),
          _honey: form.get("_honey") ?? "",
        }),
      });
      // `success` comes back as the string "true" or "false".
      const result: { success?: string | boolean; message?: string } = await response.json();
      if (!response.ok || String(result.success) !== "true") {
        throw new Error(`FormSubmit rejected the submission: ${result.message ?? response.status}`);
      }
      setStatus("sent");
      setDraft(emptyDraft);
    } catch (error) {
      console.error(error);
      setStatus("failed");
    }
  }

  const sending = status === "sending";

  return (
    <Dialog
      onOpenChangeComplete={(open) => {
        // Start the next visit on a fresh form once the success screen is gone.
        if (!open && status === "sent") setStatus("idle");
      }}
    >
      <DialogTrigger render={<Button size="cta" className={className} />}>
        {cta.startProject}
        <ArrowRightIcon data-icon="inline-end" />
      </DialogTrigger>
      <DialogContent className="max-h-[calc(100dvh-2rem)] gap-0 overflow-y-auto rounded-2xl p-0 sm:max-w-xl">
        {status === "sent" ? (
          <div className="flex flex-col items-start gap-6 p-8 sm:p-10">
            <span className="flex size-12 items-center justify-center rounded-full bg-accent text-blue">
              <CheckIcon aria-hidden className="size-6" />
            </span>
            <DialogHeader className="gap-3">
              <DialogTitle className="text-3xl font-semibold tracking-[-0.03em]">{projectForm.success.title}</DialogTitle>
              <DialogDescription className="text-base leading-relaxed">{projectForm.success.body}</DialogDescription>
            </DialogHeader>
            <DialogClose render={<Button variant="outline" size="cta" />}>{projectForm.success.close}</DialogClose>
          </div>
        ) : (
          <>
            <DialogHeader className="gap-3 border-b border-border p-8 pb-6 sm:p-10 sm:pb-8">
              <p className="flex items-center gap-3 font-mono text-[13px] tracking-widest text-blue uppercase">
                <span aria-hidden className="h-px w-6 bg-current" />
                {projectForm.eyebrow}
              </p>
              <DialogTitle className="text-3xl leading-tight font-semibold tracking-[-0.03em] text-balance">
                {projectForm.title}
              </DialogTitle>
              <DialogDescription className="text-base leading-relaxed">{projectForm.description}</DialogDescription>
            </DialogHeader>

            <form noValidate onSubmit={submit} className="flex flex-col gap-8 p-8 sm:p-10">
              <FieldGroup className="gap-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <Field data-invalid={!!errors.name}>
                    <FieldLabel htmlFor="project-name">{fields.name.label}</FieldLabel>
                    <Input
                      id="project-name"
                      autoComplete="name"
                      placeholder={fields.name.placeholder}
                      value={draft.name}
                      onChange={(event) => set("name", event.target.value)}
                      aria-invalid={!!errors.name}
                      className="h-11 px-3.5"
                    />
                    <FieldError>{errors.name}</FieldError>
                  </Field>
                  <Field data-invalid={!!errors.email}>
                    <FieldLabel htmlFor="project-email">{fields.email.label}</FieldLabel>
                    <Input
                      id="project-email"
                      type="email"
                      autoComplete="email"
                      placeholder={fields.email.placeholder}
                      value={draft.email}
                      onChange={(event) => set("email", event.target.value)}
                      aria-invalid={!!errors.email}
                      className="h-11 px-3.5"
                    />
                    <FieldError>{errors.email}</FieldError>
                  </Field>
                </div>

                <Choices legend={fields.kind.label} options={fields.kind.options} value={draft.kind} multiple onChange={(value) => set("kind", value)} />
                <Choices legend={fields.budget.label} options={fields.budget.options} value={draft.budget} onChange={(value) => set("budget", value)} />

                <Field data-invalid={!!errors.message}>
                  <FieldLabel htmlFor="project-message">{fields.message.label}</FieldLabel>
                  <Textarea
                    id="project-message"
                    placeholder={fields.message.placeholder}
                    value={draft.message}
                    onChange={(event) => set("message", event.target.value)}
                    aria-invalid={!!errors.message}
                    className="min-h-32 px-3.5 py-3"
                  />
                  <FieldError>{errors.message}</FieldError>
                </Field>

                {/* Honeypot: hidden from people, filled in by bots, dropped by FormSubmit. */}
                <input type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />
              </FieldGroup>

              {status === "failed" ? (
                <p role="alert" className="text-sm text-destructive">
                  {copy.send}{" "}
                  <a href={`mailto:${site.email}`} className="font-medium underline underline-offset-4">
                    {site.email}
                  </a>
                  .
                </p>
              ) : null}

              <div className="flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-muted-foreground">
                  {projectForm.emailLabel}{" "}
                  <a href={`mailto:${site.email}`} className="font-medium text-foreground underline decoration-foreground/20 underline-offset-4 hover:decoration-foreground">
                    {site.email}
                  </a>
                </p>
                <Button type="submit" size="cta" disabled={sending} className={cn(sending && "disabled:opacity-80")}>
                  {sending ? <Spinner data-icon="inline-start" /> : null}
                  {sending ? projectForm.sending : projectForm.submit}
                  {sending ? null : <ArrowRightIcon data-icon="inline-end" />}
                </Button>
              </div>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
