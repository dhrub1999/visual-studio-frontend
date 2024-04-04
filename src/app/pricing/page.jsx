import React from 'react';
import Hero from './Hero';
import PricingGrid from '@/components/layouts/PricingGrid';
import { landscapeImages, portraitImages } from '@/lib/data';
import './styles/pricing.css';

const Pricing = () => {
  return (
    <main>
      <section className='perspective relative'>
        <Hero />
        <PricingGrid
          portraitArr={portraitImages}
          landscapeArr={landscapeImages}
        />
      </section>
    </main>
  );
};
export default Pricing;
