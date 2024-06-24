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

<<<<<<< Updated upstream
console.log(testimonials);
=======
async function getBlogPosts() {
  const query = `*[_type == "blogposts"]{
    _id,
    title,
    slug,
    author->{
      _id,
      name,
      image
    },
    mainImage{
      asset->{
        _id,
        url
      }
    },
    categories[]->{
      _id,
      title
    },
    publishedAt,
    body
  }`;
  const blogPosts = await client.fetch(query);
  return blogPosts;
}

export const blogPosts = await getBlogPosts();
>>>>>>> Stashed changes
