import React from 'react';
import Link from 'next/link';

import Hero from './Hero';
import PricingGrid from '@/components/layouts/PricingGrid';
import PaddingContainer from '@/components/layouts/PaddingContainer';
import { testimonials } from '@/lib/sanity/fetchData';
import Button from '@/components/ui/Button';
import FeatureCard from '@/components/ui/FeatureCard';
import { landscapeImages, portraitImages, socialLinks } from '@/lib/data';
import './styles/pricing.css';
import Testimonials from '@/components/layouts/Testimonials';

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

      <section className='relative mt-12 overflow-hidden md:mt-[72px] lg:mt-24'>
        <PaddingContainer classname='relative'>
          <h2 className='text-center font-headline text-2xl-pacifico text-neutral-300 md:text-4xl-pacifico lg:text-5xl-pacifico'>
            Happy clients, Happy stories.
          </h2>
          <Testimonials userReviews={testimonials} className='mt-6 md:mt-6' />
          <Link href={socialLinks[0].href} target='_blank'>
            <Button variant='primary' className='mx-auto mt-8 block lg:mt-12'>
              Plan your Shoot
            </Button>
          </Link>
        </PaddingContainer>
        <div className='clip-path-star absolute -bottom-[10%] -right-[20%] -z-10 h-[80rem] w-[80rem] overflow-hidden bg-neutral-700 content-[""]'></div>
      </section>

      <section className='mt-12 flex w-full justify-center pb-4 md:mt-[72px] lg:mt-24'>
        <FeatureCard />
      </section>
    </main>
  );
};
export default Pricing;
