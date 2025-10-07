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
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">AI Consulting</h3>
              <p className="text-neutral-600">
                Strategy, implementation, and integration of AI systems with prompt & agent design.
              </p>
            </Card>

            <Card hover className="text-center border-l-4 border-l-secondary-500">
              <div className="w-12 h-12 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 3h18v18H3V3zm2 2v14h14V5H5zm2 2h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">Front-End Modernization</h3>
              <p className="text-neutral-600">
                Rebuilding digital touchpoints for usability, accessibility, and performance.
              </p>
            </Card>

            <Card hover className="text-center border-l-4 border-l-accent-500">
              <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">Digital Transformation</h3>
              <p className="text-neutral-600">
                Bridging legacy workflows with modern tools and automation.
              </p>
            </Card>

            <Card hover className="text-center border-l-4 border-l-primary-600">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-700 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
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
      <Section className="py-20 bg-gradient-to-br from-primary-600 to-secondary-600">
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