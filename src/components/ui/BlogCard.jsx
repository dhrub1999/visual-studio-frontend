import Link from 'next/link';
import React from 'react';
import Image from 'next/legacy/image';

import { urlFor } from '@/lib/sanity/imageUrlBuilder';

const BlogCard = ({ blog }) => {
  return (
    <article className='group w-full max-w-[400px] rounded-lg border border-neutral-800 p-4 transition-all duration-300 ease-linear hover:border-neutral-700 md:p-6 xl:p-8'>
      <Link href={`/blogs/${blog?.slug}`}>
        <Image
          src={`${urlFor(blog?.mainImage)}`}
          alt={blog?.title}
          width={360}
          height={216}
          layout='responsive'
          className='large-md rounded-md object-cover shadow-md transition-transform duration-200 ease-linear group-hover:scale-110'
        />
        <div className='mt-2 md:mt-4'>
          {blog?.categories?.map((category) => (
            <span key={category?._id} className='mr-4 text-xs text-neutral-500'>
              {category?.title}
            </span>
          ))}
        </div>
        <h4 className='mt-1 line-clamp-3 font-body text-xl-pacifico font-semibold leading-[2rem] text-neutral-200 md:text-2xl-pacifico md:leading-[2.5rem]'>
          {blog?.title}
        </h4>
        <p className='mt-2 line-clamp-3 font-body text-sm text-neutral-400 md:mt-4 md:text-base lg:text-lg'>
          {blog?.body[0]?.children[0]?.text}
        </p>
        <div className='mt-8 flex items-center gap-x-4'>
          <div className='relative h-10 w-10 rounded-full border border-neutral-400'>
            <Image
              src={`${urlFor(blog?.author?.image)}`}
              alt={blog?.author?.name}
              height={36}
              width={36}
              className='rounded-full object-cover'
              layout='fill'
            />
          </div>
          <div className='flex flex-col items-start'>
            <span className='font-body text-sm font-semibold text-neutral-500'>
              {blog?.author?.name}
            </span>
            <span className='font-body text-xs font-normal text-neutral-500'>
              {new Date(blog.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default BlogCard;
