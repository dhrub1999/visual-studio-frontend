import React from 'react';
import { blogPosts } from '@/lib/sanity/fetchData';
import PaddingContainer from '@/components/layouts/PaddingContainer';
import BlogTemplate from './BlogTemplate';

const BlogPage = async ({ params }) => {
  const projects = blogPosts;
  const slug = params.blog;
  const post = projects.find((project) => project.slug === slug);

  if (!post) return <div>Blog not found</div>;

  return (
    <>
      <PaddingContainer>
        <BlogTemplate searchedBlog={post} />
      </PaddingContainer>
    </>
  );
};

export default BlogPage;
