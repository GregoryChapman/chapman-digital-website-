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
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-xl text-neutral-600 leading-relaxed">
              Structured modernization for growing organizations.
            </p>
          </div>
        </Container>
      </Section>

      {/* Services Grid */}
      <Section background="gray" className="py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Workflow Audit & Modernization Strategy */}
            <Card hover className="p-8 border-l-4 border-l-blue-500">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h8M8 11h8M8 15h4" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-4">Workflow Audit &amp; Modernization Strategy</h2>
              <p className="text-lg text-neutral-600 mb-6">
                We diagnose operational bottlenecks and build a structured modernization plan that aligns teams, systems, and decision-making.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-neutral-700">Workflow mapping and friction analysis</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-neutral-700">Structural systems review and ownership clarity</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-neutral-700">Prioritized modernization roadmap</span>
                </li>
              </ul>
              <div className="bg-primary-50 p-4 rounded-lg">
                <p className="text-primary-800 font-medium">
                  <strong>Outcome:</strong> A clear modernization plan grounded in operational reality.
                </p>
              </div>
            </Card>

            {/* Intelligent Automation Architecture */}
            <Card hover className="p-8 border-l-4 border-l-cyan-500">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-4">Intelligent Automation Architecture</h2>
              <p className="text-lg text-neutral-600 mb-6">
                We architect automation layers that reduce manual coordination and improve operational consistency without creating additional complexity.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-neutral-700">Automation opportunity modeling</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-neutral-700">AI-assisted workflow architecture</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-neutral-700">Control and escalation design for reliability</span>
                </li>
              </ul>
              <div className="bg-primary-50 p-4 rounded-lg">
                <p className="text-primary-800 font-medium">
                  <strong>Outcome:</strong> Selective automation that creates measurable leverage.
                </p>
              </div>
            </Card>

            {/* System Implementation & Optimization */}
            <Card hover className="p-8 border-l-4 border-l-teal-500">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-4">System Implementation &amp; Optimization</h2>
              <p className="text-lg text-neutral-600 mb-6">
                We implement modernized operating systems, refine execution workflows, and continuously optimize for scale, ownership, and operational clarity.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-neutral-700">Cross-system implementation and integration</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-neutral-700">Operational process hardening and documentation</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-neutral-700">Continuous optimization for scaling teams</span>
                </li>
              </ul>
              <div className="bg-primary-50 p-4 rounded-lg">
                <p className="text-primary-800 font-medium">
                  <strong>Outcome:</strong> Coherent, durable systems that improve execution quality over time.
                </p>
              </div>
            </Card>

          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="py-20">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-neutral-900 mb-6">
              Ready to Transform Your Organization?
            </h2>
            <p className="text-xl text-neutral-600 mb-8">
              Let&apos;s discuss how our services can help you achieve your digital transformation goals.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Get Started
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
