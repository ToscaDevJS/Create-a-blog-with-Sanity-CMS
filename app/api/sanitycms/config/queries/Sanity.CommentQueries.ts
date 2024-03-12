import { sanityClientConfig } from "../lib/client";
import { authUser } from "@/mocks/auth-user";
import { CommentCreate, CommentUpdaterFiel, ICommentCreate } from "../types/Sanity.CommentTypes";

//no guarda en cache
export async function loadComments() {
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
    // setNotas(allComment.result);
    return allComment.result;
  } catch (error) {
    console.error("Error al leer las notas:", error);
  }
}
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
  return result;
}
export async function updateComments(_id: string, updatePatch: CommentUpdaterFiel) {
  const patch = {
    set: {
      ...updatePatch,
    },
  };
  const result = await sanityClientConfig.patch(_id, patch).commit();
  return result;
}
export async function createComments(newData: ICommentCreate) {
  const newComment: CommentCreate = {
    _type: "comments",
    ...authUser,
    ...newData,
  };
  const result = await sanityClientConfig.create(newComment);
  return result;
}
