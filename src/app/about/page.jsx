import React from 'react';
import Image from 'next/image';
import { IoLocationSharp } from 'react-icons/io5';
import { MdOutlineLocalPhone } from 'react-icons/md';
import { IoIosMail } from 'react-icons/io';
import Link from 'next/link';

import PaddingContainer from '@/components/layouts/PaddingContainer';
import Button from '@/components/ui/Button';
import FeatureCard from '@/components/ui/FeatureCard';

const About = () => {
  return (
    <main>
      <PaddingContainer classname='flex flex-col-reverse md:flex-row gap-y-8 items-center py-8 md:justify-between lg:justify-center'>
        <div className='text-center md:w-1/2 md:text-left lg:w-2/3'>
          <h1 className='font-headline text-4xl-pacifico text-neutral-200 md:text-5xl-pacifico lg:text-6xl-pacifico'>
            About Us.
          </h1>
          <p className='mt-4 font-body text-neutral-300 lg:w-[80%] lg:max-w-[520px]'>
            Welcome toThe Visual Paradise , where moments meet magnificence.
            We&apos;re a team of storytellers armed with cameras, ready to craft
            your memories into visual treasures. From heartfelt weddings to
            corporate triumphs, we&apos;re here to capture the essence of your
            narrative. Let&apos;s embark on a creative journey together. Reach
            out today, and let&apos;s make magic happen.
          </p>

          <div className='mt-8 flex flex-col items-center gap-x-8 gap-y-4 md:items-start md:justify-start md:gap-y-6 lg:flex-row lg:gap-x-10'>
            <Link href={'/pricing'}>
              <Button>Plan your shoot</Button>
            </Link>
            <Link href={''}>
              <Button variant='secondary'>View our portfolio</Button>
            </Link>
          </div>
        </div>
        <div className='relative aspect-[9/16] h-auto w-full max-w-[280px] lg:max-w-[320px]'>
          <Image
            src='/samrat-2.jpeg'
            alt='samrat image'
            layout='fill'
            className='rounded-lg border border-neutral-700 object-cover object-center'
          />
        </div>
      </PaddingContainer>

      <section aria-label='Contact Info'>
        <h2 className='text-center font-headline text-2xl-pacifico text-neutral-300 md:text-4xl-pacifico lg:text-5xl-pacifico'>
          Contact Us
        </h2>
        <PaddingContainer classname='flex mt-8 md:mt-10 lg:mt-12 flex-col md:flex-row justify-center gap-4 items-center lg:gap-8 md:items-start'>
          <div className=' flex flex-col font-body text-neutral-400'>
            <div className='flex items-center justify-start gap-x-4 border-b border-b-neutral-600 py-4 text-base md:py-6 md:text-[24px] lg:py-8 lg:text-[32px]'>
              <IoLocationSharp className='text-[36px] text-brand-400' />
              <p>94/D khatirbazar Lane, Serampore, Hooghly.</p>
            </div>
            <div className='flex items-center justify-start gap-x-4 border-b border-b-neutral-600 py-4 text-base md:py-6 md:text-[24px] lg:py-8 lg:text-[32px]'>
              <MdOutlineLocalPhone className='text-[36px] text-brand-400' />
              <p>+91 98756 98249</p>
            </div>
            <div className='flex items-center justify-start gap-x-4 border-b border-b-neutral-600 py-4 text-base md:py-6 md:text-[24px] lg:py-8 lg:text-[32px]'>
              <IoIosMail className='text-[36px] text-brand-400' />
              <p>thevisualparadise9@gmail.com</p>
            </div>
          </div>
          <div className='relative'>
            <Image src='/potrait-1.jpeg' alt='image' layout='fill' />
          </div>
          <div>
            <iframe
              aria-label='map direction'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.8746227431407!2d88.34739987476176!3d22.732901027077084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89b10966f5bab%3A0xb6d0dc3b7cba18a5!2sThe%20Visual%20Paradise!5e0!3m2!1sen!2sin!4v1713608058541!5m2!1sen!2sin'
              className='aspect-square w-full max-w-[320px] rounded-md lg:w-[360px] lg:max-w-[400px]'
              allowfullscreen=''
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            ></iframe>
          </div>
        </PaddingContainer>
      </section>

      <section className='mt-12 grid place-content-center md:mt-[72px] lg:mt-24'>
        <FeatureCard />
      </section>
    </main>
  );
};

export default About;
