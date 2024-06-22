'use client';
import React from 'react';

import PaddingContainer from '@/components/layouts/PaddingContainer';
import BlogCard from '@/components/ui/BlogCard';

const Blogs = () => {
  //   const [blogPosts, setBlogPosts] = useState([]);
  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const posts = await getBlogs();
  //       setBlogPosts(posts);
  //     };

  //     fetchData();
  //   }, []);

  return (
    <main className='h-screen'>
      <PaddingContainer classname='h-full'>
        <h1 className='mt-24 text-center font-headline text-4xl-pacifico text-neutral-200 md:text-5xl-pacifico lg:text-6xl-pacifico'>
          Blogs will be here soon, stay tuned!
        </h1>
        {/* <section>
          {blogPosts.map((post) => (
            <BlogPreview key={post?._id} post={post} />
          ))}
        </section> */}
      </PaddingContainer>
    </main>
  );
};

export default Blogs;
