import React from 'react';
import Link from 'next/link';

import PaddingContainer from '@/components/layouts/PaddingContainer';
import Button from '@/components/ui/Button';

const Hero = () => {
  return (
    <div className='grid h-[calc(90vh-64px)] place-items-center backdrop-blur-sm before:absolute before:left-0 before:top-0 before:-z-[1] before:h-full before:w-full before:bg-overlay-64 before:content-[""] md:backdrop-blur-[2px]'>
      <PaddingContainer classname='text-center'>
        <div className='flex flex-col items-center'>
          <p className='font-body text-sm font-semibold text-brand-600'>
            Curated for your photography needs.
          </p>
          <h1 className='font-headline text-4xl-pacifico text-neutral-200 md:text-5xl-pacifico lg:text-6xl-pacifico xl:max-w-[70%]'>
            Professional quality, simple pricing.
          </h1>
        </div>
        <p className='mt-4 font-body font-normal text-neutral-300'>
          Book us for your next shoot.
        </p>
        <Link href={'/pricing'}>
          <Button className='mt-8' variant='primary'>
            View all plans
          </Button>
        </Link>
      </PaddingContainer>
    </div>
  );
};

export default Hero;
