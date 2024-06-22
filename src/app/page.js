import Link from 'next/link';

import HeroGrid from '@/components/layouts/HeroGrid';
import PaddingContainer from '@/components/layouts/PaddingContainer';
import Testimonials from '@/components/layouts/Testimonials';
import Button from '@/components/ui/Button';
import Carousel from '@/components/ui/Carousel';
import FeatureCard from '@/components/ui/FeatureCard';
import { socialLinks, testimonials } from '@/lib/data';
import {
  heroGridImages,
  testimonials as userReview,
} from '@/lib/sanity/fetchData';

const images = [
  '/landscape-1.jpeg',
  '/landscape-2.jpeg',
  '/landscape-3.jpeg',
  '/landscape-4.jpeg',
  '/landscape-5.jpeg',
  '/landscape-6.jpeg',
  '/landscape-7.jpeg',
];

export default function Home() {
  return (
    <main>
      <section className=''>
        <PaddingContainer classname='flex h-[calc(100vh-64px)] flex-col items-center justify-center gap-y-8 md:gap-y-12 lg:items-end'>
          <div className='flex w-full flex-col items-center justify-center gap-y-4 text-center lg:w-[60%] lg:items-end lg:text-right'>
            <h1 className='font-headline text-4xl-pacifico text-neutral-200 md:text-5xl-pacifico lg:text-6xl-pacifico'>
              Beyond Pixels, Into Emotions.
            </h1>
            <p className='font-body text-neutral-300 lg:w-[80%]'>
              Elevating event photography beyond expectations, Trust our proven
              track record of framing{' '}
              <span className='font-bold'>Perfection</span>.
            </p>
          </div>
          <div className='flex flex-col items-center gap-x-8 gap-y-4 md:flex-row-reverse md:justify-center md:gap-y-0 lg:gap-x-10'>
            <Link href={socialLinks[0].href} target='_blank'>
              <Button size={false} variant='primary'>
                Plan your shoot
              </Button>
            </Link>
            <Link
              target='_blank'
              href='https://drive.google.com/drive/folders/1Gi7OCjcxUcwXf_vkWzpyKQlMGrZgRkCY'
            >
              <Button variant='secondary'>View our portfolio</Button>
            </Link>
          </div>
          <div className='absolute left-0 top-0 -z-[2] h-screen w-full before:absolute before:left-0 before:top-0 before:z-[1] before:h-full before:w-full before:bg-overlay-72 before:content-[""]'>
            <Carousel imgSrc={images} />
          </div>
        </PaddingContainer>
      </section>

      {/* Signature Shots */}

      <section className='relative mt-12 md:mt-[72px] lg:mt-24'>
        <PaddingContainer classname='grid place-items-center'>
          <h2 className='text-center font-headline text-2xl-pacifico text-neutral-300 md:text-4xl-pacifico lg:text-5xl-pacifico'>
            Signature Shots.
          </h2>
          <HeroGrid images={heroGridImages} />
          <Link
            target='_blank'
            href='https://drive.google.com/drive/folders/1Gi7OCjcxUcwXf_vkWzpyKQlMGrZgRkCY'
          >
            <Button variant='secondary' className='mt-8 block lg:mt-12'>
              View our Portfolio
            </Button>
          </Link>
        </PaddingContainer>
      </section>

      {/* Testimonials */}
      <section className='relative mt-12 overflow-hidden md:mt-[72px] lg:mt-24'>
        <PaddingContainer classname='relative'>
          <h2 className='text-center font-headline text-2xl-pacifico text-neutral-300 md:text-4xl-pacifico lg:text-5xl-pacifico'>
            Happy clients, Happy stories.
          </h2>
          <Testimonials userReviews={userReview} className='mt-6 md:mt-6' />
          <Link href={socialLinks[0].href} target='_blank'>
            <Button variant='primary' className='mx-auto mt-8 block lg:mt-12'>
              Plan your Shoot
            </Button>
          </Link>
        </PaddingContainer>
        <div className='clip-path-star 0 absolute -bottom-[10%] -right-[20%] -z-10 h-[80rem] w-[80rem] bg-neutral-700 content-[""]'></div>
      </section>

      {/* Offer */}
      <section className='relative mb-4 mt-12 flex justify-center md:mb-6 md:mt-[72px] lg:mb-8 lg:mt-24'>
        <FeatureCard />
      </section>
    </main>
  );
}
