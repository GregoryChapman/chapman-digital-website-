"use client";

import { track } from "@vercel/analytics";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Card from "@/components/Card";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Section className="py-16 md:py-[4.5rem] relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0B1F33] to-[#162636]" />

        <Container className="relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-semibold leading-[1.18] text-white mb-8 animate-fade-in-soft">
              Modern websites for creators and small businesses.
            </h1>
            <p className="text-xl text-[#E4ECF3] font-medium mb-6 leading-relaxed">
              Live in weeks, not months. Fixed scope, fixed price, fast turnaround.
            </p>
            <p className="text-lg text-[#E4ECF3] mb-8 leading-relaxed">
              I build clean, professional sites for small creators and small businesses — the kind of quality bigger players pay agencies five figures for, at prices that actually work for the rest of us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-[#5BA8BD] hover:bg-[#4A90A4] rounded-lg shadow-[0_6px_18px_rgba(8,21,34,0.18)] transition-colors duration-200">
                Let&apos;s build something
              </a>
              <a href="/projects" className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-transparent border border-[#E4F2F8] hover:bg-white/16 rounded-lg transition-colors duration-200">
                See the work
              </a>
            </div>
          </div>
        </Container>
      </Section>

      {/* What I Build Section */}
      <Section className="py-20 bg-surface-alt">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">What I build</h2>
            <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
              Two focused offerings — both built for people who want professional quality without the agency price tag or the agency timeline.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card hover className="border-l-4 border-l-primary-500">
              <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-xs font-semibold rounded mb-4 tracking-wide uppercase">
                For creators
              </span>
              <h3 className="text-2xl font-semibold text-neutral-900 mb-3">
                Creator sites
              </h3>
              <p className="text-neutral-700 mb-5 leading-relaxed">
                Personal brand websites for influencers, content creators, and public figures. A real online home for your portfolio, media kit, and brand collaborations — built fast, fixed scope, fixed price.
              </p>
              <ul className="space-y-2 text-neutral-700 mb-6 list-disc list-inside marker:text-primary-500">
                <li>Mobile-first design that looks sharp everywhere</li>
                <li>Built for brand partnerships and media outreach</li>
                <li>A real replacement for your Linktree</li>
              </ul>
              <a href="/services" className="text-primary-600 font-medium hover:text-primary-700 transition-colors">
                See what&apos;s included →
              </a>
            </Card>
            <Card hover className="border-l-4 border-l-secondary-500">
              <span className="inline-block px-3 py-1 bg-secondary-100 text-secondary-700 text-xs font-semibold rounded mb-4 tracking-wide uppercase">
                For small business
              </span>
              <h3 className="text-2xl font-semibold text-neutral-900 mb-3">
                Small business websites
              </h3>
              <p className="text-neutral-700 mb-5 leading-relaxed">
                A modern web presence for small businesses that need to look professional online. Fast delivery, mobile-first, contact forms, an SEO baseline — ready to run from day one.
              </p>
              <ul className="space-y-2 text-neutral-700 mb-6 list-disc list-inside marker:text-secondary-500">
                <li>Clean, conversion-friendly design</li>
                <li>Built-in lead capture and contact</li>
                <li>SEO and performance baseline out of the box</li>
              </ul>
              <a href="/services" className="text-secondary-600 font-medium hover:text-secondary-700 transition-colors">
                See what&apos;s included →
              </a>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Why Work With Me */}
      <Section background="gray" className="py-20">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">Why work with me</h2>
            <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
              Built by a developer who actually ships. No account managers, no quarterly roadmaps, no surprise invoices.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card hover className="border-l-4 border-l-primary-500">
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">Live in weeks</h3>
              <p className="text-neutral-700">
                Creator sites typically launch in a couple of weeks. Small business sites on a similar timeline. No months-long agency cycles.
              </p>
            </Card>
            <Card hover className="border-l-4 border-l-secondary-500">
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">Professional quality</h3>
              <p className="text-neutral-700">
                Enterprise-grade craft, brought down to your scale. Clean, performant, designed to grow with you.
              </p>
            </Card>
            <Card hover className="border-l-4 border-l-accent-500">
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">Accessible prices</h3>
              <p className="text-neutral-700">
                Fixed scope, fixed price, set up-front. You know what you&apos;re getting and what it costs before we start.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Featured Work */}
      <Section className="py-20">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-neutral-900 mb-4">Featured work</h2>
              <p className="text-lg text-neutral-700">
                A recent launch you can click through right now.
              </p>
            </div>
            <Card className="overflow-hidden border-l-4 border-l-primary-500 p-0">
              <div className="grid grid-cols-1 md:grid-cols-5">
                <div className="md:col-span-2 h-56 md:h-auto bg-gradient-to-br from-[#0B1F33] via-[#1C3A52] to-[#5BA8BD] flex items-center justify-center p-8">
                  <div className="text-center">
                    <p className="text-white/70 text-sm uppercase tracking-widest mb-2">Creator site</p>
                    <p className="text-white text-3xl font-semibold">Bella Lamanna</p>
                    <p className="text-white/80 mt-2">bellalamanna.ca</p>
                  </div>
                </div>
                <div className="md:col-span-3 p-8">
                  <h3 className="text-2xl font-semibold text-neutral-900 mb-3">
                    A professional home for a growing creator brand
                  </h3>
                  <p className="text-neutral-700 leading-relaxed mb-4">
                    Bella needed one place that captured her brand end-to-end — a single source of truth for brand collaborations, replacing scattered links and a basic Linktree with a polished, mobile-first creator site that doubles as a portfolio and media kit.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-2 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded">Creator site</span>
                    <span className="px-2 py-1 bg-neutral-100 text-neutral-700 text-xs font-medium rounded">Portfolio</span>
                    <span className="px-2 py-1 bg-neutral-100 text-neutral-700 text-xs font-medium rounded">Brand partnerships</span>
                  </div>
                  <a
                    href="https://bellalamanna.ca"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => track("portfolio_click", { project: "bellalamanna" })}
                    className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors"
                  >
                    Visit bellalamanna.ca →
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Final CTA */}
      <section className="py-20 bg-[#162636]">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl text-white mb-4 font-semibold leading-tight">
              Have something in mind?
            </h2>
            <p className="text-lg text-[#E4ECF3] mb-8 leading-relaxed">
              Tell me what you&apos;re trying to build. I&apos;ll come back with a realistic scope, timeline, and price — usually within a day.
            </p>
            <a href="/contact" className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-[#5BA8BD] hover:bg-[#4A90A4] rounded-lg shadow-[0_6px_18px_rgba(8,21,34,0.18)] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white">
              Let&apos;s build something
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
