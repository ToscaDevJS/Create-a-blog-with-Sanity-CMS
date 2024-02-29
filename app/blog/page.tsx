import { CardArticle } from "@/components/Blog/CardArticle";
import { SectionTitle } from "@/components/SectionTitle";
import { getAllPosts } from "@/sanity/lib/Sanity.BlogQueries";
import { Post } from "@/sanity/types/Sanity.BlogTypes";

export default async function SectionBlog() {
  const posts: Post[] = await getAllPosts();
  return (
    <main className="p-5 max-w-7xl mx-auto">
      <SectionTitle
        title=" Últimos Eventos, Servicos y Noticias"
        descriptions="En este blog encontrarás una amplia variedad de contenido que te ayudará a sacar el máximo partido a tu imagen y a sentirte bien contigo misma..  "
      />
      <section className=" md:flex justify-center items-center my-12 ">
        {posts.map((data) => (
          <CardArticle key={data._id} {...data} />
        ))}
      </section>
    </main>
  );
}
