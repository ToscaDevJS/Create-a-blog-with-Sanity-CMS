"use client";
import {
  createComments,
  deleteComments,
} from "@/sanity/queries/Sanity.CommentQueries";
import { CommentCreate } from "@/sanity/types/Sanity.CommentTypes";
import { toast } from "sonner";
import { updateComments } from "@/sanity/queries/Sanity.CommentQueries";
import { CommentUpdaterFiel } from "@/sanity/types/Sanity.CommentTypes";

export const Adds = () => {
  const newComment: CommentCreate = {
    _type: "comments",
    userName: "maria orly",
    productoId: "1",
    userUid: "23456787654",
    userEmail: "mari@gmail.com",
    userImage:
      "https://img.freepik.com/psd-gratis/ilustracion-3d-avatar-o-perfil-humano_23-2150671142.jpg?w=740&t=st=1709185958~exp=1709186558~hmac=38eaf715d801e0e5c295732d183eab136292ed25d96eb3719a8d44d6e7072642",
    text: "Turpis in eu mi bibendum neque. A cras semper auctor neque vitae. Facilisis sed odio morbi quis commodo. Purus non enim praesent elementum facilisis leo. Sagittis orci a sceler",
    rating: "5",
  };
  return (
    <>
      <button
        onClick={async () => {
          await createComments(newComment);
          toast("Comentario  añadido ok");
        }}
        className="bg-white w-full border text-center hover:bg-zinc-100 text-black p-3 mt-10 rounded-md shadow-xl flex justify-center px-1 "
      >
        Añadir Comentario
      </button>
    </>
  );
};
export const Deletsas = () => {
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
export const Updats = () => {
  const updateComment: CommentUpdaterFiel = {
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
