import Container from "@/components/Container";
import Section from "@/components/Section";
import Card from "@/components/Card";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Section className="py-16 md:py-[4.5rem] relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0B1F33] to-[#162636]" />

        <Container className="relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-semibold leading-[1.18] text-white mb-8 animate-fade-in-soft">
              Modern websites and AI solutions for creators and small businesses.
            </h1>
            <p className="text-xl text-[#E4ECF3] font-medium mb-6 leading-relaxed">
              Fast, professional builds powered by AI — without the agency price tag.
            </p>
            <p className="text-lg text-[#E4ECF3] mb-8 leading-relaxed">
              I help creators and small businesses show up online with the same quality bigger players pay five figures for — shipped in days, not months.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-[#5BA8BD] hover:bg-[#4A90A4] rounded-lg shadow-[0_6px_18px_rgba(8,21,34,0.18)] transition-colors duration-200">
                Let&apos;s build something
              </a>
              <a href="/projects" className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-transparent border border-[#E4F2F8] hover:bg-white/16 rounded-lg transition-colors duration-200">
                See recent work
              </a>
            </div>
          </div>
        </Container>
      </Section>

      {/* What I Do Section */}
      <Section className="py-20 bg-surface-alt">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">What I do</h2>
            <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
              Two focused offerings, built for people who want enterprise-grade results without the enterprise overhead.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card hover className="border-l-4 border-l-primary-500">
              <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-xs font-semibold rounded mb-4 tracking-wide uppercase">
                For creators
              </span>
              <h3 className="text-2xl font-semibold text-neutral-900 mb-3">
                Creator sites
              </h3>
              <p className="text-neutral-700 mb-5 leading-relaxed">
                Modern personal brand websites for influencers, content creators, and public figures. A single professional home for your portfolio, media kit, and brand collaborations — built fast, fixed scope, fixed price.
              </p>
              <ul className="space-y-2 text-neutral-700 mb-6 list-disc list-inside marker:text-primary-500">
                <li>Mobile-first design that looks polished everywhere</li>
                <li>Built for brand partnerships and media outreach</li>
                <li>A real replacement for your Linktree</li>
              </ul>
              <a href="/services" className="text-primary-600 font-medium hover:text-primary-700 transition-colors">
                See what&apos;s included →
              </a>
            </Card>
            <Card hover className="border-l-4 border-l-secondary-500">
              <span className="inline-block px-3 py-1 bg-secondary-100 text-secondary-700 text-xs font-semibold rounded mb-4 tracking-wide uppercase">
                For small business
              </span>
              <h3 className="text-2xl font-semibold text-neutral-900 mb-3">
                AI &amp; automation for small business
              </h3>
              <p className="text-neutral-700 mb-5 leading-relaxed">
                Custom AI tools, workflow automation, and modern web infrastructure for small businesses that want to work smarter without hiring a full team. The same AI acceleration big companies use, packaged for smaller budgets.
              </p>
              <ul className="space-y-2 text-neutral-700 mb-6 list-disc list-inside marker:text-secondary-500">
                <li>AI-assisted workflows tailored to how you actually work</li>
                <li>Automations that remove busywork — not add complexity</li>
                <li>A web presence that supports the business, not the other way around</li>
              </ul>
              <a href="/services" className="text-secondary-600 font-medium hover:text-secondary-700 transition-colors">
                See what&apos;s included →
              </a>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Why This Works */}
      <Section background="gray" className="py-20">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">Why this works</h2>
            <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
              I use AI tools natively — not as a gimmick, but as the core of how I work. That&apos;s why I can deliver faster than traditional agencies and at a quality most freelancers can&apos;t reach.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card hover className="border-l-4 border-l-primary-500">
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">Fast turnaround</h3>
              <p className="text-neutral-700">
                Creator sites typically launch in days. Automation projects move on weekly milestones, not quarterly roadmaps.
              </p>
            </Card>
            <Card hover className="border-l-4 border-l-secondary-500">
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">Real quality</h3>
              <p className="text-neutral-700">
                Enterprise-grade systems thinking, brought down to your scale. Clean, performant, designed to grow with you.
              </p>
            </Card>
            <Card hover className="border-l-4 border-l-accent-500">
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">AI as leverage</h3>
              <p className="text-neutral-700">
                I build with AI in the loop end-to-end. That means more value per dollar — and capabilities smaller players usually can&apos;t access.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Featured Work */}
      <Section className="py-20">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-neutral-900 mb-4">Featured work</h2>
              <p className="text-lg text-neutral-700">
                A recent launch you can click through right now.
              </p>
            </div>
            <Card className="overflow-hidden border-l-4 border-l-primary-500 p-0">
              <div className="grid grid-cols-1 md:grid-cols-5">
                <div className="md:col-span-2 h-56 md:h-auto bg-gradient-to-br from-[#0B1F33] via-[#1C3A52] to-[#5BA8BD] flex items-center justify-center p-8">
                  <div className="text-center">
                    <p className="text-white/70 text-sm uppercase tracking-widest mb-2">Creator site</p>
                    <p className="text-white text-3xl font-semibold">Bella Lamanna</p>
                    <p className="text-white/80 mt-2">bellalamanna.ca</p>
                  </div>
                </div>
                <div className="md:col-span-3 p-8">
                  <h3 className="text-2xl font-semibold text-neutral-900 mb-3">
                    A professional home for a growing creator brand
                  </h3>
                  <p className="text-neutral-700 leading-relaxed mb-4">
                    Bella needed a single source of truth for her creator brand — somewhere brand partners could meet her work, see who she is, and reach out without bouncing between platforms. We launched a clean, mobile-first site that doubles as a portfolio and media kit, designed for the way brand collaborations actually happen in 2026.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-2 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded">Creator site</span>
                    <span className="px-2 py-1 bg-neutral-100 text-neutral-700 text-xs font-medium rounded">Portfolio</span>
                    <span className="px-2 py-1 bg-neutral-100 text-neutral-700 text-xs font-medium rounded">Brand partnerships</span>
                  </div>
                  <a
                    href="https://bellalamanna.ca"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors"
                  >
                    Visit bellalamanna.ca →
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Final CTA */}
      <section className="py-20 bg-[#162636]">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl text-white mb-4 font-semibold leading-tight">
              Have something in mind?
            </h2>
            <p className="text-lg text-[#E4ECF3] mb-8 leading-relaxed">
              Tell me what you&apos;re trying to build. I&apos;ll come back with a realistic scope, timeline, and price — usually within a day.
            </p>
            <a href="/contact" className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-[#5BA8BD] hover:bg-[#4A90A4] rounded-lg shadow-[0_6px_18px_rgba(8,21,34,0.18)] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white">
              Let&apos;s build something
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
