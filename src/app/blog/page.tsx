import Container from "@/components/Container";
import Section from "@/components/Section";

export default function Blog() {
  return (
    <>
      {/* Hero Section */}
      <Section className="py-20">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-neutral-900 mb-6">
              Blog
            </h1>
            <p className="text-xl text-neutral-600 leading-relaxed">
              Insights, trends, and best practices in AI, digital transformation, 
              and modern user experience design.
            </p>
          </div>
        </Container>
      </Section>

      {/* Coming Soon Section */}
      <Section background="gray" className="py-20">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <svg className="w-12 h-12 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.586-7.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              Coming Soon
            </h2>
            <p className="text-lg text-neutral-600 mb-8">
              We&apos;re working on bringing you valuable insights about AI, digital transformation, 
              and modern design practices. Check back soon for our latest articles.
            </p>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-neutral-200">
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                Stay Updated
              </h3>
              <p className="text-neutral-600 mb-4">
                Subscribe to our newsletter to be the first to know when we publish new content.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
                <button className="px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-lg transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
