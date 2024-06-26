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

async function getTestimonials() {
  const query = `*[_type == "testimonials"]{
    _id,
    name,
    role,
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

async function getLatestBlogPosts() {
  const query = `
    *[_type == "blogposts"] | order(publishedAt desc) [0...3]{
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

export const blogPosts = await getLatestBlogPosts();
