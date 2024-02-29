import { CreateComment } from "../types/Sanity.CommentTypes";
import { sanityClientConfig } from "./client";


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
  
  export async function createComments(newComment: CreateComment) {
    const result = await sanityClientConfig.create(newComment)
    return result
  } 
  

