import Container from "@/components/Container";
import Section from "@/components/Section";
import Card from "@/components/Card";
import Button from "@/components/Button";

export default function Services() {
  return (
    <>
      {/* Hero Section */}
      <Section className="py-20">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-neutral-900 mb-6">
              Our Services
            </h1>
            <p className="text-xl text-neutral-600 leading-relaxed">
              We combine enterprise-level expertise with agile, design-driven execution 
              to deliver measurable results.
            </p>
          </div>
        </Container>
      </Section>

      {/* Services Grid */}
      <Section background="gray" className="py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* AI Consulting */}
            <Card hover className="p-8">
              <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h8M8 11h8M8 15h4" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-4">AI Consulting</h2>
              <p className="text-lg text-neutral-600 mb-6">
                Strategy, implementation, and integration of AI systems. We help you navigate 
                the complex landscape of artificial intelligence with practical, actionable solutions.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-neutral-700">Prompt & agent design</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-neutral-700">Knowledge grounding</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-neutral-700">Responsible AI enablement</span>
                </li>
              </ul>
              <div className="bg-primary-50 p-4 rounded-lg">
                <p className="text-primary-800 font-medium">
                  <strong>Outcome:</strong> Actionable intelligence, faster workflows, consistent answers.
                </p>
              </div>
            </Card>

            {/* Front-End Modernization */}
            <Card hover className="p-8">
              <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-4">Front-End Modernization</h2>
              <p className="text-lg text-neutral-600 mb-6">
                Rebuilding digital touchpoints for usability and engagement. We transform 
                outdated interfaces into modern, intuitive experiences that users love.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-neutral-700">Portal redesigns</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-neutral-700">UI/UX modernization</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-neutral-700">Accessibility and performance</span>
                </li>
              </ul>
              <div className="bg-primary-50 p-4 rounded-lg">
                <p className="text-primary-800 font-medium">
                  <strong>Outcome:</strong> Intuitive experiences that users trust.
                </p>
              </div>
            </Card>

            {/* Digital Transformation */}
            <Card hover className="p-8">
              <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-4">Digital Transformation</h2>
              <p className="text-lg text-neutral-600 mb-6">
                Bridging legacy workflows with modern tools. We help you integrate data, 
                workflows, and automation for measurable results.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-neutral-700">Workflow automation</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-neutral-700">Data integration</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-neutral-700">Dashboarding & reporting</span>
                </li>
              </ul>
              <div className="bg-primary-50 p-4 rounded-lg">
                <p className="text-primary-800 font-medium">
                  <strong>Outcome:</strong> Smarter operations, clearer decisions.
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
