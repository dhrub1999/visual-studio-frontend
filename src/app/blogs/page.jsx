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
    <main>
      <PaddingContainer>
        <h1 className='text-center font-headline text-4xl-pacifico text-neutral-200 md:text-5xl-pacifico lg:text-6xl-pacifico'>
          From the Blogs!
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
