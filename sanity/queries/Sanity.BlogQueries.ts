import { sanityClientConfig } from "../lib/client";

export async function getPost(slug: string) {
    const query = `*[_type == "post" && slug.current == "${slug}"][0]{
      title,
      slug,
      excerpt,
      publishedAt,
      categories[]->{_id,title},
      _id,
      mainImage,
      body
    }
    `;
    const data = await sanityClientConfig.fetch(query);
    return data;
  }


  export async function getAllPosts() {
    const query = `*[_type == "post"]{
      title,
      slug,
      excerpt,
      publishedAt,
      mainImage,
      categories[]->{_id,title},
      _id
    }
    `;
    const data = await sanityClientConfig.fetch(query);
    return data;
  }
  