'use client';
import { cn } from '@/lib/utils';
import React, { useState, useEffect } from 'react';

const Carousel = ({ imgSrc, className }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % imgSrc.length);
    }, 3000);
    return () => clearInterval(interval);
  });
  return (
    <div className={cn('group h-screen w-full', className)}>
      <div
        style={{ backgroundImage: `url(${imgSrc[currentIndex]})` }}
        className='h-full w-full bg-cover bg-center bg-no-repeat transition-all duration-300'
      ></div>
    </div>
  );
};

export default Carousel;
