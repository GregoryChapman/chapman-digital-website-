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
              About <span className="text-gradient">Chapman Digital Services</span>
            </h1>
            <p className="text-xl text-neutral-600 leading-relaxed">
              Chapman Digital Services is a boutique digital and operational systems consultancy.
            </p>
            <p className="text-lg text-neutral-600 leading-relaxed mt-4">
              Led by Gregory Chapman, we focus on modernizing complex workflows using structured architecture and intelligent automation.
            </p>
          </div>
        </Container>
      </Section>

      {/* Philosophy Section */}
      <Section background="gray" className="py-20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-neutral-900 mb-8 text-center">
              Philosophy
            </h2>
            <Card className="border-l-4 border-l-primary-500">
              <p className="text-xl text-neutral-800 leading-relaxed mb-6">
                Most operational problems are structural, not technological.
              </p>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                Organizations rarely suffer from a lack of tools. They suffer from tool sprawl, unclear ownership, and fragmented workflows.
              </p>
              <h3 className="text-xl font-semibold text-neutral-900 mb-4">We prioritize:</h3>
              <ul className="space-y-3 text-neutral-700 mb-6">
                <li>Clarity over complexity</li>
                <li>Structure over speed</li>
                <li>Intelligent automation over reactive patchwork</li>
              </ul>
              <p className="text-lg text-neutral-700 leading-relaxed">
                We build systems that make work easier to execute and easier to understand.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Background Section */}
      <Section className="py-20">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-neutral-900 mb-8">
              Background
            </h2>
            <div className="space-y-6">
              <p className="text-xl text-neutral-600 leading-relaxed">
                Chapman Digital Services was built to apply enterprise-level systems thinking to scaling organizations.
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed">
                We operate independently and focus on long-term system integrity.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
