import React from 'react';
import { blogPosts } from '@/lib/sanity/fetchData';
import BlogCard from './BlogCard';
import Link from 'next/link';
import Button from './Button';

const BlogGrid = () => {
  const blogs = blogPosts.slice(0, 3);

  if (blogs.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className='mx-auto max-w-7xl p-4 pt-0'>
      <div className='mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
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
