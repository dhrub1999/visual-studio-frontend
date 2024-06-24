import React from 'react';
import User from './User';
import { cn } from '@/lib/utils';
import RichTextToParagraph from '../other/RichTextToParagraph';

const Card = ({ userReview, className, size }) => {
  return (
    <figure
      className={cn(
        'rounded-md border border-neutral-600 bg-overlay-16 p-6 backdrop-blur-sm',
        className
      )}
    >
      <blockquote aria-label='review'>
        <RichTextToParagraph richText={userReview?.review} variant={size} />
      </blockquote>
      <div className='mt-4'>
        <User
          userImg={userReview?.imageUrl}
          name={userReview?.name}
          role={userReview?.role}
        />
      </div>
    </figure>
  );
};

export default Card;
