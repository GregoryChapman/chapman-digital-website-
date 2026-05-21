import Container from "@/components/Container";
import Section from "@/components/Section";
import Card from "@/components/Card";
import Button from "@/components/Button";

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <Section className="py-20 bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-neutral-900 mb-6">
              Hi, I&apos;m <span className="text-gradient">Greg.</span>
            </h1>
            <p className="text-xl text-neutral-700 leading-relaxed">
              I build modern websites for small creators and small businesses — clean, professional work delivered fast, at prices that actually fit smaller clients.
            </p>
          </div>
        </Container>
      </Section>

      {/* My Story */}
      <Section background="gray" className="py-20">
        <Container>
          <div className="max-w-3xl mx-auto">
            <Card className="border-l-4 border-l-primary-500">
              <h2 className="text-3xl font-bold text-neutral-900 mb-6">
                A short version
              </h2>
              <div className="space-y-5 text-lg text-neutral-700 leading-relaxed">
                <p>
                  I spent 3+ years as a solutions engineer in the public sector — running enterprise demos and accelerators, designing systems for organizations where mistakes are expensive and the bar is high. Along the way I picked up six Salesforce certifications and a real feel for what enterprise-grade quality actually looks like.
                </p>
                <p>
                  I use modern tools — yes, including AI — to ship faster than traditional agencies. That&apos;s how I keep prices accessible for clients who aren&apos;t enterprise. The tools are the means. The work is the point.
                </p>
                <p>
                  I started Chapman Digital Services because the quality bar bigger companies expect shouldn&apos;t be locked behind agency retainers. Smaller creators and small businesses deserve the same craft — without paying enterprise rates or waiting in a months-long queue to get it.
                </p>
                <p>
                  If you&apos;re a creator with a growing brand, or a small business owner who wants a site you&apos;re actually proud to send people to, I&apos;d love to help.
                </p>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* How I Work */}
      <Section className="py-20">
        <Container>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-12 text-center">
              How I work
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card hover className="border-l-4 border-l-primary-500">
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">Built for shipping</h3>
                <p className="text-neutral-700 leading-relaxed">
                  Tight scope, weekly progress, real deliverables. Most sites are live in a couple of weeks.
                </p>
              </Card>
              <Card hover className="border-l-4 border-l-secondary-500">
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">Fixed scope, fixed price</h3>
                <p className="text-neutral-700 leading-relaxed">
                  We agree on what we&apos;re building before we start. No mystery invoices, no scope creep — you know exactly what you&apos;re getting.
                </p>
              </Card>
              <Card hover className="border-l-4 border-l-accent-500">
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">Direct, no agency layer</h3>
                <p className="text-neutral-700 leading-relaxed">
                  You talk to me. I do the work. No account managers, no handoffs, no telephone game between you and the person actually building.
                </p>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section background="gray" className="py-20">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              Let&apos;s build something.
            </h2>
            <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
              Tell me what you&apos;re working on. I&apos;ll come back with a realistic scope, timeline, and price — usually within a day.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Get in touch
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
