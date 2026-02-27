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
              Modernizing Digital and Operational Systems Through Structured Architecture and Intelligent Automation.
            </h1>
            <p className="text-xl text-[#E4ECF3] font-medium mb-6 leading-relaxed">
              We design and implement structured, AI-enabled workflows for organizations and founder-led brands that are outgrowing their systems.
            </p>
            <p className="text-lg text-[#E4ECF3] mb-8 leading-relaxed">
              If your operations feel fragmented, manual, or unnecessarily complex, we help you simplify and rebuild them properly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-[#5BA8BD] hover:bg-[#4A90A4] rounded-lg shadow-[0_6px_18px_rgba(8,21,34,0.18)] transition-colors duration-200">
                Get Started
              </a>
              <a href="/projects" className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-transparent border border-[#E4F2F8] hover:bg-white/16 rounded-lg transition-colors duration-200">
                View Projects
              </a>
            </div>
          </div>
        </Container>
      </Section>

      {/* What We Do Section */}
      <Section className="py-20 bg-surface-alt">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">What We Do</h2>
            <p className="text-xl text-neutral-700 max-w-3xl mx-auto mb-4">
              Operational friction compounds.
            </p>
            <p className="text-lg text-neutral-600 max-w-4xl mx-auto">
              Disconnected tools. Manual approvals. Redundant reporting. No clear system architecture.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border-l-4 border-l-primary-500">
              <h3 className="text-2xl font-semibold text-neutral-900 mb-4">
                We modernize how organizations operate by:
              </h3>
              <ul className="space-y-3 text-neutral-700">
                <li>Auditing existing workflows</li>
                <li>Identifying structural inefficiencies</li>
                <li>Designing intelligent system architecture</li>
                <li>Implementing automation layers where they matter</li>
                <li>Creating clarity where there was complexity</li>
              </ul>
            </Card>
            <Card className="border-l-4 border-l-secondary-500">
              <p className="text-xl text-neutral-800 leading-relaxed mb-6">
                We do not add more tools.
              </p>
              <p className="text-xl text-neutral-800 leading-relaxed">
                We reduce noise and build systems that scale.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Our Method */}
      <Section background="gray" className="py-20">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">Our Method</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card hover className="border-l-4 border-l-primary-500">
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">1. Diagnose Operational Friction</h3>
              <p className="text-neutral-600">
                We map workflows end-to-end and identify structural bottlenecks.
              </p>
            </Card>
            <Card hover className="border-l-4 border-l-secondary-500">
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">2. Architect Intelligent Systems</h3>
              <p className="text-neutral-600">
                We design streamlined workflows that reduce manual intervention and improve clarity.
              </p>
            </Card>
            <Card hover className="border-l-4 border-l-accent-500">
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">3. Implement Automation Layers</h3>
              <p className="text-neutral-600">
                We apply AI selectively - only where it creates leverage.
              </p>
            </Card>
            <Card hover className="border-l-4 border-l-primary-600">
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">4. Optimize for Scale</h3>
              <p className="text-neutral-600">
                We build systems that remain coherent as your organization grows.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Who This Is For */}
      <Section className="py-20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-neutral-900 mb-8 text-center">Who This Is For</h2>
            <Card className="border-l-4 border-l-primary-500">
              <p className="text-lg text-neutral-700 mb-6">We work with organizations that:</p>
              <ul className="space-y-3 text-neutral-700 mb-8">
                <li>Have grown faster than their internal systems</li>
                <li>Rely heavily on manual coordination</li>
                <li>Are experimenting with AI but lack a structured plan</li>
                <li>Need operational clarity before scaling further</li>
              </ul>
              <div className="space-y-2 text-neutral-800 font-medium">
                <p>We are not a marketing agency.</p>
                <p>We are not a design studio.</p>
                <p>We are a systems modernization consultancy.</p>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Final CTA */}
      <section className="py-20 bg-[#162636]">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-2xl text-white mb-8 font-medium leading-relaxed">
              If you are serious about improving how your organization operates, we should talk.
            </p>
            <a href="/contact" className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-transparent border border-white hover:bg-white/10 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white">
              Start the Conversation
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
