import Container from "@/components/Container";
import Section from "@/components/Section";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Privacy",
  description:
    "What Chapman Digital Services collects through its contact form and cookieless analytics, why, where it is stored, and how to reach me about it.",
  path: "/privacy",
});

const CONTACT_EMAIL = "contact@chapmandigitalservices.com";

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-3">
      <h2 className="text-xl font-semibold">{title}</h2>
      {children}
    </div>
  );
}

export default function Privacy() {
  return (
    <Section className="py-20">
      <Container>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Privacy</h1>
          <p className="text-neutral-600 mb-12">Last updated: November 2026</p>

          <div className="space-y-10 text-lg text-neutral-700 leading-relaxed">
            <Block title="Who is responsible">
              <p>
                This site belongs to Chapman Digital Services, run by Gregory Chapman in Montreal, Quebec. Gregory
                Chapman is the person responsible for protecting the personal information collected here. You can
                reach me about anything on this page at{" "}
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#0B1F33] font-medium underline underline-offset-4">
                  {CONTACT_EMAIL}
                </a>
                .
              </p>
            </Block>

            <Block title="What the contact form collects">
              <p>
                When you send the contact form, I receive your name, your email address, your brand or business name
                if you give one, and your message. I use this only to reply to you and to talk about the work you
                asked about. I don&apos;t add you to a mailing list, sell your information, or share it with anyone
                for marketing.
              </p>
            </Block>

            <Block title="Where it goes">
              <p>
                The form is delivered to my business inbox by Resend, an email delivery service, and stored in my
                Google Workspace email. The site itself is hosted by Vercel. These providers may process and store
                information outside Quebec and Canada, including in the United States, where it is protected by
                their own security measures and subject to local law.
              </p>
            </Block>

            <Block title="How long I keep it">
              <p>
                I keep your message for as long as we&apos;re talking about a project, and afterwards as part of my
                normal business records. You can ask me to delete it at any time.
              </p>
            </Block>

            <Block title="Analytics">
              <p>
                This site uses Vercel Web Analytics and Vercel Speed Insights to count page views and check how fast
                pages load. They record aggregate information such as the page visited, the referring site, country,
                browser and device type. No cookies are set, nothing is stored in your browser, and visits aren&apos;t
                tied to a persistent identifier or used to build a profile of you.
              </p>
            </Block>

            <Block title="Your rights">
              <p>
                You can ask to see the personal information I hold about you, have it corrected, or have it deleted.
                Email me at the address above and I&apos;ll respond within 30 days. If you&apos;re not satisfied with
                my answer, you can contact the Commission d&apos;accès à l&apos;information du Québec.
              </p>
            </Block>
          </div>
        </div>
      </Container>
    </Section>
  );
}
