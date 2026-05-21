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
              I build modern websites and AI-powered tools for creators and small businesses — fast, professional work that smaller players usually can&apos;t access at this price.
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
                  I spent years as a solutions engineer in the public sector, designing systems for organizations where mistakes are expensive and the bar is high. Along the way I picked up six Salesforce certifications and a real appreciation for what enterprise-grade quality actually looks like.
                </p>
                <p>
                  Then AI changed the math. I started using AI tools natively — not as a gimmick, but as the core of how I work — and realized I could ship things in days that used to take agencies months. That gap is why Chapman Digital Services exists.
                </p>
                <p>
                  Big companies already have access to all this. They&apos;re moving faster, building smarter, and getting better outcomes because of it. I started CDS so smaller creators and small businesses could get the same advantage — without the agency price tag and without waiting in a months-long queue.
                </p>
                <p>
                  If you&apos;re a creator with a growing brand, or a small business owner who&apos;d rather work smarter than work more, I&apos;d love to help.
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
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">AI-native, end-to-end</h3>
                <p className="text-neutral-700 leading-relaxed">
                  AI is in the loop for design, build, and iteration. That&apos;s how I move fast without cutting corners on quality.
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
                  You talk to me. I do the work. No account managers, no handoffs, no game of telephone between you and the person actually building.
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
