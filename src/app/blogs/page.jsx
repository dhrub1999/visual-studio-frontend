import React from 'react';

import PaddingContainer from '@/components/layouts/PaddingContainer';
import BlogCard from '@/components/ui/BlogCard';
import { blogPosts as blogs } from '@/lib/sanity/fetchData';
const Blogs = () => {
  return (
<<<<<<< Updated upstream
    <main>
      <PaddingContainer>
=======
    <main className=''>
      <PaddingContainer classname='h-full'>
>>>>>>> Stashed changes
        <h1 className='text-center font-headline text-4xl-pacifico text-neutral-200 md:text-5xl-pacifico lg:text-6xl-pacifico'>
          From the Blogs!
        </h1>
        <div>
          {blogs.map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
        </div>
      </PaddingContainer>
    </main>
  );
};

export default Blogs;
