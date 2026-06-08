import { Suspense } from 'react';
import Hero from '@/components/sections/Hero';
import Stats from '@/components/sections/Stats';
import ValueProposition from '@/components/sections/ValueProposition';
import FeaturedStartups from '@/components/sections/FeaturedStartups';
import Newsletter from '@/components/sections/Newsletter';

export default function Home() {
  return (
    <main>
      <Hero />
      <Suspense fallback={<div>Loading...</div>}>
        <Stats />
      </Suspense>
      <ValueProposition />
      <FeaturedStartups />
      <Newsletter />
    </main>
  );
}
