import Image from "next/legacy/image";
import React from 'react';

const PricingGrid = ({ portraitArr, landscapeArr }) => {
  return (
    <>
      <div className='feature-portrait-grid right-10'>
        {portraitArr.map((img, i) => (
          <figure
            key={i}
            className='relative aspect-[11/16] h-40 w-auto overflow-hidden rounded-xl object-cover md:h-[12rem]'
          >
            <Image src={img} alt='img' layout='fill' className='object-cover' />
          </figure>
        ))}
      </div>

      <div className='feature-landscape-grid -left-10'>
        {landscapeArr.map((img, i) => (
          <figure
            key={i}
            className='relative aspect-[16/11] h-auto w-48 overflow-hidden rounded-xl object-cover md:w-[14rem]'
          >
            <Image src={img} alt='img' layout='fill' className='object-cover' />
          </figure>
        ))}
      </div>
    </>
  );
};

export default PricingGrid;
