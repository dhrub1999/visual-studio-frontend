import React, { forwardRef } from 'react';
import { cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'text-base md:text-lg font-body font-semibold rounded-[4px] py-3 px-4 md:py-4 md:px-8 transition-all duration-300 ease-in hover:scale-105 shadow-md active:scale-95 active:ring-2 active:ring-brand-100 active:ring-offset-2',
  {
    variants: {
      variant: {
        primary: 'bg-brand-500 text-neutral-800',
        secondary: 'bg-transparent border border-brand-500 text-brand-500',
      },
      size: {
        true: 'w-full',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: false,
    },
  }
);

const Button = ({ className, size, variant, ...props }) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    ></button>
  );
};

export default Button;
