import Container from "@/components/Container";
import Section from "@/components/Section";
import Card from "@/components/Card";
import Button from "@/components/Button";

export default function Services() {
  return (
    <>
      {/* Hero Section */}
      <Section className="py-20 bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-neutral-900 mb-6">
              What I <span className="text-gradient">build</span>
            </h1>
            <p className="text-xl text-neutral-700 leading-relaxed">
              Two focused offerings — built for people who want professional quality on a small-business budget and timeline.
            </p>
          </div>
        </Container>
      </Section>

      {/* Services Grid */}
      <Section background="gray" className="py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {/* Creator Sites */}
            <Card hover className="p-8 border-l-4 border-l-blue-500">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded mb-3 tracking-wide uppercase">
                For creators
              </span>
              <h2 className="text-3xl font-bold text-neutral-900 mb-3">Creator sites</h2>
              <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
                Personal brand websites for influencers, content creators, and public figures who need a real online home — not another link tree.
              </p>

              <h3 className="text-sm uppercase tracking-wide text-neutral-500 font-semibold mb-3">Who it&apos;s for</h3>
              <p className="text-neutral-700 mb-6 leading-relaxed">
                Creators getting brand inquiries who need a professional place to send them. Public figures who&apos;ve outgrown a basic Linktree. Anyone whose personal brand is starting to feel like a business.
              </p>

              <h3 className="text-sm uppercase tracking-wide text-neutral-500 font-semibold mb-3">What&apos;s included</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-neutral-700">Custom-designed home, about, portfolio, and contact pages</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-neutral-700">Media kit and Work With Me page for brand collaborations</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-neutral-700">Mobile-first design, fast load times, search-ready</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-neutral-700">Custom domain setup and hosting handoff</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-neutral-700">Fixed scope, fixed price — no surprise invoices</span>
                </li>
              </ul>

              <div className="bg-primary-50 p-4 rounded-lg mb-6">
                <p className="text-primary-800 font-medium">
                  <strong>The outcome:</strong> A site you&apos;re proud to drop in your bio — one place brands and fans can find everything that matters.
                </p>
              </div>

              <Button href="/contact" variant="primary" size="md">
                Start a creator site
              </Button>
            </Card>

            {/* Small Business Websites */}
            <Card hover className="p-8 border-l-4 border-l-cyan-500">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <span className="inline-block px-3 py-1 bg-cyan-100 text-cyan-700 text-xs font-semibold rounded mb-3 tracking-wide uppercase">
                For small business
              </span>
              <h2 className="text-3xl font-bold text-neutral-900 mb-3">Small business websites</h2>
              <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
                A modern, professional web presence for small businesses that need to look the part online — built fast, ready to run from day one.
              </p>

              <h3 className="text-sm uppercase tracking-wide text-neutral-500 font-semibold mb-3">Who it&apos;s for</h3>
              <p className="text-neutral-700 mb-6 leading-relaxed">
                Small businesses doing good work but losing leads to a dated website, a template they can&apos;t edit, or no site at all. You want something clean, professional, and yours — without the agency price tag.
              </p>

              <h3 className="text-sm uppercase tracking-wide text-neutral-500 font-semibold mb-3">What&apos;s included</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-neutral-700">Custom-designed pages tailored to how your business actually runs</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-neutral-700">Mobile-first design with fast load times</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-neutral-700">Contact forms and lead capture wired up out of the box</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-neutral-700">SEO baseline and analytics setup ready to go</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-neutral-700">Custom domain setup and hosting handoff</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-neutral-700">Fixed scope, fixed price — no surprise invoices</span>
                </li>
              </ul>

              <div className="bg-primary-50 p-4 rounded-lg mb-6">
                <p className="text-primary-800 font-medium">
                  <strong>The outcome:</strong> A modern, professional site you&apos;re proud to send customers to — and that actually pulls its weight in bringing them in.
                </p>
              </div>

              <Button href="/contact" variant="primary" size="md">
                Start a business site
              </Button>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Additional Services — Automation */}
      <Section className="py-20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-sm uppercase tracking-widest text-neutral-500 font-semibold mb-3">
                Additional services
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                Want to go further?
              </h2>
            </div>
            <Card className="border-l-4 border-l-neutral-700">
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                Custom workflow automations
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                Once your site is live, I can help streamline the operations behind it — connecting the tools you already use, taking repetitive tasks off your plate, and freeing up hours each week. It&apos;s a capability I offer to existing clients, not the headline. If you have a specific bottleneck in mind, mention it when we talk and we&apos;ll figure out whether it&apos;s worth tackling.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section background="gray" className="py-20">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-neutral-900 mb-6">
              Not sure which one fits?
            </h2>
            <p className="text-xl text-neutral-700 mb-8">
              Send a few sentences about what you&apos;re working on. I&apos;ll tell you honestly whether I&apos;m the right person for it, and what a realistic scope and price would look like.
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
