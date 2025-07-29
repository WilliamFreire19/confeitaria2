
'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from './HeroSection';
import ProductsSection from './ProductsSection';
import AboutSection from './AboutSection';
import TestimonialsSection from './TestimonialsSection';
import ContactForm from './ContactForm';
import { Suspense } from 'react';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ProductsSection />
        <AboutSection />
        <TestimonialsSection />
        <Suspense fallback={<div className="flex justify-center items-center py-20">Carregando...</div>}>
          <ContactForm />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
