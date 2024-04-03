import Image from 'next/image';
import React from 'react';

const User = ({ userImg, name, role }) => {
  return (
    <figcaption className='flex items-center gap-x-4 pt-4'>
      <div className='relative h-10 w-10 overflow-hidden rounded-full md:h-12 md:w-12'>
        <Image
          src={userImg}
          alt={`${name}'s profile image`}
          layout='fill'
          className='object-cover object-center'
        />
      </div>
      <div className='flex flex-col font-body'>
        <p className='text-base font-bold capitalize text-neutral-400 md:text-lg'>
          {name}
        </p>
        <p className='text-xs font-normal capitalize text-neutral-500 md:text-sm'>
          {role}
        </p>
      </div>
    </figcaption>
  );
};

export default User;
