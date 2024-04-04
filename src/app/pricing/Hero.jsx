import Link from 'next/link';
import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

import Facebook from '@/components/icons/Facebook';
import Instagram from '@/components/icons/Instagram';
import Whatsapp from '@/components/icons/Whatsapp';
import PaddingContainer from '@/components/layouts/PaddingContainer';

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
        <div className='mt-8 flex items-center justify-center gap-x-4'>
          <p className='flex items-center gap-x-2 font-body font-semibold text-brand-400'>
            Message us now{' '}
            <span>
              <FiArrowRight />
            </span>
          </p>
          <div className='flex gap-x-2'>
            <Link href='/'>
              <Whatsapp />
            </Link>
            <Link href='/'>
              <Facebook />
            </Link>
            <Link href='/'>
              <Instagram />
            </Link>
          </div>
        </div>
      </PaddingContainer>
    </div>
  );
};

export default Hero;
