'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg flex items-center justify-center shadow-sm">
              <span className="text-white font-bold text-xl">C</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-teal-700 leading-tight">Chapman</span>
              <span className="text-lg font-bold text-teal-700 leading-tight">Digital</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-neutral-600 hover:text-primary-600 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-neutral-600 hover:text-primary-600 transition-colors">
              About
            </Link>
            <Link href="/services" className="text-neutral-600 hover:text-primary-600 transition-colors">
              Services
            </Link>
            <Link href="/projects" className="text-neutral-600 hover:text-primary-600 transition-colors">
              Projects
            </Link>
            <Link href="/contact" className="text-neutral-600 hover:text-primary-600 transition-colors">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/contact" className="btn-primary">
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-neutral-600 hover:text-primary-600 hover:bg-neutral-100"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-neutral-200">
              <Link href="/" className="block px-3 py-2 text-neutral-600 hover:text-primary-600">
                Home
              </Link>
              <Link href="/about" className="block px-3 py-2 text-neutral-600 hover:text-primary-600">
                About
              </Link>
              <Link href="/services" className="block px-3 py-2 text-neutral-600 hover:text-primary-600">
                Services
              </Link>
              <Link href="/projects" className="block px-3 py-2 text-neutral-600 hover:text-primary-600">
                Projects
              </Link>
              <Link href="/contact" className="block px-3 py-2 text-neutral-600 hover:text-primary-600">
                Contact
              </Link>
              <div className="px-3 py-2">
                <Link href="/contact" className="btn-primary block text-center">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
