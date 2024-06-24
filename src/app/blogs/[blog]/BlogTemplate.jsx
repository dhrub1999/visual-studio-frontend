import React from 'react';
import Image from 'next/legacy/image';
import { urlFor } from '@/lib/sanity/imageUrlBuilder';
import FeatureCard from '@/components/ui/FeatureCard';

const BlogTemplate = ({ searchedBlog }) => {
  return (
    <>
      <article className='mx-auto mt-8 max-w-3xl rounded-md text-neutral-100'>
        <header className='mb-8'>
          <h1 className='mb-2 font-headline text-3xl-pacifico leading-[3.5rem] lg:text-4xl-pacifico'>
            {searchedBlog.title}
          </h1>
          <div className='flex items-center gap-x-4'>
            <Image
              src={`${urlFor(searchedBlog?.author?.image)}`}
              alt={`${searchedBlog?.author.name}'s profile image`}
              width={40}
              height={40}
              className='rounded-full'
            />
            <div className='text-sm'>
              <p className='font-semibold'>{searchedBlog.author.name}</p>
              <p className='text-neutral-400'>
                {new Date(searchedBlog.publishedAt).toLocaleDateString(
                  'en-US',
                  {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  }
                )}
              </p>
            </div>
          </div>
          {searchedBlog.categories && (
            <div className='mt-4'>
              {searchedBlog.categories.map((category) => (
                <span
                  key={category._id}
                  className='mr-2 inline-block rounded-full bg-neutral-700 px-3 py-1 text-xs font-medium text-neutral-200'
                >
                  {category.title}
                </span>
              ))}
            </div>
          )}
        </header>
        {searchedBlog.mainImage && (
          <div className='mb-8'>
            <Image
              src={`${urlFor(searchedBlog.mainImage)}`}
              alt={searchedBlog.title}
              layout='responsive'
              width={700}
              height={400}
              className='rounded-md object-cover object-top'
            />
          </div>
        )}
        <section className='prose prose-invert prose-neutral max-w-none'>
          {searchedBlog.body.map((block) => {
            if (block._type === 'block') {
              switch (block.style) {
                case 'h1':
                  return <h1 key={block._key}>{block.children[0].text}</h1>;
                case 'h2':
                  return <h2 key={block._key}>{block.children[0].text}</h2>;
                case 'h3':
                  return (
                    <h3
                      className='mt-4 text-2xl-pacifico font-semibold leading-10 text-neutral-200'
                      key={block._key}
                    >
                      {block.children[0].text}
                    </h3>
                  );
                case 'h4':
                  return (
                    <h4
                      className='text-xl-pacifico font-medium '
                      key={block._key}
                    >
                      {block.children[0].text}
                    </h4>
                  );
                case 'blockquote':
                  return (
                    <blockquote key={block._key}>
                      {block.children[0].text}
                    </blockquote>
                  );
                default:
                  return (
                    <p
                      className='mb-4 mt-2 font-body text-sm text-neutral-300 md:text-base'
                      key={block._key}
                    >
                      {block.children[0].text}
                    </p>
                  );
              }
            } else if (block._type === 'image') {
              return (
                <Image
                  key={block._key}
                  src={`${urlFor(block.asset)}`}
                  alt={block.alt}
                  layout='responsive'
                  width={700}
                  height={400}
                  className='my-12 rounded-md object-cover'
                />
              );
            }
            return null;
          })}
        </section>
      </article>
      <div className='mb-8 mt-24 grid w-full place-items-center'>
        <FeatureCard />
      </div>
    </>
  );
};

export default BlogTemplate;
