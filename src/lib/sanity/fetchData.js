import { client } from './client';

async function getGridImages() {
  const query = `
    *[_type == "heroGridImages"]{
      _id,
      imageSource[]{
        asset->{
          _id,
          url
        }
      }
    }
  `;
  const heroGridImages = await client.fetch(query);
  return heroGridImages;
}

export const heroGridImages = await getGridImages();

export async function getBlogs() {
  const query = `
    *[_type == "blogposts"]{
      _id,
      title,
      "slug": slug.current,
      publishedAt,
      "author": {
        "name": author->name,
        "image": author->image.asset->url
      },
      "mainImage": mainImage.asset->url,
      categories[]->{
        title
      },
      body
    }`;
  const blogPosts = await client.fetch(query);
  return blogPosts;
}

const blogs = await getBlogs();
export default blogs;

async function getTestimonials() {
  const query = `*[_type == "testimonials"]{
    _id,
    name,
    "imageUrl": image.asset->url,
    review[]{
      ...,
      children[]{...}
    }
  }`;
  const testimonials = await client.fetch(query);
  return testimonials;
}

export const testimonials = await getTestimonials();

console.log(testimonials);
