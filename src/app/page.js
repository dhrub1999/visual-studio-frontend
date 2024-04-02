import HeroGrid from '@/components/layouts/HeroGrid';
import PaddingContainer from '@/components/layouts/PaddingContainer';
import Button from '@/components/ui/Button';
import Carousel from '@/components/ui/Carousel';

const images = [
  '/landscape-1.jpeg',
  '/landscape-2.jpeg',
  '/landscape-3.jpeg',
  '/landscape-4.jpeg',
  '/landscape-5.jpeg',
  '/landscape-6.jpeg',
  '/landscape-7.jpeg',
];

const imageGallery = [
  '/landscape-1.jpeg',
  '/landscape-2.jpeg',
  '/potrait-1.jpeg',
  '/potrait-2.jpeg',
  '/landscape-3.jpeg',
  '/potrait-3.jpeg',
  '/landscape-4.jpeg',
];

export default function Home() {
  return (
    <main>
      <section className=''>
        <PaddingContainer classname='flex flex-col gap-y-8 md:gap-y-12 justify-center items-center lg:items-end h-[calc(100vh-64px)]'>
          <div className='flex w-full flex-col items-center justify-center gap-y-4 text-center lg:w-[60%] lg:items-end lg:text-right'>
            <h1 className='font-headline text-4xl-pacifico text-neutral-400 md:text-5xl-pacifico lg:text-6xl-pacifico'>
              Beyond Pixels, Into Emotions.
            </h1>
            <p className='font-body text-neutral-300 lg:w-[80%]'>
              Elevating event photography beyond expectations, Trust our proven
              track record of framing{' '}
              <span className='font-bold'>Perfection</span>.
            </p>
          </div>
          <div className='flex flex-col items-center gap-x-8 gap-y-4 md:flex-row-reverse md:justify-center md:gap-y-0 lg:gap-x-10'>
            <Button size={false} variant='primary'>
              Plan your shoot
            </Button>
            <Button variant='secondary'>View our portfolio</Button>
          </div>
          <div className='before:bg-overlay-72 absolute left-0 top-0 -z-[2] h-screen w-full before:absolute before:left-0 before:top-0 before:z-[1] before:h-full before:w-full before:content-[""]'>
            <Carousel imgSrc={images} />
          </div>
        </PaddingContainer>
      </section>

      { /* Signature Shots */}

      <section className='mt-12 md:mt-[72px] lg:mt-24'>
        <PaddingContainer>
          <h2 className='text-center font-headline text-2xl-pacifico md:text-4xl-pacifico lg:text-5xl-pacifico'>
            Signature Shots.
          </h2>
          <HeroGrid images={imageGallery} />
        </PaddingContainer>
      </section>
      
    </main>
  );
}
