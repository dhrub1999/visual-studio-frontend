import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BlogCard = ({ post }) => {
  return (
    <article className=''>
      <Link href={`/blogs/${post.slug}`}>
        <Image
          src={post.mainImage}
          alt={post.title}
          width={720}
          height={400}
          className='large-md object-cover'
        />
        <h4 className='font-headline text-3xl-pacifico text-neutral-200'></h4>
        <p className='mb-4 text-neutral-400 '>
          {post.body[0]?.children[0]?.text.substring(0, 150)}...
        </p>
      </Link>
    </article>
  );
};

export default BlogCard;
