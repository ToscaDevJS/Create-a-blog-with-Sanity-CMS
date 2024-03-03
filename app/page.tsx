import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";

export default function Home() {
  return (
    <main>
      <header className="border text-white p-5 text-2xl">
        <ul className="flex space-x-4">
          <li>
            <Link href="/blog" className="text-gray-500 underline">
              Blog
            </Link>
            <ArrowUpRightIcon className="h-8 w-8 text-gray-500 inline-block" />
          </li>
          <li>
            <Link href="/Comment" className=" text-gray-500 underline">
              Comment
            </Link>
            <ArrowUpRightIcon className="h-8 w-8 text-gray-500 inline-block" />
          </li>
          <li>
            <Link href="/notas" className=" text-gray-500 underline">
              notas
            </Link>
            <ArrowUpRightIcon className="h-8 w-8 text-gray-500 inline-block" />
          </li>
        </ul>
      </header>
    </main>
  );
}
