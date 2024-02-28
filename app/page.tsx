import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";

export default function Home() {
  return (
    <main>
      <header className="border text-white p-5 text-2xl">
        <ul className="flex space-x-4">
          <li>
            <Link href="/blog" className=" underline">
              Blog
            </Link>
            <ArrowUpRightIcon className="h-8 w-8 inline-block" />
          </li>
          <li>
            <Link href="/blog/slug-prueba" className=" underline">
              Blog/..slug
            </Link>
            <ArrowUpRightIcon className="h-8 w-8 inline-block" />
          </li>
        </ul>
      </header>
    </main>
  );
}
