import Image from "next/legacy/image";
import React from 'react';

const HeroGrid = ({ images }) => {
  return (
    <div className='mt-4 grid w-full grid-cols-1 gap-4 md:mt-6 md:w-auto md:grid-cols-tablet-col md:grid-rows-tablet-row lg:mt-8 lg:grid-cols-desktop-col lg:grid-rows-desktop-row'>
      <div className='relative aspect-video max-h-screen min-h-[120px] overflow-hidden md:aspect-auto md:h-auto'>
        <Image
          src={images[0]?.imageSource[0]?.asset?.url}
          layout='fill'
          alt='feature image'
          className='rounded border border-neutral-800 object-cover transition-all duration-300 ease-in hover:scale-105'
        />
      </div>
      <div className='relative aspect-video max-h-screen min-h-[120px] overflow-hidden md:col-span-2 md:aspect-auto md:h-auto'>
        <Image
          src={images[0]?.imageSource[1]?.asset?.url}
          layout='fill'
          alt='feature image'
          className='rounded border border-neutral-800 object-cover transition-all duration-300 ease-in hover:scale-105'
        />
      </div>
      <div className='relative aspect-[9/16] max-h-screen min-h-[120px] overflow-hidden md:row-span-2 md:row-start-2 md:aspect-auto md:h-auto lg:col-start-4 lg:row-span-3'>
        <Image
          src={images[0]?.imageSource[2]?.asset?.url}
          layout='fill'
          alt='feature image'
          className='rounded border border-neutral-800 object-cover transition-all duration-300 ease-in hover:scale-105'
        />
      </div>
      <div className='relative row-span-2 row-start-2 aspect-[9/16] max-h-screen min-h-[120px] overflow-hidden md:aspect-auto'>
        <Image
          src={images[0]?.imageSource[3]?.asset?.url}
          layout='fill'
          alt='feature image'
          className='rounded border border-neutral-800 object-cover object-center transition-all duration-300 ease-in hover:scale-105'
        />
      </div>
      <div className='relative aspect-[9/16] max-h-screen min-h-[120px] overflow-hidden md:row-span-3 md:row-start-2 md:aspect-auto lg:row-span-1'>
        <Image
          src={images[0]?.imageSource[4]?.asset?.url}
          layout='fill'
          alt='feature image'
          className='rounded border border-neutral-800 object-cover transition-all duration-300 ease-in hover:scale-105'
        />
      </div>
      <div className='relative aspect-video max-h-screen min-h-[120px] overflow-hidden md:row-start-4 md:aspect-auto lg:row-span-2 lg:row-start-2'>
        <Image
          src={images[0]?.imageSource[5]?.asset?.url}
          layout='fill'
          alt='feature image'
          className='rounded border border-neutral-800 object-cover transition-all duration-300 ease-in hover:scale-105'
        />
      </div>
      <div className='relative aspect-video max-h-screen min-h-[120px] overflow-hidden md:row-start-4 md:aspect-auto lg:col-start-2 lg:row-start-3'>
        <Image
          src={images[0]?.imageSource[6]?.asset?.url}
          layout='fill'
          alt='feature image'
          className='rounded border border-neutral-800 object-cover transition-all duration-300 ease-in hover:scale-105'
        />
      </div>
    </div>
  );
};

export default HeroGrid;
