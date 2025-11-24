import Container from "@/components/Container";
import Section from "@/components/Section";
import Card from "@/components/Card";

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <Section className="py-20 bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-neutral-900 mb-6">
              About <span className="text-gradient">Chapman Digital</span>
            </h1>
            <p className="text-xl text-neutral-600 leading-relaxed">
              A boutique consultancy helping teams transform legacy systems, improve UX, 
              and integrate AI responsibly. We combine enterprise-level expertise with 
              agile, design-driven execution.
            </p>
          </div>
        </Container>
      </Section>

      {/* Mission Section */}
      <Section background="gray" className="py-20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-neutral-900 mb-8 text-center">
              Our Mission
            </h2>
            <div className="prose prose-lg mx-auto text-neutral-600">
              <p className="text-xl leading-relaxed mb-6">
                Empower organizations to modernize through AI, intelligent front-end design, 
                and streamlined digital experiences.
              </p>
              <p className="text-lg leading-relaxed">
                We believe in the power of thoughtful technology integration. Our approach 
                combines deep technical expertise with human-centered design principles to 
                create solutions that not only work, but work beautifully.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Approach Section */}
      <Section className="py-20">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">Our Approach</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              We follow a proven methodology that ensures successful outcomes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card hover className="text-center border-l-4 border-l-blue-500">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-4">Understand</h3>
              <p className="text-neutral-600">
                We start by understanding your business goals, user needs, and technical 
                constraints. This foundation ensures our solutions align with your vision.
              </p>
            </Card>

            <Card hover className="text-center border-l-4 border-l-cyan-500">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-4">Design</h3>
              <p className="text-neutral-600">
                We design intelligent, human-centered experiences that balance innovation 
                with usability. Every solution is crafted for clarity and efficiency.
              </p>
            </Card>

            <Card hover className="text-center border-l-4 border-l-teal-500">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-4">Deliver</h3>
              <p className="text-neutral-600">
                We deliver iterative, testable, maintainable solutions that grow with 
                your organization. Success is measured by real-world impact.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Values Section */}
      <Section background="primary" className="py-20">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              The principles that guide everything we do.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-white mb-3">Credible</h3>
              <p className="text-primary-100">
                We build trust through expertise, transparency, and proven results.
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-semibold text-white mb-3">Modern</h3>
              <p className="text-primary-100">
                We stay at the forefront of technology and design trends.
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-semibold text-white mb-3">Human</h3>
              <p className="text-primary-100">
                We prioritize human needs and experiences in all our solutions.
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-semibold text-white mb-3">Forward-Thinking</h3>
              <p className="text-primary-100">
                We design for the future, not just the present.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Future Vision */}
      <Section className="py-20">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-neutral-900 mb-8">
              Future Vision
            </h2>
            <p className="text-xl text-neutral-600 leading-relaxed mb-8">
              We&apos;re expanding into digital strategy, analytics, and AI-driven education 
              to help organizations navigate the evolving digital landscape.
            </p>
            <p className="text-lg text-neutral-600">
              Our goal is to be the trusted partner for organizations seeking to harness 
              the power of AI and modern design to create meaningful, lasting impact.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
