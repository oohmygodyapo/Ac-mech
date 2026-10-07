import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { About } from './components/About';
import { CustomerTrust } from './components/CustomerTrust';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { StickyMobileBar } from './components/StickyMobileBar';

export default function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-slate-50 text-slate-800 dark:bg-slate-950 dark:text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-white transition-colors duration-300">
      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section with realistic Split AC Animation & CTAs */}
        <Hero />

        {/* Services Section */}
        <Services />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* About Loganathan V. */}
        <About />

        {/* Customer Trust & Honest Feedback */}
        <CustomerTrust />

        {/* Contact Section & Location Details */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile-Only Sticky Floating Action Bar (Call, WhatsApp, Directions) */}
      <StickyMobileBar />
    </div>
  );
}
