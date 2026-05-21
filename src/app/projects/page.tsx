import Container from "@/components/Container";
import Section from "@/components/Section";
import Card from "@/components/Card";
import Button from "@/components/Button";

export default function Projects() {
  return (
    <>
      {/* Hero Section */}
      <Section className="py-20">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-neutral-900 mb-6">
              Recent work
            </h1>
            <p className="text-xl text-neutral-700 leading-relaxed">
              Sites and systems I&apos;ve built for creators and small businesses.
            </p>
          </div>
        </Container>
      </Section>

      {/* Featured Project */}
      <Section background="gray" className="py-20">
        <Container>
          <div className="max-w-6xl mx-auto">
            <p className="text-sm uppercase tracking-widest text-primary-600 font-semibold mb-3 text-center">
              Featured project
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-10 text-center">
              bellalamanna.ca
            </h2>

            <Card className="overflow-hidden p-0 border-l-4 border-l-primary-500">
              <div className="grid grid-cols-1 md:grid-cols-5">
                <div className="md:col-span-2 min-h-[260px] bg-gradient-to-br from-[#0B1F33] via-[#1C3A52] to-[#5BA8BD] flex items-center justify-center p-8">
                  <div className="text-center">
                    <p className="text-white/70 text-sm uppercase tracking-widest mb-2">Creator site</p>
                    <p className="text-white text-3xl font-semibold">Bella Lamanna</p>
                    <p className="text-white/80 mt-2">bellalamanna.ca</p>
                  </div>
                </div>
                <div className="md:col-span-3 p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded">
                      Creator site
                    </span>
                    <span className="px-2 py-1 bg-neutral-100 text-neutral-700 text-xs font-medium rounded">
                      Portfolio
                    </span>
                    <span className="px-2 py-1 bg-neutral-100 text-neutral-700 text-xs font-medium rounded">
                      Brand partnerships
                    </span>
                    <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded">
                      Live
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold text-neutral-900 mb-4">
                    A professional home for a growing creator brand
                  </h3>
                  <div className="space-y-3 text-neutral-700 leading-relaxed mb-6">
                    <p>
                      <strong>The brief:</strong> Bella needed one place that captured her creator brand end-to-end — portfolio, media kit, brand collaborations, contact — without forcing partners to bounce between platforms.
                    </p>
                    <p>
                      <strong>What I built:</strong> A clean, mobile-first creator site that doubles as a portfolio and media kit. Custom design, fast load times, built for the way brand partnerships actually happen in 2026.
                    </p>
                    <p>
                      <strong>The outcome:</strong> A single, professional source of truth for the brand — confidently linkable in bio, in pitch emails, and in collaboration conversations.
                    </p>
                  </div>
                  <a
                    href="https://bellalamanna.ca"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-[#5BA8BD] hover:bg-[#4A90A4] rounded-lg shadow-[0_6px_18px_rgba(8,21,34,0.16)] transition-colors duration-200"
                  >
                    Visit bellalamanna.ca →
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* More Work / In Progress */}
      <Section className="py-20">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              More in flight
            </h2>
            <p className="text-lg text-neutral-700 leading-relaxed mb-8">
              I&apos;m currently building out a portfolio of AI and automation engagements with small business clients. Case studies for those will land here as they go live.
            </p>
            <p className="text-base text-neutral-600">
              Want to be a case study? Early clients get a meaningful discount in exchange for letting me share the work.
            </p>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section background="gray" className="py-20">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-neutral-900 mb-6">
              Have something in mind?
            </h2>
            <p className="text-xl text-neutral-700 mb-8">
              Tell me what you&apos;re trying to build. I&apos;ll come back with a realistic scope, timeline, and price — usually within a day.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Let&apos;s build something
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
