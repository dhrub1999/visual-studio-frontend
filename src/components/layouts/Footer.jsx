'use client';
import React from 'react';
import Link from 'next/link';

import Logo from '../icons/Logo';
import PaddingContainer from './PaddingContainer';
import Whatsapp from '../icons/Whatsapp';
import Instagram from '../icons/Instagram';
import Facebook from '../icons/Facebook';
import { socialLinks } from '@/lib/data';

const Footer = () => {
  return (
    <footer className='border-t border-brand-900 bg-neutral-800'>
      <PaddingContainer classname='py-4'>
        <div className='flex w-full items-center justify-between'>
          <Logo />
          <div className='flex flex-col items-end gap-y-2'>
            <p className='font-body text-sm text-neutral-500 md:text-base'>
              Reach us on
            </p>{' '}
            <div className='flex justify-end gap-x-3' aria-label='social links'>
              <Link href={socialLinks[0].href} aria-label='whatsapp'>
                <Whatsapp fillCol='brand-400' />
              </Link>
              <Link href={socialLinks[1].href} aria-label='Facebook'>
                <Facebook />
              </Link>
              <Link href={socialLinks[2].href} aria-label='Instagram'>
                <Instagram />
              </Link>
            </div>
          </div>
        </div>
        <div className='mt-4 space-y-1 text-center font-body text-xs text-neutral-300 md:space-y-2 md:text-base'>
          <Link
            href={'mailto:thevisualparadise@gmail.com'}
            className='transition-colors duration-300 hover:text-brand-500 hover:underline'
          >
            contact.thevisualparadise@gmail.com
          </Link>
          <p className='text-center text-neutral-500'>
            Design & Developed by{' '}
            <Link
              href={'tamalbiswas.com'}
              className='font-semibold text-neutral-300 transition-all duration-300 hover:text-neutral-200 hover:underline hover:underline-offset-2'
            >
              Tamal Biswas.
            </Link>
          </p>
        </div>
      </PaddingContainer>
    </footer>
  );
};

export default Footer;
