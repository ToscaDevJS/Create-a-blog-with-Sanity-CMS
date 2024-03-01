"use client";
import { deleteComments } from "@/sanity/queries/Sanity.CommentQueries";

export const DeleteCommments = () => {
  const _id = "5b9f7e89-524f-4572-bdba-decdbe350855";
  return (
    <>
      <button
        onClick={() => deleteComments(_id)}
        className="bg-white w-full border text-center hover:bg-zinc-100 text-black p-3 mt-10 rounded-md shadow-xl flex justify-center px-1 "
      >
        Eliminar Comentario
      </button>
    </>
  );
};
