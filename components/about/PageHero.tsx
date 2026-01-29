import { Container, Heading } from "@/components/ui";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

export function PageHero({ title, subtitle, backgroundImage }: PageHeroProps) {
  return (
    <section className="relative pt-40 pb-20 md:pt-48 md:pb-28 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: backgroundImage
            ? `linear-gradient(
                to bottom,
                rgba(24, 28, 20, 0.7) 0%,
                rgba(24, 28, 20, 0.8) 100%
              ), url('${backgroundImage}')`
            : undefined,
          backgroundColor: "var(--color-primary-700)",
        }}
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <div className="max-w-3xl">
          <Heading as="h1" size="2xl" className="text-cream mb-4 animate-fade-in-up">
            {title}
          </Heading>
          {subtitle && (
            <p className="text-cream/80 text-lg md:text-xl animate-fade-in-up delay-100">
              {subtitle}
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}
