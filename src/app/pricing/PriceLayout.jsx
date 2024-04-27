'use client';
import React, { useState } from 'react';
import PriceCard from './PriceCard';
import { FiArrowRight } from 'react-icons/fi';
import Whatsapp from '@/components/icons/Whatsapp';
import Facebook from '@/components/icons/Facebook';
import Instagram from '@/components/icons/Instagram';
import Link from 'next/link';
import { socialLinks } from '@/lib/data';

const PriceLayout = ({ plans }) => {
  const [selectedOption, setSelectedOption] = useState(plans[0].name);
  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className='flex w-full flex-col items-center gap-y-8 py-4 pb-8 font-body md:gap-y-10 lg:gap-y-12'>
      <ul className='flex w-full flex-wrap justify-center gap-6 rounded-xl px-4 py-4 md:gap-20 lg:gap-24'>
        {plans.map((plan, i) => (
          <li key={i}>
            <button
              className={`rounded-md border border-neutral-600 p-2 text-base text-neutral-400 transition-all duration-500 ease-in-out hover:ring-1 hover:ring-neutral-500 md:text-lg lg:text-xl ${selectedOption === plan.name ? 'font-bold ring-1 ring-brand-500 ' : 'font-medium'}`}
              onClick={() => handleOptionClick(plan.name)}
            >
              {plan.name}
            </button>
          </li>
        ))}
      </ul>
      <div className='flex w-full flex-col gap-y-4 text-center md:gap-y-5 lg:gap-y-6'>
        {/* <h3 className='font-headline text-2xl-pacifico text-brand-600 md:text-3xl-pacifico lg:text-4xl-pacifico'>
          {selectedOption}{' '}
          <span className='text-neutral-300'>Photography Plans!</span>
        </h3> */}
        <div
          aria-label={`${selectedOption} plans}`}
          className='flex w-full flex-wrap justify-center gap-6'
        >
          {plans
            .find((plan) => plan.name === selectedOption)
            .plans.map((p, i) => (
              <PriceCard key={i} plan={p} />
            ))}
        </div>
      </div>
      <div className='mt-0 flex items-center justify-center gap-x-4 md:gap-x-8'>
        <p className='flex items-center gap-x-2 font-body text-base font-semibold text-brand-400 md:text-lg lg:text-xl'>
          Message us now{' '}
          <span>
            <FiArrowRight />
          </span>
        </p>
        <div className='flex gap-x-2 md:gap-x-4 lg:gap-x-6'>
          <Link target='_blank' href={socialLinks[0].href}>
            <Whatsapp />
          </Link>
          <Link target='_blank' href={socialLinks[1].href}>
            <Facebook />
          </Link>
          <Link target='_blank' href={socialLinks[2].href}>
            <Instagram />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PriceLayout;
