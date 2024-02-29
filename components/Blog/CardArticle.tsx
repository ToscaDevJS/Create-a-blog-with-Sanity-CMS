/* eslint-disable @next/next/no-img-element */
import { urlFor } from "@/sanity/lib/Sanity.Image";
import { Post } from "@/sanity/types/Sanity.BlogTypes";
import Link from "next/link";

export const CardArticle = ({
  categories,
  excerpt,
  mainImage,
  publishedAt,
  slug,
  title,
}: Post) => {
  return (
    <article className=" hover:bg-stone-900 p-5 rounded-2xl  md:w-1/3">
      <Link href={`/blog/post/${slug.current}`}>
        <img
          src={urlFor(mainImage.asset).url()}
          alt="Blog image"
          className="rounded-2xl w-full"
          decoding="async"
          loading="lazy"
        />
        {categories.map((category, index) => (
          <p
            key={index}
            className=" px-2 mt-2 bg-stone-700 inline-block rounded-full text-xs leading-7 tracking-wide font-bold"
          >
            {category.title}
          </p>
        ))}
        <h4 className="text-xl leading-7 tracking-wide mt-6 font-semibold text-textTitle-claro">
          {title}
        </h4>
        <p className=" font-light leading-7 tracking-tight mt-4 font-roboto text-textTitle-claro">
          {excerpt}
        </p>
        <p className=" font-medium leading-7 mt-4 font-roboto underline">
          {publishedAt}
        </p>
      </Link>
    </article>
  );
};
