import React from 'react';

import PaddingContainer from '@/components/layouts/PaddingContainer';
import BlogCard from '@/components/ui/BlogCard';
import { blogPosts as blogs } from '@/lib/sanity/fetchData';
import FeatureCard from '@/components/ui/FeatureCard';

const Blogs = () => {
  return (
    <main className=''>
      <PaddingContainer classname='h-full'>
        <h1 className='mt-8 text-center font-headline text-3xl-pacifico text-neutral-200 md:mt-10 md:text-5xl-pacifico lg:text-6xl-pacifico'>
          From the Blogs
        </h1>
        <div className='mb-8 mt-4 grid w-full grid-cols-1 place-items-center gap-8 md:mb-12 md:mt-8 md:grid-cols-2 xl:grid-cols-3'>
          {blogs.map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
        </div>
        <section className='relative mb-4 mt-12 flex justify-center md:mb-6 md:mt-[72px] lg:mb-8 lg:mt-24'>
          <FeatureCard />
        </section>
      </PaddingContainer>
    </main>
  );
};

export default Blogs;
