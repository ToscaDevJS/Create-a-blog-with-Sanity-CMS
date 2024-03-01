"use client";
import { updateComments } from "@/sanity/queries/Sanity.CommentQueries";
import { UpdateComment } from "@/sanity/types/Sanity.CommentTypes";

export const UpdateComments = () => {
  const updateComment: UpdateComment = {
    userName: "ORLANDO JESU ABRIL TOSCAs",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis omnis cumque error dolor eius quos harum odio aliquid ducimus, doloremque nulla, commodi optio delectus amet assumenda dignissimos? Quisquam, culpa adipisci?",
  };

  return (
    <>
      <button
        onClick={() =>
          updateComments("5b9f7e89-524f-4572-bdba-decdbe350855", updateComment)
        }
        className="bg-white w-full border text-center hover:bg-zinc-100 text-black p-3 mt-10 rounded-md shadow-xl flex justify-center px-1 "
      >
        actualizar Comentario
      </button>
    </>
  );
};
