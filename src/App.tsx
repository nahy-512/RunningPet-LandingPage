import { useRef } from 'react';
import { HeroSection } from './components/HeroSection';
import { ConceptSection } from './components/ConceptSection';
import { PreviewSection } from './components/PreviewSection';
import { RewardSection } from './components/RewardSection';
import { CTASection } from './components/CTASection';
import { Toaster } from './components/ui/sonner';

export default function App() {
  const ctaRef = useRef<HTMLDivElement>(null);

  const scrollToCTA = () => {
    ctaRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <HeroSection onCTAClick={scrollToCTA} />

      {/* Concept/World Section */}
      <ConceptSection />

      {/* Preview Section */}
      <PreviewSection />

      {/* Reward Section */}
      <RewardSection />

      {/* Final CTA Section */}
      <div ref={ctaRef}>
        <CTASection />
      </div>

      {/* Toast notifications */}
      <Toaster position="top-center" richColors />
    </div>
  );
}
