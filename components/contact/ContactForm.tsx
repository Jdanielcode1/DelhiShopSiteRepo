"use client";

import { useState, FormEvent } from "react";
import { Button, Heading } from "@/components/ui";
import { useLanguage } from "@/lib/LanguageContext";
import { cn } from "@/lib/utils";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

type FormStatus = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setStatus("success");

    // Reset form after success
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  if (status === "success") {
    return (
      <div className="bg-primary-50 border border-primary-200 rounded-sm p-8 text-center">
        <svg
          className="w-12 h-12 text-primary-600 mx-auto mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <Heading as="h3" size="md" className="text-charcoal mb-2">
          {t.messageSent}
        </Heading>
        <p className="text-charcoal-light mb-4">
          {t.thankYou}
        </p>
        <Button variant="ghost" onClick={() => setStatus("idle")}>
          {t.sendAnother}
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-charcoal mb-2"
        >
          {t.name} <span className="text-accent">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className={cn(
            "w-full px-4 py-3 rounded-sm border border-secondary-300",
            "bg-cream focus:border-primary-500 focus:ring-1 focus:ring-primary-500",
            "transition-colors duration-200",
            "placeholder:text-charcoal-light/50"
          )}
          placeholder={t.yourName}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-charcoal mb-2"
          >
            {t.email} <span className="text-accent">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className={cn(
              "w-full px-4 py-3 rounded-sm border border-secondary-300",
              "bg-cream focus:border-primary-500 focus:ring-1 focus:ring-primary-500",
              "transition-colors duration-200",
              "placeholder:text-charcoal-light/50"
            )}
            placeholder={t.emailPlaceholder}
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-charcoal mb-2"
          >
            {t.phone}
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={cn(
              "w-full px-4 py-3 rounded-sm border border-secondary-300",
              "bg-cream focus:border-primary-500 focus:ring-1 focus:ring-primary-500",
              "transition-colors duration-200",
              "placeholder:text-charcoal-light/50"
            )}
            placeholder={t.phonePlaceholder}
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-charcoal mb-2"
        >
          {t.message} <span className="text-accent">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className={cn(
            "w-full px-4 py-3 rounded-sm border border-secondary-300",
            "bg-cream focus:border-primary-500 focus:ring-1 focus:ring-primary-500",
            "transition-colors duration-200 resize-none",
            "placeholder:text-charcoal-light/50"
          )}
          placeholder={t.messagePlaceholder}
        />
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={status === "submitting"}
        className="w-full sm:w-auto"
      >
        {status === "submitting" ? t.sending : t.sendMessageBtn}
      </Button>
    </form>
  );
}
