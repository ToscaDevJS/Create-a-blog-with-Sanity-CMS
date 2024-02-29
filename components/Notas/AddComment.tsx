"use client";
import { createComments } from "@/sanity/lib/Sanity.CommentQueries";
import { CreateComment } from "@/sanity/types/Sanity.CommentTypes";
import { toast } from "sonner";
export const AddComment = () => {
  const newComment: CreateComment = {
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
