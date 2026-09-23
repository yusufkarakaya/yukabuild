"use client";

import { useState, type FormEvent } from "react";
import { AlertCircleIcon, CheckCircle2Icon, SendIcon } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Panel } from "@/components/panel";
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Spinner } from "@/components/ui/spinner";
import { Textarea } from "@/components/ui/textarea";
import { contact, site } from "@/content/site";

type Status = "idle" | "submitting" | "success" | "error";
type Errors = Partial<Record<"name" | "email" | "message", string>>;

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});

  // An error next to a field the reader has already fixed is worse than no
  // error at all, so each message clears as soon as that field is edited.
  function clearError(key: keyof Errors) {
    setErrors((current) => {
      if (!current[key]) return current;
      const next = { ...current };
      delete next[key];
      return next;
    });
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const next: Errors = {};
    if (!name) next.name = contact.errors.name;
    if (!email) next.email = contact.errors.email;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = contact.errors.emailFormat;
    if (!message) next.message = contact.errors.message;

    setErrors(next);
    if (Object.keys(next).length > 0) return;

    const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;
    setStatus("submitting");

    try {
      // With no endpoint configured this throws on purpose, so a missing key
      // surfaces as a visible error instead of a form that silently does nothing.
      if (!endpoint) throw new Error("NEXT_PUBLIC_FORM_ENDPOINT is not set");

      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(Object.fromEntries(data)),
      });
      if (!response.ok) throw new Error(`Request failed with ${response.status}`);

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <Panel className="items-center py-10 text-center">
        <CardHeader className="w-full justify-items-center gap-3">
          <CheckCircle2Icon className="size-8 text-primary" aria-hidden />
          <CardTitle className="text-2xl font-bold">{contact.success.title}</CardTitle>
          <CardDescription className="max-w-[42ch] text-base">{contact.success.body}</CardDescription>
        </CardHeader>
        <CardContent>
          <Button variant="outline" onClick={() => setStatus("idle")}>
            {contact.success.again}
          </Button>
        </CardContent>
      </Panel>
    );
  }

  const submitting = status === "submitting";

  return (
    <Panel
      label={
        <>
          <span aria-hidden className="text-primary">
            {">"}{" "}
          </span>
          {contact.formTitle}
        </>
      }
      className="pt-5 [--card-spacing:--spacing(6)]"
    >
      <form onSubmit={onSubmit} noValidate className="flex flex-col gap-(--card-spacing)">
        <CardContent>
          <FieldGroup>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Field data-invalid={Boolean(errors.name) || undefined}>
                {/* Label above the input. The placeholder is an example, never the label. */}
                <FieldLabel htmlFor="name">{contact.fields.name.label}</FieldLabel>
                <Input
                  id="name"
                  name="name"
                  autoComplete="name"
                  placeholder={contact.fields.name.placeholder}
                  onInput={() => clearError("name")}
                  aria-invalid={Boolean(errors.name) || undefined}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                <FieldError id="name-error">{errors.name}</FieldError>
              </Field>

              <Field data-invalid={Boolean(errors.email) || undefined}>
                <FieldLabel htmlFor="email">{contact.fields.email.label}</FieldLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder={contact.fields.email.placeholder}
                  onInput={() => clearError("email")}
                  aria-invalid={Boolean(errors.email) || undefined}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                <FieldError id="email-error">{errors.email}</FieldError>
              </Field>
            </div>

            <Field>
              <FieldLabel htmlFor="kind">{contact.fields.kind.label}</FieldLabel>
              <Select name="kind" items={contact.kinds} defaultValue={contact.kinds[0].value}>
                <SelectTrigger id="kind" className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {contact.kinds.map((kind) => (
                      <SelectItem key={kind.value} value={kind.value}>
                        {kind.label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </Field>

            <Field data-invalid={Boolean(errors.message) || undefined}>
              <FieldLabel htmlFor="message">{contact.fields.message.label}</FieldLabel>
              <Textarea
                id="message"
                name="message"
                rows={5}
                placeholder={contact.fields.message.placeholder}
                onInput={() => clearError("message")}
                aria-invalid={Boolean(errors.message) || undefined}
                aria-describedby={errors.message ? "message-error" : "message-hint"}
                className="min-h-32 resize-y"
              />
              {errors.message ? (
                <FieldError id="message-error">{errors.message}</FieldError>
              ) : (
                <FieldDescription id="message-hint">{contact.fields.message.hint}</FieldDescription>
              )}
            </Field>

            {status === "error" ? (
              <Alert variant="destructive">
                <AlertCircleIcon />
                <AlertDescription>
                  <p>
                    {contact.errors.network} <a href={`mailto:${site.email}`}>{site.email}</a>
                  </p>
                </AlertDescription>
              </Alert>
            ) : null}
          </FieldGroup>
        </CardContent>

        <CardFooter className="justify-end bg-transparent">
          <Button type="submit" size="lg" disabled={submitting} className="w-full sm:w-auto">
            {submitting ? <Spinner data-icon="inline-start" /> : <SendIcon data-icon="inline-start" />}
            {submitting ? contact.submitting : contact.submit}
          </Button>
        </CardFooter>
      </form>
    </Panel>
  );
}
