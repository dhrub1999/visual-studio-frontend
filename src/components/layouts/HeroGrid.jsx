import Image from 'next/image';
import React from 'react';

const HeroGrid = ({ images }) => {
  return (
    <div className='md:grid-cols-tablet-col lg:grid-cols-desktop-col md:grid-rows-tablet-row lg:grid-rows-desktop-row mt-4 grid grid-cols-1 gap-4 md:mt-6 lg:mt-8'>
      <div className='relative w-full'>
        <Image
          src={images[0]}
          layout='fill'
          className='rounded border border-neutral-800 object-cover'
        />
      </div>
      <div className='relative w-full md:col-span-2'>
        <Image
          src={images[1]}
          layout='fill'
          className='rounded border border-neutral-800 object-cover'
        />
      </div>
      <div className='relative md:row-span-2 md:row-start-2 lg:col-start-4 lg:row-span-3'>
        <Image
          src={images[5]}
          layout='fill'
          className='rounded border border-neutral-800 object-cover'
        />
      </div>
      <div className='relative row-span-2 row-start-2'>
        <Image
          src={images[3]}
          layout='fill'
          className='rounded border border-neutral-800 object-cover object-center'
        />
      </div>
      <div className='relative md:row-span-3 md:row-start-2 lg:row-span-1'>
        <Image
          src={images[2]}
          layout='fill'
          className='rounded border border-neutral-800 object-cover'
        />
      </div>
      <div className='relative md:row-start-4 lg:row-span-2 lg:row-start-2'>
        <Image
          src={images[4]}
          layout='fill'
          className='rounded border border-neutral-800 object-cover'
        />
      </div>
      <div className='relative overflow-hidden md:row-start-4 lg:col-start-2 lg:row-start-3'>
        <Image
          src={images[6]}
          layout='fill'
          className='rounded border border-neutral-800 object-cover transition-all duration-300 ease-in hover:scale-105'
        />
      </div>
    </div>
  );
};

export default HeroGrid;
