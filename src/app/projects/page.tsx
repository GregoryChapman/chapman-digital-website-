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
              Our Projects
            </h1>
            <p className="text-xl text-neutral-600 leading-relaxed">
              Explore our portfolio of successful digital transformations, AI implementations, 
              and modern user experiences.
            </p>
          </div>
        </Container>
      </Section>

      {/* Projects Grid */}
      <Section background="gray" className="py-20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI-Enhanced Service Portal */}
            <Card hover className="overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                <svg className="w-16 h-16 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded">
                    AI
                  </span>
                  <span className="px-2 py-1 bg-neutral-100 text-neutral-700 text-xs font-medium rounded">
                    UX
                  </span>
                  <span className="px-2 py-1 bg-neutral-100 text-neutral-700 text-xs font-medium rounded">
                    Modernization
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  AI-Enhanced Service Portal
                </h3>
                <p className="text-neutral-600 mb-4">
                  Redesigned citizen portal with AI-driven triage and analytics. 
                  Reduced manual intake by 40% and improved case routing accuracy.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-neutral-600">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Reduced manual intake by 40%
                  </div>
                  <div className="flex items-center text-sm text-neutral-600">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Improved case routing accuracy
                  </div>
                </div>
                <Button href="/projects/ai-service-portal" variant="outline" size="sm">
                  View Details
                </Button>
              </div>
            </Card>

            {/* Enterprise Dashboard Modernization */}
            <Card hover className="overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <svg className="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded">
                    Dashboard
                  </span>
                  <span className="px-2 py-1 bg-neutral-100 text-neutral-700 text-xs font-medium rounded">
                    Analytics
                  </span>
                  <span className="px-2 py-1 bg-neutral-100 text-neutral-700 text-xs font-medium rounded">
                    UX
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  Enterprise Dashboard Modernization
                </h3>
                <p className="text-neutral-600 mb-4">
                  Transformed legacy reporting system into modern, interactive dashboards 
                  with real-time analytics and intuitive data visualization.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-neutral-600">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Real-time data visualization
                  </div>
                  <div className="flex items-center text-sm text-neutral-600">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    60% faster decision making
                  </div>
                </div>
                <Button href="/projects/enterprise-dashboard" variant="outline" size="sm">
                  View Details
                </Button>
              </div>
            </Card>

            {/* Salesforce Integration Platform */}
            <Card hover className="overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                <svg className="w-16 h-16 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded">
                    Salesforce
                  </span>
                  <span className="px-2 py-1 bg-neutral-100 text-neutral-700 text-xs font-medium rounded">
                    Integration
                  </span>
                  <span className="px-2 py-1 bg-neutral-100 text-neutral-700 text-xs font-medium rounded">
                    Automation
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  Salesforce Integration Platform
                </h3>
                <p className="text-neutral-600 mb-4">
                  Built comprehensive integration platform connecting Salesforce with 
                  legacy systems, reducing manual data entry by 75%.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-neutral-600">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Reduced manual data entry by 75%
                  </div>
                  <div className="flex items-center text-sm text-neutral-600">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Seamless legacy system integration
                  </div>
                </div>
                <Button href="/projects/salesforce-integration" variant="outline" size="sm">
                  View Details
                </Button>
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
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-neutral-600 mb-8">
              Let&apos;s discuss how we can help transform your organization with modern 
              technology and intelligent design.
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
