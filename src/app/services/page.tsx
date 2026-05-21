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
              Two focused offerings — both built with AI in the loop so you get bigger-agency quality on a small-business budget.
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
                Modern personal brand websites for influencers, content creators, and public figures who need a real online home — not another link tree.
              </p>

              <h3 className="text-sm uppercase tracking-wide text-neutral-500 font-semibold mb-3">Who it&apos;s for</h3>
              <p className="text-neutral-700 mb-6 leading-relaxed">
                Creators who are getting brand inquiries and need a professional place to send them. Public figures who&apos;ve outgrown a basic Linktree. Anyone whose personal brand is starting to feel like a business.
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

            {/* AI & Automation for Small Business */}
            <Card hover className="p-8 border-l-4 border-l-cyan-500">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="inline-block px-3 py-1 bg-cyan-100 text-cyan-700 text-xs font-semibold rounded mb-3 tracking-wide uppercase">
                For small business
              </span>
              <h2 className="text-3xl font-bold text-neutral-900 mb-3">AI &amp; automation for small business</h2>
              <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
                Intelligent automation, AI-assisted workflows, and a modern web presence — built around the way your business actually runs.
              </p>

              <h3 className="text-sm uppercase tracking-wide text-neutral-500 font-semibold mb-3">Who it&apos;s for</h3>
              <p className="text-neutral-700 mb-6 leading-relaxed">
                Small businesses doing meaningful work but losing hours every week to manual tasks, scattered tools, or an outdated website. You want to work smarter without hiring a full team to do it.
              </p>

              <h3 className="text-sm uppercase tracking-wide text-neutral-500 font-semibold mb-3">What&apos;s included</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-neutral-700">Custom AI tools tailored to your business (intake, drafting, follow-ups, support)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-neutral-700">Workflow automation that connects the tools you already use</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-neutral-700">Modern, professional website that actually drives business</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-neutral-700">A short discovery up front so we only build things you&apos;ll use</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-neutral-700">Clear handoff and documentation so you&apos;re not dependent on me forever</span>
                </li>
              </ul>

              <div className="bg-primary-50 p-4 rounded-lg mb-6">
                <p className="text-primary-800 font-medium">
                  <strong>The outcome:</strong> Hours back in your week, a sharper online presence, and AI working quietly in the background — exactly where it earns its keep.
                </p>
              </div>

              <Button href="/contact" variant="primary" size="md">
                Start an AI project
              </Button>
            </Card>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="py-20">
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
