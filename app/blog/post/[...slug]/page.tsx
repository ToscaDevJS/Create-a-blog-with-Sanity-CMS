import SlugBlog from "@/components/Blog/SlugBlog";
import { getPost } from "@/sanity/lib/sanity.queries";
import { Post } from "@/sanity/types/Sanity.Shema.BlogTypes";

const SlugPage = async ({ params }: { params: { slug: string } }) => {
  const slug = String(params.slug);
  const post: Post = await getPost(slug);
  return (
    <main>
      <SlugBlog {...post} />
    </main>
  );
};

export default SlugPage;
