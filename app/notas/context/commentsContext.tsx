"use client";
import { sanityClientConfig } from "@/sanity/lib/client";
import {
  CommentDBTypes,
  CommentUpdaterFiel,
} from "@/sanity/types/Sanity.CommentTypes";
import React, { createContext, useContext, useState } from "react";
import { toast } from "sonner";

interface CommentsContextType {
  comments: CommentDBTypes[];
  loadComments: () => Promise<void>;
  deleteComments: (_id: string) => Promise<void>;
  updateComments: (
    _id: string,
    updatePatch: CommentUpdaterFiel
  ) => Promise<void>;
}

//1-crear el contexto
export const CommentsContext = createContext<CommentsContextType | null>(null);

//2-crear el provider
export const CommentsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { comments, loadComments, deleteComments, updateComments } =
    useNotasCRUD();
  return (
    <CommentsContext.Provider
      value={{ comments, loadComments, deleteComments, updateComments }}
    >
      {children}
    </CommentsContext.Provider>
  );
};

//Hook para acceder al contexto mas validar que exista
export const UseComments = () => {
  const context = useContext(CommentsContext);
  if (!context) {
    throw new Error("useFilters debe usarse dentro de CommentsProvider");
  }
  return context;
};

//Hooks personalizados
const useNotasCRUD = () => {
  const [comments, setNotas] = useState<CommentDBTypes[]>([]);

  async function loadComments() {
    try {
      const res = await fetch(
        `https://etvkz4mu.api.sanity.io/v2024-01-26/data/query/production?query=*[_type =="comments"]`
      );
      if (!res.ok) {
        throw new Error(`Error al leer la nota: ${res.status}`);
      }
      const allComment = await res.json();
      // Puedes hacer algo con la nota leída si es necesario
      console.log("Notas leídas:", allComment.result);
      setNotas(allComment.result);
    } catch (error) {
      console.error("Error al leer las notas:", error);
    }
  }
  async function deleteComments(_id: string) {
    try {
      const res = await sanityClientConfig.delete(_id);
      console.log("Nota eliminada:", res);
      if (!res.results) {
        throw new Error(`Error al eliminar la nota:`);
      }
      setNotas((prevNotas) => prevNotas.filter((nota) => nota._id !== _id));
      toast("Comentario eliminado");
    } catch (error) {
      console.error("Error al eliminar la nota:", error);
    }
  }

  async function updateComments(_id: string, updatePatch: CommentUpdaterFiel) {
    try {
      const patch = {
        set: {
          ...updatePatch,
        },
      };
      const res = await sanityClientConfig.patch(_id, patch).commit();
      console.log("Nota actualizada:", res);

      // Update the comments state locally
      setNotas((prevComments) =>
        prevComments.map((comment) =>
          comment._id === _id ? { ...comment, ...res } : comment
        )
      );

      toast("Comentario actualizado");
    } catch (error) {
      console.error("Error al actualizar la nota:", error);
    }
  }

  return { comments, loadComments, deleteComments, updateComments };
};
