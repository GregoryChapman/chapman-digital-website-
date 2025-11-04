import Container from "@/components/Container";
import Section from "@/components/Section";
import Card from "@/components/Card";
import Button from "@/components/Button";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Section className="py-20">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 mb-6">
              Where <span className="text-gradient">AI meets design</span>
            </h1>
            <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
              Empowering organizations to modernize through AI, intelligent front-end design, 
              and streamlined digital experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors duration-200">
                Get Started
              </a>
              <a href="/projects" className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-blue-600 bg-white border border-blue-300 hover:bg-blue-50 rounded-lg transition-colors duration-200">
                View Projects
              </a>
            </div>
          </div>
        </Container>
      </Section>

      {/* Services Section */}
      <Section className="py-20 bg-gradient-to-r from-blue-50 to-cyan-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">Our Services</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              We combine enterprise-level expertise with agile, design-driven execution.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card hover className="text-center border-l-4 border-l-primary-500">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h8M8 11h8M8 15h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">AI Consulting</h3>
              <p className="text-neutral-600">
                Strategy, implementation, and integration of AI systems with prompt & agent design.
              </p>
            </Card>

            <Card hover className="text-center border-l-4 border-l-secondary-500">
              <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">Front-End Modernization</h3>
              <p className="text-neutral-600">
                Rebuilding digital touchpoints for usability, accessibility, and performance.
              </p>
            </Card>

            <Card hover className="text-center border-l-4 border-l-accent-500">
              <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">Digital Transformation</h3>
              <p className="text-neutral-600">
                Bridging legacy workflows with modern tools and automation.
              </p>
            </Card>

            <Card hover className="text-center border-l-4 border-l-primary-600">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">Salesforce Enablement</h3>
              <p className="text-neutral-600">
                Enterprise-grade CRM expertise for scalable, maintainable modernization.
              </p>
            </Card>
          </div>
        </Container>
      </Section>


      {/* CTA Section */}
      <Section className="py-20 bg-gradient-to-br from-blue-600 to-cyan-600">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Modernize Your Organization?
            </h2>
            <p className="text-xl text-white mb-8 font-medium">
              Let&apos;s discuss how we can help you leverage AI, improve user experiences, 
              and streamline your digital operations.
            </p>
            <Button href="/contact" variant="secondary" size="lg">
              Get Started Today
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}