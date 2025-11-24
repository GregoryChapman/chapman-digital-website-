import Container from "@/components/Container";
import Section from "@/components/Section";
import Card from "@/components/Card";
import Button from "@/components/Button";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Section className="py-20 relative overflow-hidden">
        {/* Creative Background Design */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50" />
        
        {/* Animated gradient orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Geometric shapes */}
        <div className="absolute top-20 right-20 w-64 h-64 border-4 border-blue-200/30 rotate-45 rounded-lg" />
        <div className="absolute bottom-20 left-20 w-48 h-48 border-4 border-cyan-200/30 rotate-12 rounded-full" />
        <div className="absolute top-1/2 right-1/4 w-32 h-32 border-4 border-teal-200/30 -rotate-12 rounded-lg" />
        
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 z-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(to right, #000 1px, transparent 1px),
              linear-gradient(to bottom, #000 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
        
        <Container className="relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 mb-6">
              Where <span className="text-gradient">AI meets design</span>
            </h1>
            <p className="text-xl text-neutral-800 font-medium mb-8 leading-relaxed drop-shadow-sm">
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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