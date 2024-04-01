import PaddingContainer from '@/components/layouts/PaddingContainer';
import Button from '@/components/ui/Button';

export default function Home() {
  return (
    <section>
      <PaddingContainer classname='flex flex-col gap-y-8 md:gap-y-12 items-end'>
        <div className='flex w-full flex-col items-center justify-start gap-y-4 text-center lg:w-[60%] lg:items-end lg:text-right'>
          <h1 className='font-headline text-4xl-pacifico text-neutral-400 md:text-5xl-pacifico lg:text-6xl-pacifico'>
            Beyond Pixels, Into Emotions.
          </h1>
          <p className='font-body text-neutral-300 lg:w-[80%]'>
            Elevating event photography beyond expectations, Trust our proven
            track record of framing{' '}
            <span className='font-bold'>Perfection</span>.
          </p>
        </div>
        <div className='flex flex-col items-center gap-x-8 gap-y-4 md:flex-row-reverse md:gap-y-0 lg:gap-x-10'>
          <Button size={false} variant='primary'>
            Plan your shoot
          </Button>
          <Button variant='secondary'>View our portfolio</Button>
        </div>
      </PaddingContainer>
    </section>
  );
}
