import { toast } from "sonner";
import { sanityClientConfig } from "../lib/client";
import { ICommentCreate, CommentCreate, CommentUpdaterFiel } from "../types/Sanity.CommentTypes";
import { authUser } from "@/mocks/auth-user";



export async function getPostComments(_id: string) {
  const query = `*[_type == "comments" && _id == "${_id}"][0]{
    text,
    rating,
    _id,
  }
  `;
  const data = await sanityClientConfig.fetch(query);
  return data;
}
export async function getAllComments() {
  const query = `*[_type == "comments"]{
      _id,
      productoId,
      _createdAt,
      _updatedAt,
      userUid,
      userImage,
      userEmail,
      userName,
      rating,
      text,
      uploadImage,
      }
    `;
  const data = await sanityClientConfig.fetch(query);
  return data;
}
export async function createCommentSimple(newComment: CommentCreate) {
  const result = await sanityClientConfig.create(newComment);
  return result;
}
export async function deleteComments(_id: string) {
  const result = await sanityClientConfig.delete(_id);
  toast("Comentario eliminado");
  return result;
}
export async function updateComments(_id: string, updatePatch: CommentUpdaterFiel) {
  const patch = {
    set: {
      ...updatePatch,
    },
  };
  const result = await sanityClientConfig.patch(_id, patch).commit();
  toast("Comentario actualizado");
  return result;
}
export async function createComments(newData: ICommentCreate) {
  const newComment: CommentCreate = {
    _type: "comments",
    ...authUser,
    ...newData,
  };
  const result = await sanityClientConfig.create(newComment);
  toast("Comentario  añadido ok");
  return result;
}
