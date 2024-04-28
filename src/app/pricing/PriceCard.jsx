import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';

import Button from '@/components/ui/Button';
import Link from 'next/link';
import { socialLinks } from '@/lib/data';

const PriceCard = ({ plan }) => {
  return (
    <div className='flex w-full max-w-[360px] flex-col justify-between gap-y-8 rounded-md border border-neutral-700 bg-neutral-900 px-10 py-10 text-left font-body'>
      <div>
        <h6 className='text-lg font-semibold text-neutral-300 md:text-xl lg:text-xl-pacifico'>
          {plan.planTitle}
        </h6>
        <h5 className='font-body text-2xl-pacifico font-bold text-neutral-200 md:text-3xl-pacifico lg:text-4xl-pacifico'>
          ₹ {plan.planPrice}
        </h5>
      </div>
      <ul className='flex w-full flex-col gap-y-2'>
        {plan.planIncludes.map((item, i) => (
          <li
            key={i}
            className='flex items-center gap-x-2 text-base text-sm text-neutral-400'
          >
            <span>
              <FiCheckCircle className='h-4 w-4' />
            </span>
            {item}
          </li>
        ))}
      </ul>
      <Link href={socialLinks[0].href} target='_blank'>
        <Button className='mt-8 w-full'>Chat on whatsapp</Button>
      </Link>
    </div>
  );
};

export default PriceCard;
