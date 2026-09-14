"use client";

import { FormEvent, useState } from "react";
import { Container, Heading, ScrollReveal, Section } from "@/components/ui";
import { businessInfo } from "@/data/business";
import { useLanguage } from "@/lib/LanguageContext";

type RequestForm = {
  name: string;
  contact: string;
  request: string;
};

const initialForm: RequestForm = {
  name: "",
  contact: "",
  request: "",
};

export function SpecialRequest() {
  const { t } = useLanguage();
  const [form, setForm] = useState<RequestForm>(initialForm);

  const phoneDigits = businessInfo.phone.replace(/\D/g, "");
  const phoneHref = `+1${phoneDigits}`;

  const messageBody = [
    `${t.specialRequestName}: ${form.name}`,
    `${t.specialRequestContact}: ${form.contact}`,
    "",
    `${t.specialRequestDetails}:`,
    form.request,
  ].join("\n");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const submitter = (event.nativeEvent as SubmitEvent).submitter as HTMLButtonElement | null;
    const method = submitter?.value ?? "email";

    if (method === "text") {
      window.location.href = `sms:${phoneHref}?body=${encodeURIComponent(messageBody)}`;
      return;
    }

    window.location.href = `mailto:${businessInfo.email}?subject=${encodeURIComponent(
      t.specialRequestEmailSubject,
    )}&body=${encodeURIComponent(messageBody)}`;
  };

  return (
    <Section variant="default" padding="xl">
      <Container>
        <div className="overflow-hidden rounded-2xl border border-primary-200 bg-cream shadow-xl shadow-primary-900/10">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
            <ScrollReveal className="relative overflow-hidden bg-primary-700 px-6 py-10 text-cream sm:px-10 md:py-14 lg:px-12">
              <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_18%_15%,var(--color-secondary-300)_0,transparent_32%),radial-gradient(circle_at_85%_85%,var(--color-primary-300)_0,transparent_34%)]" aria-hidden="true" />
              <div className="relative">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-secondary-300">
                  {t.specialRequestEyebrow}
                </p>
                <Heading as="h2" size="xl" className="text-cream">
                  {t.specialRequestTitle}
                </Heading>
                <p className="mt-5 text-lg leading-relaxed text-cream/80">
                  {t.specialRequestDescription}
                </p>
                <p className="mt-6 border-l-2 border-secondary-300 pl-4 text-base font-semibold leading-relaxed text-cream">
                  {t.specialRequestNoFee}
                </p>

                <div className="mt-10 border-t border-cream/20 pt-6">
                  <p className="text-base text-cream/80">
                    {t.specialRequestDirectContact}{" "}
                    <a className="font-semibold text-cream underline decoration-secondary-300 underline-offset-4 hover:text-secondary-200" href={`tel:${phoneHref}`}>
                      (209) 449-6585
                    </a>
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100} className="px-6 py-10 sm:px-10 md:py-14 lg:px-12">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="special-request-name" className="mb-2 block text-sm font-semibold text-charcoal">
                      {t.specialRequestName}
                    </label>
                    <input
                      id="special-request-name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      value={form.name}
                      onChange={(event) => setForm({ ...form, name: event.target.value })}
                      placeholder={t.specialRequestNamePlaceholder}
                      className="w-full rounded-sm border border-secondary-300 bg-background px-4 py-3 text-base text-charcoal placeholder:text-charcoal-light/60 focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="special-request-contact" className="mb-2 block text-sm font-semibold text-charcoal">
                      {t.specialRequestContact}
                    </label>
                    <input
                      id="special-request-contact"
                      name="contact"
                      type="text"
                      required
                      value={form.contact}
                      onChange={(event) => setForm({ ...form, contact: event.target.value })}
                      placeholder={t.specialRequestContactPlaceholder}
                      className="w-full rounded-sm border border-secondary-300 bg-background px-4 py-3 text-base text-charcoal placeholder:text-charcoal-light/60 focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="special-request-details" className="mb-2 block text-sm font-semibold text-charcoal">
                    {t.specialRequestDetails}
                  </label>
                  <textarea
                    id="special-request-details"
                    name="request"
                    required
                    rows={5}
                    value={form.request}
                    onChange={(event) => setForm({ ...form, request: event.target.value })}
                    placeholder={t.specialRequestDetailsPlaceholder}
                    className="w-full resize-y rounded-sm border border-secondary-300 bg-background px-4 py-3 text-base text-charcoal placeholder:text-charcoal-light/60 focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
                  />
                </div>

                <fieldset>
                  <legend className="mb-3 text-sm font-semibold text-charcoal">
                    {t.specialRequestChooseMethod}
                  </legend>
                  <div className="grid gap-3 sm:grid-cols-3">
                    <button
                      type="submit"
                      name="method"
                      value="email"
                      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm bg-primary-600 px-4 py-3 text-base font-semibold text-cream transition hover:bg-primary-700"
                    >
                      <span aria-hidden="true">✉</span>
                      {t.specialRequestEmail}
                    </button>
                    <button
                      type="submit"
                      name="method"
                      value="text"
                      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm border-2 border-primary-600 px-4 py-3 text-base font-semibold text-primary-700 transition hover:bg-primary-50"
                    >
                      <span aria-hidden="true">▣</span>
                      {t.specialRequestText}
                    </button>
                    <a
                      href={`tel:${phoneHref}`}
                      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm border-2 border-primary-600 px-4 py-3 text-base font-semibold text-primary-700 transition hover:bg-primary-50"
                    >
                      <span aria-hidden="true">☎</span>
                      {t.specialRequestCall}
                    </a>
                  </div>
                </fieldset>
                <p className="text-sm leading-relaxed text-charcoal-light">
                  {t.specialRequestOpensApp}
                </p>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
