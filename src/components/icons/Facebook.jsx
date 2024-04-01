import React from 'react';
import { cn } from '@/lib/utils';

const Facebook = ({ className }) => {
  return (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={cn('group h-6 w-auto md:h-7 lg:h-8', className)}
    >
      <path
        className={`fill-neutral-400 transition-all duration-300 ease-in group-hover:fill-neutral-200`}
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M13.104 18.3332V11.879H15.2707L15.5948 9.364H13.1032V7.75817C13.1032 7.02984 13.3057 6.53317 14.3507 6.53317H15.6823V4.28317C15.0374 4.21454 14.3892 4.18116 13.7407 4.18317C11.8207 4.18317 10.5065 5.35567 10.5065 7.50817V9.364H8.33317V11.879H10.5057V18.3332H2.5865C2.07817 18.3332 1.6665 17.9215 1.6665 17.4132V2.5865C1.6665 2.07817 2.07817 1.6665 2.5865 1.6665H17.4132C17.9215 1.6665 18.3332 2.07817 18.3332 2.5865V17.4132C18.3332 17.9215 17.9215 18.3332 17.4132 18.3332H13.104Z'
        fill='#DEE2E6'
      />
    </svg>
  );
};

export default Facebook;
