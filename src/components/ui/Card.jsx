import React from 'react';
import User from './User';
import { cn } from '@/lib/utils';

const Card = ({ userReview, className, size }) => {
  return (
    <figure
      className={cn(
        'rounded-md border border-neutral-600 bg-neutral-800 p-6',
        className
      )}
    >
      <blockquote aria-label='review'>
        <p
          className={`font-body font-normal text-neutral-100 ${size === 'large' ? 'text-base' : 'text-sm'}`}
        >
          {userReview?.review}
        </p>
      </blockquote>
      <div className='mt-4'>
        <User
          userImg={userReview?.imgSrc}
          name={userReview?.name}
          role={userReview?.profession}
        />
      </div>
    </figure>
  );
};

export default Card;
