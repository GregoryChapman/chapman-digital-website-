import type { Metadata } from "next";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Button from "@/components/Button";

// Next.js adds noindex to 404 responses on its own.
export const metadata: Metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <Section className="py-24">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">This page doesn&apos;t exist.</h1>
          <p className="text-xl text-neutral-700 mb-10 leading-relaxed">
            The link may be old or mistyped. Here&apos;s where you probably wanted to go.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/projects" variant="primary" size="lg">
              See the work
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Get in touch
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
