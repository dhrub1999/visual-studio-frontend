import React from 'react';
import Link from 'next/link';

import { blogPosts as blogs } from '@/lib/sanity/fetchData';
import BlogCard from './BlogCard';
import Button from './Button';

const BlogGrid = () => {
  if (blogs.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className='mx-auto max-w-7xl p-4 pt-0'>
      <div className='mt-4 grid grid-cols-1 place-items-center gap-6 md:grid-cols-2 xl:grid-cols-3'>
        {blogs.map((blog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>
      <div className='mt-6 text-center'>
        <Link href='/blogs'>
          <Button variant='secondary'>View all Blogs</Button>
        </Link>
      </div>
    </div>
  );
};

export default BlogGrid;
