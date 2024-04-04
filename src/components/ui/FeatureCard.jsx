import React from 'react';
import Button from './Button';
import Facebook from '../icons/Facebook';
import Instagram from '../icons/Instagram';
import { FiCheck } from 'react-icons/fi';

const FeatureCard = ({ whyUs }) => {
  return (
    <div className='flex w-full max-w-[800px] flex-col items-center rounded-lg border border-neutral-600 bg-overlay-64 p-8 backdrop-blur-xl md:p-12 lg:rounded-xl lg:py-14'>
      <div className='text-center'>
        <p className='font-body text-sm font-semibold leading-4 text-neutral-400 lg:text-base'>
          Book us for Wedding Photography and get a...
        </p>
        <h2 className='mt-4 font-headline text-2xl-pacifico text-neutral-200 md:text-3xl-pacifico lg:text-4xl-pacifico'>
          Free Pre-Wedding Photoshoot
        </h2>
        <p className='mt-2 font-body text-xs font-medium text-neutral-400 lg:text-sm'>
          * Only applicable in Both side bookings.
        </p>
      </div>
      <div className='mt-8 space-y-4 md:space-y-6 lg:space-y-8'>
        <Button variant='primary'>Whatsapp us now</Button>
        <div className='flex items-center gap-x-4 lg:gap-x-6'>
          <p className='font-body text-sm font-thin text-neutral-400'>
            Get more info
          </p>
          <div className='flex items-center gap-x-2'>
            <Facebook className='cursor-pointer' />
            <Instagram className='cursor-pointer' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
